import requestId from './utils/request-id';
import ContentTooLargeError from '../src/content-too-large-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ContentTooLargeError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new ContentTooLargeError()).toBeInstanceOf(ContentTooLargeError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ContentTooLargeError().toPojo()).toStrictEqual({
        error: {
          message: 'Content Too Large',
          requestId: '',
          code: 413,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new ContentTooLargeError('Content Too Large')).toBeInstanceOf(ContentTooLargeError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ContentTooLargeError('Content Too Large!').toPojo()).toStrictEqual({
        error: {
          message: 'Content Too Large!',
          requestId: '',
          code: 413,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 413,
        message: 'Oooops, content toooooo large!',
        requestId: requestId(),
        details: 'The payload too large',
      };
      const expected = {
        error: config,
      };
      const error = new ContentTooLargeError(config);

      expect(error).toBeInstanceOf(ContentTooLargeError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 413,
        message: 'Payload Too Large',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new ContentTooLargeError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ContentTooLargeError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
