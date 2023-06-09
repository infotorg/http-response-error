import requestId from './utils/request-id';
import ResponseError from '../src/response-error';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ResponseError response error class', () => {
  describe('Instantiation without params', () => {
    test('an instance can returns POJO/JSON information', () => {
      const error = new ResponseError();
      const expected = {
        error: {
          code: 500,
          details: '',
          message: 'Response error',
          requestId: '',
        },
      };

      expect(error).toBeInstanceOf(ResponseError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('an instance can returns JSON information', () => {
      const error = new ResponseError('Something went wrong');
      const expected = {
        error: {
          message: 'Something went wrong',
          requestId: '',
          code: 500,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(ResponseError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    const config = {
      code: 403,
      message: 'Forbidden',
      requestId: requestId(),
      details: 'Some error details',
    };
    const error = new ResponseError(config);

    test('an instance can returns POJO/JSON information', () => {
      const expected = {
        error: config,
      };

      expect(error).toBeInstanceOf(ResponseError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });

    test('it should return a string representation of error', () => {
      const expected = JSON.stringify({
        error: {
          code: 403,
          requestId: requestId(),
          message: 'Forbidden',
          details: 'Some error details',
        },
      });

      expect(error.toString()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with ResponseErrorOptions', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 404,
        message: 'Oooops, nothing found',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new ResponseError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ResponseError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
