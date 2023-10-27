import requestId from './utils/request-id';
import ImATeapotError from '../src/im-a-teapot-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ImATeapotError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new ImATeapotError()).toBeInstanceOf(ImATeapotError);
    });

    test('it should return a proper status message', () => {
      expect(new ImATeapotError().status).toBe("418 I'm a teapot");
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ImATeapotError().toPojo()).toStrictEqual({
        error: {
          message: "I'm a teapot",
          requestId: '',
          code: 418,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new ImATeapotError('I do not brew coffee')).toBeInstanceOf(ImATeapotError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ImATeapotError('I do not brew coffee').toPojo()).toStrictEqual({
        error: {
          message: 'I do not brew coffee',
          requestId: '',
          code: 418,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 418,
        message: 'Oooops, no coffee today!',
        requestId: requestId(),
        details: 'I do not brew coffee because I am a teapot',
      };
      const expected = {
        error: config,
      };
      const error = new ImATeapotError(config);

      expect(error).toBeInstanceOf(ImATeapotError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 418,
        message: 'Oooops, no coffee today!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new ImATeapotError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ImATeapotError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
