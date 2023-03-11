import requestId from './utils/request-id';
import UnprocessableEntityError from '../src/unprocessable-entity-error.js';

describe('Tests UnprocessableEntityError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new UnprocessableEntityError()).toBeInstanceOf(UnprocessableEntityError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnprocessableEntityError().toPojo()).toStrictEqual({
        error: {
          message: 'Unprocessable Entity',
          requestId: '',
          code: 422,
          details: '',
        },
      });
    });

    test('an instance can returns JSON information', () => {
      expect(new UnprocessableEntityError().toJSON()).toStrictEqual({
        error: {
          message: 'Unprocessable Entity',
          requestId: '',
          code: 422,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    const message = 'Validation Error';
    const instance = new UnprocessableEntityError(message);

    test('it can create the instance with a message', () => {
      expect(instance).toBeInstanceOf(UnprocessableEntityError);
      expect(instance.message).toBe(message);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(instance.toPojo()).toStrictEqual({
        error: {
          message,
          requestId: '',
          code: 422,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a config object param', () => {
    const config = Object.freeze({
      code: 422,
      message: 'Invalid Request :-(',
      requestId: requestId(),
      details: [{ msg: 'Invalid value', param: 'user.to', location: 'body' }],
    });

    test('it can create an instance', () => {
      expect(new UnprocessableEntityError(config)).toBeInstanceOf(UnprocessableEntityError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnprocessableEntityError(config).toPojo()).toStrictEqual({
        error: config,
      });
    });

    test('an instance can returns JSON information', () => {
      expect(new UnprocessableEntityError(config).toJSON()).toStrictEqual({
        error: config,
      });
    });
  });
});
