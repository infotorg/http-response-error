import requestId from './utils/request-id';
import TooManyRequestsError from '../src/too-many-requests-error.js';

describe('Tests TooManyRequestsError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new TooManyRequestsError();
      const expected = {
        error: {
          message: 'Too Many Requests',
          requestId: '',
          code: 429,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(TooManyRequestsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new TooManyRequestsError('Too Many Requests for you!');
      const expected = {
        error: {
          message: 'Too Many Requests for you!',
          requestId: '',
          code: 429,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(TooManyRequestsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 429,
        message: 'Rate limit exceeded',
        requestId: requestId(),
        details: 'Please, contact our support https://support.example.com',
      };

      const error = new TooManyRequestsError(config);
      const expected = {
        error: config,
      };

      expect(error).toBeInstanceOf(TooManyRequestsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
