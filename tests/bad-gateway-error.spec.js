import requestId from './utils/request-id';
import BadGatewayError from '../src/bad-gateway-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests BadGatewayError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Bad Gateway',
          requestId: '',
          code: 502,
          details: '',
        },
      };
      const error = new BadGatewayError();

      expect(error).toBeInstanceOf(BadGatewayError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new BadGatewayError('Bad Gateway from upstream server!');
      const expected = {
        error: {
          message: 'Bad Gateway from upstream server!',
          requestId: '',
          code: 502,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(BadGatewayError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 502,
        message: 'Baaaaaad Gateway :-(',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new BadGatewayError(config);

      expect(error).toBeInstanceOf(BadGatewayError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 502,
        message: 'Baaaaaad Gateway :-(',
        requestId: requestId(),
        details: 'Check your upstream server',
      };
      const expected = {
        error: config,
      };

      const error = new BadGatewayError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(BadGatewayError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
