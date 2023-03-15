import requestId from './utils/request-id';
import UnavailableForLegalReasonsError from '../src/unavailable-for-legal-reasons-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests UnavailableForLegalReasonsError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Unavailable For Legal Reasons',
          requestId: '',
          code: 451,
          details: '',
        },
      };

      const error = new UnavailableForLegalReasonsError();

      expect(error).toBeInstanceOf(UnavailableForLegalReasonsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new UnavailableForLegalReasonsError('Unavailable For Legal Reasons');

      const expected = {
        error: {
          message: 'Unavailable For Legal Reasons',
          requestId: '',
          code: 451,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(UnavailableForLegalReasonsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 451,
        message: 'A web page censored by a government',
        requestId: requestId(),
        details: 'The resource is accessible only for authorized users',
      };

      const expected = {
        error: config,
      };

      const error = new UnavailableForLegalReasonsError(config);

      expect(error).toBeInstanceOf(UnavailableForLegalReasonsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 451,
        message: 'A web page censored by a government',
        requestId: requestId(),
        details: 'The resource is accessible only for authorized users',
      };

      const expected = {
        error: config,
      };

      const error = new UnavailableForLegalReasonsError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(UnavailableForLegalReasonsError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
