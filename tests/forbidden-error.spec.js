import requestId from './utils/request-id';
import ForbiddenError from '../src/forbidden-error.js';

describe('Tests ForbiddenError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new ForbiddenError();
      const expected = {
        error: {
          message: 'Forbidden',
          requestId: '',
          code: 403,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(ForbiddenError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new ForbiddenError('Forbidden for you!');
      const expected = {
        error: {
          message: 'Forbidden for you!',
          requestId: '',
          code: 403,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(ForbiddenError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 403,
        message: 'You do not have access to the resource',
        requestId: requestId(),
        details: 'Please, contact our support',
      };

      const error = new ForbiddenError(config);
      const expected = {
        error: config,
      };

      expect(error).toBeInstanceOf(ForbiddenError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
