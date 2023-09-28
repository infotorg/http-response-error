import requestId from './utils/request-id';
import ProxyAuthenticationRequiredError from '../src/proxy-authentication-required-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ProxyAuthenticationRequiredError response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance', () => {
      expect(new ProxyAuthenticationRequiredError()).toBeInstanceOf(ProxyAuthenticationRequiredError);
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ProxyAuthenticationRequiredError().toPojo()).toStrictEqual({
        error: {
          message: 'Proxy Authentication Required',
          requestId: '',
          code: 407,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a message only', () => {
    test('it can create the instance with a message', () => {
      expect(new ProxyAuthenticationRequiredError('Proxy Authentication Required')).toBeInstanceOf(
        ProxyAuthenticationRequiredError
      );
    });

    test('it should return expected POJO/JSON information', () => {
      expect(new ProxyAuthenticationRequiredError('Proxy Authentication Required').toPojo()).toStrictEqual({
        error: {
          message: 'Proxy Authentication Required',
          requestId: '',
          code: 407,
          details: '',
        },
      });
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 407,
        message: 'Oooops, Proxy Authentication Required!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new ProxyAuthenticationRequiredError(config);

      expect(error).toBeInstanceOf(ProxyAuthenticationRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 407,
        message: 'Oooops, Proxy Authentication Required!',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };

      const error = new ProxyAuthenticationRequiredError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(ProxyAuthenticationRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
