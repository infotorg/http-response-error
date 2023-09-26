import requestId from './utils/request-id';
import GatewayTimeoutError from '../src/gateway-timeout-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests GatewayTimeoutError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Gateway Timeout',
          requestId: '',
          code: 504,
          details: '',
        },
      };
      const error = new GatewayTimeoutError();

      expect(error).toBeInstanceOf(GatewayTimeoutError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new GatewayTimeoutError('Gateway timeout from upstream server!');
      const expected = {
        error: {
          message: 'Gateway timeout from upstream server!',
          requestId: '',
          code: 504,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(GatewayTimeoutError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 504,
        message: 'Gateway Timeout :-(',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new GatewayTimeoutError(config);

      expect(error).toBeInstanceOf(GatewayTimeoutError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 504,
        message: 'Gateway Timeout :-(',
        requestId: requestId(),
        details: 'Check your upstream server',
      };
      const expected = {
        error: config,
      };

      const error = new GatewayTimeoutError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(GatewayTimeoutError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
