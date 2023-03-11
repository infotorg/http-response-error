import requestId from './utils/request-id';
import ServiceUnavailableError from '../src/service-unavailable-error.js';

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

  describe('Instantiation with a config object param', () => {
    test('it can create an instance', () => {
      expect(
        new ServiceUnavailableError({
          code: 503,
          message: 'Oh my internal server error!',
          requestId: requestId(),
          details: '',
        })
      ).toBeInstanceOf(ServiceUnavailableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(
        new ServiceUnavailableError({
          code: 503,
          message: 'Oh my service unavailable!',
          requestId: requestId(),
          details: 'Try again later',
        }).toPojo()
      ).toStrictEqual({
        error: {
          code: 503,
          message: 'Oh my service unavailable!',
          requestId: requestId(),
          details: 'Try again later',
        },
      });
    });
  });
});
