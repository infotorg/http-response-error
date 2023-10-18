import requestId from './utils/request-id';
import RangeNotSatisfiableError from '../src/range-not-satisfiable-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests RangeNotSatisfiableError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new RangeNotSatisfiableError()).toBeInstanceOf(RangeNotSatisfiableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new RangeNotSatisfiableError().toPojo()).toStrictEqual({
        error: {
          message: 'Range Not Satisfiable',
          requestId: '',
          code: 416,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new RangeNotSatisfiableError('Range Not Satisfiable')).toBeInstanceOf(RangeNotSatisfiableError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new RangeNotSatisfiableError('Range Not Satisfiable!').toPojo()).toStrictEqual({
        error: {
          message: 'Range Not Satisfiable!',
          requestId: '',
          code: 416,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 416,
        message: 'Oooops, range not satisfiable!',
        requestId: requestId(),
        details: "The most likely reason is that the document doesn't contain such ranges",
      };
      const expected = {
        error: config,
      };
      const error = new RangeNotSatisfiableError(config);

      expect(error).toBeInstanceOf(RangeNotSatisfiableError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 416,
        message: 'Oooops, range not satisfiable!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new RangeNotSatisfiableError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(RangeNotSatisfiableError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
