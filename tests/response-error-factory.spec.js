import {
  BadGatewayError,
  BadRequestError,
  ConflictError,
  ContentTooLargeError,
  ExpectationFailedError,
  ForbiddenError,
  GatewayTimeoutError,
  GoneError,
  InternalServerError,
  LengthRequiredError,
  MethodNotAllowedError,
  NotAcceptableError,
  NotFoundError,
  NotImplementedError,
  PaymentRequiredError,
  PreconditionFailedError,
  ProxyAuthenticationRequiredError,
  RangeNotSatisfiableError,
  RequestTimeoutError,
  ResponseError,
  ResponseErrorFactory,
  ServiceUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  UriToLongError,
  ImATeapotError,
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
    { code: 405, errorClass: MethodNotAllowedError, expectedCode: 405, expectedMessage: 'Method Not Allowed' },
    { code: 406, errorClass: NotAcceptableError, expectedCode: 406, expectedMessage: 'Not Acceptable' },
    {
      code: 407,
      errorClass: ProxyAuthenticationRequiredError,
      expectedCode: 407,
      expectedMessage: 'Proxy Authentication Required',
    },
    { code: 408, errorClass: RequestTimeoutError, expectedCode: 408, expectedMessage: 'Request Timeout' },
    { code: 409, errorClass: ConflictError, expectedCode: 409, expectedMessage: 'Conflict' },
    { code: 410, errorClass: GoneError, expectedCode: 410, expectedMessage: 'Gone' },
    { code: 411, errorClass: LengthRequiredError, expectedCode: 411, expectedMessage: 'Length Required' },
    { code: 412, errorClass: PreconditionFailedError, expectedCode: 412, expectedMessage: 'Precondition Failed' },
    { code: 413, errorClass: ContentTooLargeError, expectedCode: 413, expectedMessage: 'Content Too Large' },
    { code: 414, errorClass: UriToLongError, expectedCode: 414, expectedMessage: 'URI Too Long' },
    { code: 415, errorClass: UnsupportedMediaTypeError, expectedCode: 415, expectedMessage: 'Unsupported Media Type' },
    { code: 416, errorClass: RangeNotSatisfiableError, expectedCode: 416, expectedMessage: 'Range Not Satisfiable' },
    { code: 417, errorClass: ExpectationFailedError, expectedCode: 417, expectedMessage: 'Expectation Failed' },
    { code: 418, errorClass: ImATeapotError, expectedCode: 418, expectedMessage: "I'm a teapot" },
    { code: 422, errorClass: UnprocessableEntityError, expectedCode: 422, expectedMessage: 'Unprocessable Entity' },
    {
      code: 451,
      errorClass: UnavailableForLegalReasonsError,
      expectedCode: 451,
      expectedMessage: 'Unavailable For Legal Reasons',
    },
    { code: 429, errorClass: TooManyRequestsError, expectedCode: 429, expectedMessage: 'Too Many Requests' },
    { code: 500, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: 501, errorClass: NotImplementedError, expectedCode: 501, expectedMessage: 'Not Implemented' },
    { code: 502, errorClass: BadGatewayError, expectedCode: 502, expectedMessage: 'Bad Gateway' },
    { code: 503, errorClass: ServiceUnavailableError, expectedCode: 503, expectedMessage: 'Service Unavailable' },
    { code: 504, errorClass: GatewayTimeoutError, expectedCode: 504, expectedMessage: 'Gateway Timeout' },
    // Unknown error code processed as ResponseError
    { code: 999, errorClass: ResponseError, expectedCode: 999, expectedMessage: 'Response error' },
    { code: '', errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: undefined, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: null, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: false, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: true, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: [], errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: {}, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: () => {}, errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    { code: 'xyz', errorClass: InternalServerError, expectedCode: 500, expectedMessage: 'Internal Server Error' },
    {
      code: 'ERR_HTTP_INVALID_STATUS_CODE',
      errorClass: InternalServerError,
      expectedCode: 500,
      expectedMessage: 'Internal Server Error',
    },
    {
      code: 'ECONNABORTED',
      errorClass: InternalServerError,
      expectedCode: 500,
      expectedMessage: 'Internal Server Error',
    },
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
      config: {
        code: 402,
        message: 'Payment Required',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: PaymentRequiredError,
      expectedCode: 402,
      expectedMessage: 'Payment Required',
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
        code: 405,
        message: 'Method Not Allowed',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: MethodNotAllowedError,
      expectedCode: 405,
      expectedMessage: 'Method Not Allowed',
    },
    {
      config: {
        code: 406,
        message: 'Not Acceptable',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: NotAcceptableError,
      expectedCode: 406,
      expectedMessage: 'Not Acceptable',
    },
    {
      config: {
        code: 407,
        message: 'Proxy Authentication Required',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: ProxyAuthenticationRequiredError,
      expectedCode: 407,
      expectedMessage: 'Proxy Authentication Required',
    },
    {
      config: {
        code: 408,
        message: 'Request Timeout',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: RequestTimeoutError,
      expectedCode: 408,
      expectedMessage: 'Request Timeout',
    },
    {
      config: { code: 409, message: 'Conflict', requestId: 'test-request-id', details: 'Please contact our support' },
      errorClass: ConflictError,
      expectedCode: 409,
      expectedMessage: 'Conflict',
    },
    {
      config: { code: 410, message: 'Gone', requestId: 'test-request-id', details: 'Please contact our support' },
      errorClass: GoneError,
      expectedCode: 410,
      expectedMessage: 'Gone',
    },
    {
      config: {
        code: 411,
        message: 'Length Required',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: LengthRequiredError,
      expectedCode: 411,
      expectedMessage: 'Length Required',
    },
    {
      config: {
        code: 412,
        message: 'Precondition Failed',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: PreconditionFailedError,
      expectedCode: 412,
      expectedMessage: 'Precondition Failed',
    },
    {
      config: {
        code: 413,
        message: 'Content Too Large',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: ContentTooLargeError,
      expectedCode: 413,
      expectedMessage: 'Content Too Large',
    },
    {
      config: {
        code: 414,
        message: 'URI Too Long',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: UriToLongError,
      expectedCode: 414,
      expectedMessage: 'URI Too Long',
    },
    {
      config: {
        code: 415,
        message: 'Unsupported Media Type',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: UnsupportedMediaTypeError,
      expectedCode: 415,
      expectedMessage: 'Unsupported Media Type',
    },
    {
      config: {
        code: 416,
        message: 'Range Not Satisfiable',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: RangeNotSatisfiableError,
      expectedCode: 416,
      expectedMessage: 'Range Not Satisfiable',
    },
    {
      config: {
        code: 417,
        message: 'Expectation Failed',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: ExpectationFailedError,
      expectedCode: 417,
      expectedMessage: 'Expectation Failed',
    },
    {
      config: {
        code: 418,
        message: "I'm a teapot",
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: ImATeapotError,
      expectedCode: 418,
      expectedMessage: "I'm a teapot",
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
        code: 501,
        message: 'Not Implemented',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: NotImplementedError,
      expectedCode: 501,
      expectedMessage: 'Not Implemented',
    },
    {
      config: {
        code: 502,
        message: 'Bad Gateway',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: BadGatewayError,
      expectedCode: 502,
      expectedMessage: 'Bad Gateway',
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
    {
      config: {
        code: 504,
        message: 'Gateway Timeout',
        requestId: 'test-request-id',
        details: 'Please contact our support',
      },
      errorClass: GatewayTimeoutError,
      expectedCode: 504,
      expectedMessage: 'Gateway Timeout',
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
