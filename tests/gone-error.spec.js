import requestId from './utils/request-id';
import GoneError from '../src/gone-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests GoneError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new GoneError()).toBeInstanceOf(GoneError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new GoneError().toPojo()).toStrictEqual({
        error: {
          message: 'Gone',
          requestId: '',
          code: 410,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new GoneError('Gone')).toBeInstanceOf(GoneError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new GoneError('Gone').toPojo()).toStrictEqual({
        error: {
          message: 'Gone',
          requestId: '',
          code: 410,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 410,
        message: 'Oooops, gone!',
        requestId: requestId(),
        details: 'Access to the target resource is no longer available',
      };
      const expected = {
        error: config,
      };
      const error = new GoneError(config);

      expect(error).toBeInstanceOf(GoneError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 410,
        message: 'Oooops, gone!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new GoneError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(GoneError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
