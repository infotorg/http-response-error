import requestId from './utils/request-id';
import BadRequestError from '../src/bad-request-error.js';

describe('Tests BadRequestError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new BadRequestError();
      const expected = {
        error: {
          message: 'Bad Request',
          requestId: '',
          code: 400,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(BadRequestError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new BadRequestError('Bad Request')).toBeInstanceOf(BadRequestError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new BadRequestError('Bad Request').toPojo()).toStrictEqual({
        error: {
          message: 'Bad Request',
          requestId: '',
          code: 400,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it can create an instance', () => {
      expect(
        new BadRequestError({
          code: 400,
          message: 'Baaaaaad Request :-(',
          requestId: requestId(),
          details: '',
        })
      ).toBeInstanceOf(BadRequestError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(
        new BadRequestError({
          code: 400,
          message: 'Baaaaaad Request :-(',
          requestId: requestId(),
          details: 'Check your params in a request',
        }).toPojo()
      ).toStrictEqual({
        error: {
          code: 400,
          message: 'Baaaaaad Request :-(',
          requestId: requestId(),
          details: 'Check your params in a request',
        },
      });
    });
  });
});
