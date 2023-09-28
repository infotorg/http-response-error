import requestId from './utils/request-id';
import NotAcceptableError from '../src/not-acceptable-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests NotAcceptableError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new NotAcceptableError()).toBeInstanceOf(NotAcceptableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotAcceptableError().toPojo()).toStrictEqual({
        error: {
          message: 'Not Acceptable',
          requestId: '',
          code: 406,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new NotAcceptableError('Not Acceptable')).toBeInstanceOf(NotAcceptableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotAcceptableError('Not Acceptable').toPojo()).toStrictEqual({
        error: {
          message: 'Not Acceptable',
          requestId: '',
          code: 406,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 406,
        message: 'Oooops, not acceptable',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new NotAcceptableError(config);

      expect(error).toBeInstanceOf(NotAcceptableError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 406,
        message: 'Oooops, not acceptable',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new NotAcceptableError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(NotAcceptableError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
