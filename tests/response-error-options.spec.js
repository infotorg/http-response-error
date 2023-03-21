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
      'it can create an instance with built-in "code" fallback when the passed code cannot be cast to a number',
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

    test('it can create an instance with a config "code" param', () => {
      const instance = new ResponseErrorOptions({ code: 422 }, 500, 'Validation error');

      expect(instance).toBeInstanceOf(ResponseErrorOptions);
      expect(instance.options).toStrictEqual({
        code: 422,
        message: 'Validation error',
        details: '',
        requestId: '',
      });
    });

    test('it can create an instance with a config "message" param', () => {
      const instance = new ResponseErrorOptions({
        code: -1,
        details: 'Error details',
        requestId: '123456-test-request-id',
        message: 'Something went wrong',
      });

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
        500,
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

  test.each([
    { code: 200, fallbacks: [500], expected: 200 },
    { code: true, fallbacks: [500], expected: 500 },
    { code: false, fallbacks: [500], expected: 500 },
    { code: undefined, fallbacks: [500], expected: 500 },
    { code: () => {}, fallbacks: [500], expected: 500 },
    { code: [], fallbacks: [500], expected: 500 },
    { code: {}, fallbacks: [500], expected: 500 },
    { code: null, fallbacks: [500], expected: 500 },
    { code: '', fallbacks: [500], expected: 500 },
    { code: 0, fallbacks: [500], expected: 0 },
    { code: 'xyz', fallbacks: [500], expected: 500 },
  ])('it should return parsed code: %p', ({ code, fallbacks, expected }) => {
    expect(ResponseErrorOptions.parseCode(code, fallbacks)).toBe(expected);
  });
});
