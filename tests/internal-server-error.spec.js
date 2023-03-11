import requestId from './utils/request-id';
import InternalServerError from '../src/internal-server-error.js';

describe('Tests InternalServerError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new InternalServerError();
      const expected = {
        error: {
          message: 'Internal Server Error',
          requestId: '',
          code: 500,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(InternalServerError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new InternalServerError('Something went wrong');
      const expected = {
        error: {
          message: 'Something went wrong',
          requestId: '',
          code: 500,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(InternalServerError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 500,
        message: 'Oh my internal server error!',
        requestId: requestId(),
        details: '',
      };

      const error = new InternalServerError(config);
      const expected = {
        error: config,
      };

      expect(error).toBeInstanceOf(InternalServerError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
