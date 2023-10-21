import requestId from './utils/request-id';
import ExpectationFailedError from '../src/expectation-failed-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ExpectationFailedError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new ExpectationFailedError()).toBeInstanceOf(ExpectationFailedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ExpectationFailedError().toPojo()).toStrictEqual({
        error: {
          message: 'Expectation Failed',
          requestId: '',
          code: 417,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new ExpectationFailedError('Expectation Failed')).toBeInstanceOf(ExpectationFailedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ExpectationFailedError('Expectation Failed!').toPojo()).toStrictEqual({
        error: {
          message: 'Expectation Failed!',
          requestId: '',
          code: 417,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 417,
        message: 'Oooops, expectation failed!',
        requestId: requestId(),
        details: "The expectation given in the request's Expect header could not be met",
      };
      const expected = {
        error: config,
      };
      const error = new ExpectationFailedError(config);

      expect(error).toBeInstanceOf(ExpectationFailedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 417,
        message: 'Oooops, expectation failed!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new ExpectationFailedError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ExpectationFailedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
