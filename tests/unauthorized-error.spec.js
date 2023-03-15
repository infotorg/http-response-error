import requestId from './utils/request-id';
import UnauthorizedError from '../src/unauthorized-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests UnauthorizedError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Unauthorized',
          requestId: '',
          code: 401,
          details: '',
        },
      };
      const error = new UnauthorizedError();

      expect(error).toBeInstanceOf(UnauthorizedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Unauthorized user',
          requestId: '',
          code: 401,
          details: '',
        },
      };
      const error = new UnauthorizedError('Unauthorized user');

      expect(error).toBeInstanceOf(UnauthorizedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 401,
        message: 'You need to login',
        requestId: requestId(),
        details: 'The resource is accessible only for authorized users',
      };
      const expected = {
        error: config,
      };
      const error = new UnauthorizedError(config);

      expect(error).toBeInstanceOf(UnauthorizedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 401,
        message: 'You need to login',
        requestId: requestId(),
        details: 'The resource is accessible only for authorized users',
      };
      const expected = {
        error: config,
      };

      const error = new UnauthorizedError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(UnauthorizedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
