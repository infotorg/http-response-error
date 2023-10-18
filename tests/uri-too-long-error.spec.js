import requestId from './utils/request-id';
import UriToLongError from '../src/uri-too-long-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests UriToLongError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new UriToLongError()).toBeInstanceOf(UriToLongError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UriToLongError().toPojo()).toStrictEqual({
        error: {
          message: 'URI Too Long',
          requestId: '',
          code: 414,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new UriToLongError('URI Too Long')).toBeInstanceOf(UriToLongError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UriToLongError('URI Too Long').toPojo()).toStrictEqual({
        error: {
          message: 'URI Too Long',
          requestId: '',
          code: 414,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 414,
        message: 'Oooops, URI too long!',
        requestId: requestId(),
        details: 'The URI you are trying to access is too long',
      };
      const expected = {
        error: config,
      };
      const error = new UriToLongError(config);

      expect(error).toBeInstanceOf(UriToLongError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 414,
        message: 'Oooops, URI too long!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new UriToLongError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(UriToLongError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
