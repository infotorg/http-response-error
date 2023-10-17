import requestId from './utils/request-id';
import LengthRequiredError from '../src/length-required-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests LengthRequiredError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new LengthRequiredError()).toBeInstanceOf(LengthRequiredError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new LengthRequiredError().toPojo()).toStrictEqual({
        error: {
          message: 'Length Required',
          requestId: '',
          code: 411,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new LengthRequiredError('Length Required')).toBeInstanceOf(LengthRequiredError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new LengthRequiredError('Length Required').toPojo()).toStrictEqual({
        error: {
          message: 'Length Required',
          requestId: '',
          code: 411,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 411,
        message: 'Oooops, Content-Length header required',
        requestId: requestId(),
        details: 'Content-Length header is missing',
      };
      const expected = {
        error: config,
      };
      const error = new LengthRequiredError(config);

      expect(error).toBeInstanceOf(LengthRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 411,
        message: 'Oooops, Content-Length header required',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new LengthRequiredError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(LengthRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
