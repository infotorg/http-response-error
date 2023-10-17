import requestId from './utils/request-id';
import PreconditionFailedError from '../src/precondition-failed-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests PreconditionFailedError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new PreconditionFailedError()).toBeInstanceOf(PreconditionFailedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new PreconditionFailedError().toPojo()).toStrictEqual({
        error: {
          message: 'Precondition Failed',
          requestId: '',
          code: 412,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new PreconditionFailedError('Precondition Failed')).toBeInstanceOf(PreconditionFailedError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new PreconditionFailedError('Precondition Failed').toPojo()).toStrictEqual({
        error: {
          message: 'Precondition Failed',
          requestId: '',
          code: 412,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 412,
        message: 'Oooops, precondition failed!',
        requestId: requestId(),
        details: 'Access to the target resource has been denied',
      };
      const expected = {
        error: config,
      };
      const error = new PreconditionFailedError(config);

      expect(error).toBeInstanceOf(PreconditionFailedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 412,
        message: 'Oooops, precondition failed!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new PreconditionFailedError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(PreconditionFailedError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
