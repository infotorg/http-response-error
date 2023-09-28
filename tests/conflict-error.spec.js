import requestId from './utils/request-id';
import ConflictError from '../src/conflict-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ConflictError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new ConflictError()).toBeInstanceOf(ConflictError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ConflictError().toPojo()).toStrictEqual({
        error: {
          message: 'Conflict',
          requestId: '',
          code: 409,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new ConflictError('Conflict')).toBeInstanceOf(ConflictError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ConflictError('Conflict').toPojo()).toStrictEqual({
        error: {
          message: 'Conflict',
          requestId: '',
          code: 409,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 409,
        message: 'Oooops, conflict!',
        requestId: requestId(),
        details: 'Version control conflict',
      };
      const expected = {
        error: config,
      };
      const error = new ConflictError(config);

      expect(error).toBeInstanceOf(ConflictError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 409,
        message: 'Oooops, conflict!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new ConflictError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ConflictError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
