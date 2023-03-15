import requestId from './utils/request-id';
import NotFoundError from '../src/not-found-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests NotFoundError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new NotFoundError()).toBeInstanceOf(NotFoundError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotFoundError().toPojo()).toStrictEqual({
        error: {
          message: 'Not Found',
          requestId: '',
          code: 404,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new NotFoundError('Not Found')).toBeInstanceOf(NotFoundError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotFoundError('Not Found').toPojo()).toStrictEqual({
        error: {
          message: 'Not Found',
          requestId: '',
          code: 404,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 404,
        message: 'Oooops, nothing found',
        requestId: requestId(),
        details: 'Check your search query in a request',
      };
      const expected = {
        error: config,
      };
      const error = new NotFoundError(config);

      expect(error).toBeInstanceOf(NotFoundError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 404,
        message: 'Oooops, nothing found',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new NotFoundError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(NotFoundError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
