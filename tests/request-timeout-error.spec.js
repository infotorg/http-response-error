import requestId from './utils/request-id';
import RequestTimeoutError from '../src/request-timeout-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests RequestTimeoutError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new RequestTimeoutError()).toBeInstanceOf(RequestTimeoutError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new RequestTimeoutError().toPojo()).toStrictEqual({
        error: {
          message: 'Request Timeout',
          requestId: '',
          code: 408,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new RequestTimeoutError('Request Timeout')).toBeInstanceOf(RequestTimeoutError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new RequestTimeoutError('Request Timeout').toPojo()).toStrictEqual({
        error: {
          message: 'Request Timeout',
          requestId: '',
          code: 408,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 408,
        message: 'Oooops, Request Timeout!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new RequestTimeoutError(config);

      expect(error).toBeInstanceOf(RequestTimeoutError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 408,
        message: 'Oooops, Request Timeout!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new RequestTimeoutError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(RequestTimeoutError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
