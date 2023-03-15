import requestId from './utils/request-id';
import ServiceUnavailableError from '../src/service-unavailable-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ServiceUnavailableError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new ServiceUnavailableError()).toBeInstanceOf(ServiceUnavailableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ServiceUnavailableError().toPojo()).toStrictEqual({
        error: {
          message: 'Service Unavailable',
          requestId: '',
          code: 503,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new ServiceUnavailableError('Service Unavailable')).toBeInstanceOf(ServiceUnavailableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ServiceUnavailableError('Service Unavailable').toPojo()).toStrictEqual({
        error: {
          message: 'Service Unavailable',
          requestId: '',
          code: 503,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 503,
        message: 'Oh my, the Service is unavailable!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new ServiceUnavailableError(config);

      expect(error).toBeInstanceOf(ServiceUnavailableError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 503,
        message: 'Oh my, the Service is unavailable!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new ServiceUnavailableError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ServiceUnavailableError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
