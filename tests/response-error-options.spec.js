import ResponseErrorOptions from '../src/response-error-options';

describe('Tests ResponseErrorOptions response error class', () => {
  describe('Instantiation with the default params', () => {
    test('it can create the instance with "Internal Server Error" options by default', () => {
      const expectedOptions = {
        message: 'Internal Server Error',
        requestId: '',
        code: 500,
        details: '',
      };
      const instance = new ResponseErrorOptions();

      expect(instance).toBeInstanceOf(ResponseErrorOptions);
      expect(instance.toJSON()).toStrictEqual(expectedOptions);
      expect(instance.options).toStrictEqual(expectedOptions);
    });
  });

  describe('Instantiation with custom params', () => {
    test('it can create an instance with passed code and message fallbacks', () => {
      const instance = new ResponseErrorOptions({}, 400, 'Oooops! Invalid request');

      expect(instance).toBeInstanceOf(ResponseErrorOptions);
      expect(instance.options).toStrictEqual({
        code: 400,
        details: '',
        message: 'Oooops! Invalid request',
        requestId: '',
      });
    });

    test.each([null, undefined, false, true, '', 0])(
      'it can create an instance with built-in message fallback',
      (message) => {
        const instance = new ResponseErrorOptions({
          code: -1,
          details: 'Error details',
          requestId: '123456-test-request-id',
          message,
        });

        expect(instance).toBeInstanceOf(ResponseErrorOptions);
        expect(instance.options).toStrictEqual({
          code: -1,
          message: 'Internal Server Error',
          details: 'Error details',
          requestId: '123456-test-request-id',
        });
      }
    );

    test.each([null, undefined, false, true, '', 0])(
      'it can create an instance with built-in code fallback',
      (code) => {
        const instance = new ResponseErrorOptions({
          code,
          details: 'Error details',
          requestId: '123456-test-request-id',
          message: 'Something went wrong',
        });

        expect(instance).toBeInstanceOf(ResponseErrorOptions);
        expect(instance.options).toStrictEqual({
          code: 500,
          message: 'Something went wrong',
          details: 'Error details',
          requestId: '123456-test-request-id',
        });
      }
    );

    test('it can create an instance with a config message param', () => {
      const instance = new ResponseErrorOptions(
        {
          code: -1,
          details: 'Error details',
          requestId: '123456-test-request-id',
          message: 'Something went wrong',
        },
        'Message fallback'
      );

      expect(instance).toBeInstanceOf(ResponseErrorOptions);
      expect(instance.options).toStrictEqual({
        code: -1,
        message: 'Something went wrong',
        details: 'Error details',
        requestId: '123456-test-request-id',
      });
    });

    test('it should reset options to default ones', () => {
      const instance = new ResponseErrorOptions(
        {
          code: -1,
          details: 'Error details',
          requestId: '123456-test-request-id',
          message: 'Something went wrong',
        },
        'Message fallback'
      );

      expect(instance).toBeInstanceOf(ResponseErrorOptions);
      expect(instance.options).toStrictEqual({
        code: -1,
        message: 'Something went wrong',
        details: 'Error details',
        requestId: '123456-test-request-id',
      });

      instance.reset();

      expect(instance.options).toStrictEqual(ResponseErrorOptions.defaultOptions());
    });
  });
});