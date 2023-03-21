import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  ResponseError,
  ResponseErrorFactory,
  ServiceUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
} from '../src/main.js';
import requestId from './utils/request-id.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests ResponseErrorFactory class', () => {
  test('it can not be instantiated', () => {
    expect(() => new ResponseErrorFactory()).toThrowError();
  });

  test.each([
    { code: 400, errorClass: BadRequestError, expectedCode: 400, expectedMessage: 'Bad Request' },
    { code: 401, errorClass: UnauthorizedError, expectedCode: 401, expectedMessage: 'Unauthorized' },
    { code: 403, errorClass: ForbiddenError, expectedCode: 403, expectedMessage: 'Forbidden' },
    { code: 404, errorClass: NotFoundError, expectedCode: 404, expectedMessage: 'Not Found' },
    { code: 422, errorClass: UnprocessableEntityError, expectedCode: 422, expectedMessage: 'Unprocessable Entity' },
    {
      code: 451,
      errorClass: UnavailableForLegalReasonsError,
      expectedCode: 451,
      expectedMessage: 'Unavailable For Legal Reasons',
    },
    { code: 429, errorClass: TooManyRequestsError, expectedCode: 429, expectedMessage: 'Too Many Requests' },
    { code: 500, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: 503, errorClass: ServiceUnavailableError, expectedCode: 503, expectedMessage: 'Service Unavailable' },
    // Unknown error code processed as ResponseError
    { code: 999, errorClass: ResponseError, expectedCode: 999, expectedMessage: 'Response error' },
    { code: 'xyz', errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
  ])(
    'it should create a proper *ResponseError instance depending on status code',
    ({ code, errorClass, expectedCode, expectedMessage }) => {
      // 1. Act
      const error = ResponseErrorFactory.create({ code });

      // 2. Assert
      expect(error).toBeInstanceOf(errorClass);
      expect(error.code).toBe(expectedCode);
      expect(error.message).toBe(expectedMessage);
      expect(error.details).toBe('');
      expect(error.requestId).toBe('');
    }
  );

  test.each([
    {
      config: {
        code: 400,
        message: 'Bad Request',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: BadRequestError,
      expectedCode: 400,
      expectedMessage: 'Bad Request',
    },
    {
      config: {
        code: 401,
        message: 'Unauthorized',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: UnauthorizedError,
      expectedCode: 401,
      expectedMessage: 'Unauthorized',
    },
    {
      config: { code: 403, message: 'Forbidden', requestId: 'test-request-id', details: 'Please contact our support' },
      errorClass: ForbiddenError,
      expectedCode: 403,
      expectedMessage: 'Forbidden',
    },
    {
      config: { code: 404, message: 'Not Found', requestId: 'test-request-id', details: 'Please contact our support' },
      errorClass: NotFoundError,
      expectedCode: 404,
      expectedMessage: 'Not Found',
    },
    {
      config: {
        code: 422,
        message: 'Unprocessable Entity',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: UnprocessableEntityError,
      expectedCode: 422,
      expectedMessage: 'Unprocessable Entity',
    },
    {
      config: {
        code: 451,
        message: 'Unavailable For Legal Reasons',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: UnavailableForLegalReasonsError,
      expectedCode: 451,
      expectedMessage: 'Unavailable For Legal Reasons',
    },
    {
      config: {
        code: 429,
        message: 'Too Many Requests',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: TooManyRequestsError,
      expectedCode: 429,
      expectedMessage: 'Too Many Requests',
    },
    {
      config: {
        code: 500,
        message: 'Internal Server Error',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: InternalServerError,
      expectedCode: 500,
      expectedMessage: 'Internal Server Error',
    },
    {
      config: {
        code: 503,
        message: 'Service Unavailable',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: ServiceUnavailableError,
      expectedCode: 503,
      expectedMessage: 'Service Unavailable',
    },
    // Unknown error code processed as ResponseError
    {
      config: {
        code: 999,
        message: 'Response error',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: ResponseError,
      expectedCode: 999,
      expectedMessage: 'Response error',
    },
    {
      config: {
        code: 'xyz',
        message: 'Oops! Something went wrong',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: InternalServerError,
      expectedCode: 500,
      expectedMessage: 'Oops! Something went wrong',
    },
  ])(
    'it should create a proper *ResponseError instance depending on full config',
    ({ config, errorClass, expectedCode, expectedMessage }) => {
      // 1. Act
      const error = ResponseErrorFactory.create(config);

      // 2. Assert
      expect(error).toBeInstanceOf(errorClass);
      expect(error.code).toBe(expectedCode);
      expect(error.message).toBe(expectedMessage);
      expect(error.details).toBe('Please contact our support');
      expect(error.requestId).toBe('test-request-id');
    }
  );

  test('it should return expected ResponseError instance for the ResponseErrorOptions', () => {
    const config = {
      code: 400,
      message: 'Baaaaaad Request :-(',
      requestId: requestId(),
      details: '',
    };
    const expected = {
      error: config,
    };

    const options = new ResponseErrorOptions(config);
    const error = ResponseErrorFactory.create(options);

    expect(error).toBeInstanceOf(BadRequestError);
    expect(error.toPojo()).toStrictEqual(expected);
    expect(error.toJSON()).toStrictEqual(expected);
  });
});
