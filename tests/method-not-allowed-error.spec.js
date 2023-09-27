import requestId from './utils/request-id';
import MethodNotAllowedError from '../src/method-not-allowed-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests MethodNotAllowedError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Method Not Allowed',
          requestId: '',
          code: 405,
          details: '',
        },
      };
      const error = new MethodNotAllowedError();

      expect(error).toBeInstanceOf(MethodNotAllowedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new MethodNotAllowedError('Method Not Allowed for the endpoint');
      const expected = {
        error: {
          message: 'Method Not Allowed for the endpoint',
          requestId: '',
          code: 405,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(MethodNotAllowedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 405,
        message: 'Method Not Allowed :-(',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new MethodNotAllowedError(config);

      expect(error).toBeInstanceOf(MethodNotAllowedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 405,
        message: 'Method Not Allowed :-(',
        requestId: requestId(),
        details: 'Allowed methods: GET, POST, PUT, DELETE',
      };
      const expected = {
        error: config,
      };

      const error = new MethodNotAllowedError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(MethodNotAllowedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
