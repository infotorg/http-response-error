import requestId from './utils/request-id';
import NotFoundError from '../src/not-found-error.js';

describe('Tests NotFoundError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new NotFoundError()).toBeInstanceOf(NotFoundError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotFoundError().toPojo()).toStrictEqual({
        error: {
          message: 'Not Found',
          requestId: '',
          code: 404,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new NotFoundError('Not Found')).toBeInstanceOf(NotFoundError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new NotFoundError('Not Found').toPojo()).toStrictEqual({
        error: {
          message: 'Not Found',
          requestId: '',
          code: 404,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it can create an instance', () => {
      expect(
        new NotFoundError({
          code: 404,
          message: 'Oooops, nothing found',
          requestId: requestId(),
          details: '',
        })
      ).toBeInstanceOf(NotFoundError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(
        new NotFoundError({
          code: 404,
          message: 'Oooops, nothing found',
          requestId: requestId(),
          details: 'Check your search query in a request',
        }).toPojo()
      ).toStrictEqual({
        error: {
          code: 404,
          message: 'Oooops, nothing found',
          requestId: requestId(),
          details: 'Check your search query in a request',
        },
      });
    });
  });
});
