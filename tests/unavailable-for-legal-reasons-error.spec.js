import requestId from './utils/request-id';
import UnavailableForLegalReasonsError from '../src/unavailable-for-legal-reasons-error.js';

describe('Tests UnavailableForLegalReasonsError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new UnavailableForLegalReasonsError()).toBeInstanceOf(UnavailableForLegalReasonsError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnavailableForLegalReasonsError().toPojo()).toStrictEqual({
        error: {
          message: 'Unavailable For Legal Reasons',
          requestId: '',
          code: 451,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new UnavailableForLegalReasonsError('Unavailable For Legal Reasons')).toBeInstanceOf(
        UnavailableForLegalReasonsError
      );
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new UnavailableForLegalReasonsError('Unavailable For Legal Reasons').toPojo()).toStrictEqual({
        error: {
          message: 'Unavailable For Legal Reasons',
          requestId: '',
          code: 451,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a config object param', () => {
    test('it can create an instance', () => {
      expect(
        new UnavailableForLegalReasonsError({
          code: 451,
          message: 'A web page censored by a government',
          requestId: requestId(),
          details: '',
        })
      ).toBeInstanceOf(UnavailableForLegalReasonsError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(
        new UnavailableForLegalReasonsError({
          code: 451,
          message: 'A web page censored by a government',
          requestId: requestId(),
          details: 'The resource is accessible only for authorized users',
        }).toPojo()
      ).toStrictEqual({
        error: {
          code: 451,
          message: 'A web page censored by a government',
          requestId: requestId(),
          details: 'The resource is accessible only for authorized users',
        },
      });
    });
  });
});
