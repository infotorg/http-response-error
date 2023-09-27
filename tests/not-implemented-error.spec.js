import requestId from './utils/request-id';
import NotImplementedError from '../src/not-implemented-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests NotImplementedError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new NotImplementedError()).toBeInstanceOf(NotImplementedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotImplementedError().toPojo()).toStrictEqual({
        error: {
          message: 'Not Implemented',
          requestId: '',
          code: 501,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new NotImplementedError('Not Implemented')).toBeInstanceOf(NotImplementedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotImplementedError('Not Implemented').toPojo()).toStrictEqual({
        error: {
          message: 'Not Implemented',
          requestId: '',
          code: 501,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 501,
        message: 'Oooops, not implemented',
        requestId: requestId(),
        details: 'Check your search query in a request',
      };
      const expected = {
        error: config,
      };
      const error = new NotImplementedError(config);

      expect(error).toBeInstanceOf(NotImplementedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 501,
        message: 'Oooops, not implemented',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new NotImplementedError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(NotImplementedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
