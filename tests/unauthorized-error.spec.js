import requestId from './utils/request-id';
import UnauthorizedError from '../src/unauthorized-error.js';

describe('Tests UnauthorizedError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new UnauthorizedError()).toBeInstanceOf(UnauthorizedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnauthorizedError().toPojo()).toStrictEqual({
        error: {
          message: 'Unauthorized',
          requestId: '',
          code: 401,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new UnauthorizedError('Unauthorized')).toBeInstanceOf(UnauthorizedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnauthorizedError('Unauthorized').toPojo()).toStrictEqual({
        error: {
          message: 'Unauthorized',
          requestId: '',
          code: 401,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it can create an instance', () => {
      expect(
        new UnauthorizedError({
          code: 401,
          message: 'You need to login',
          requestId: requestId(),
          details: '',
        })
      ).toBeInstanceOf(UnauthorizedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(
        new UnauthorizedError({
          code: 401,
          message: 'You need to login',
          requestId: requestId(),
          details: 'The resource is accessible only for authorized users',
        }).toPojo()
      ).toStrictEqual({
        error: {
          code: 401,
          message: 'You need to login',
          requestId: requestId(),
          details: 'The resource is accessible only for authorized users',
        },
      });
    });
  });
});
