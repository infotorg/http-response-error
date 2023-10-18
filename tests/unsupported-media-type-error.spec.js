import requestId from './utils/request-id';
import UnsupportedMediaTypeError from '../src/unsupported-media-type-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests UnsupportedMediaTypeError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new UnsupportedMediaTypeError()).toBeInstanceOf(UnsupportedMediaTypeError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnsupportedMediaTypeError().toPojo()).toStrictEqual({
        error: {
          message: 'Unsupported Media Type',
          requestId: '',
          code: 415,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new UnsupportedMediaTypeError('Unsupported Media Type')).toBeInstanceOf(UnsupportedMediaTypeError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnsupportedMediaTypeError('Unsupported Media Type!').toPojo()).toStrictEqual({
        error: {
          message: 'Unsupported Media Type!',
          requestId: '',
          code: 415,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 415,
        message: 'Oooops, unsupported media type!',
        requestId: requestId(),
        details: 'The payload format is in an unsupported format',
      };
      const expected = {
        error: config,
      };
      const error = new UnsupportedMediaTypeError(config);

      expect(error).toBeInstanceOf(UnsupportedMediaTypeError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 415,
        message: 'Oooops, unsupported media type!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new UnsupportedMediaTypeError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(UnsupportedMediaTypeError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
