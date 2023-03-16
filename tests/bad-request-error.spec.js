import requestId from './utils/request-id';
import BadRequestError from '../src/bad-request-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests BadRequestError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Bad Request',
          requestId: '',
          code: 400,
          details: '',
        },
      };
      const error = new BadRequestError();

      expect(error).toBeInstanceOf(BadRequestError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new BadRequestError('Bad Request');
      const expected = {
        error: {
          message: 'Bad Request',
          requestId: '',
          code: 400,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(BadRequestError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 400,
        message: 'Baaaaaad Request :-(',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new BadRequestError(config);

      expect(error).toBeInstanceOf(BadRequestError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 400,
        message: 'Baaaaaad Request :-(',
        requestId: requestId(),
        details: 'Check your request body',
      };
      const expected = {
        error: config,
      };

      const error = new BadRequestError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(BadRequestError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
