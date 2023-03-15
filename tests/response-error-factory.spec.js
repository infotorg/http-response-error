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
    { code: 400, errorClass: BadRequestError, expectedCode: 400 },
    { code: 401, errorClass: UnauthorizedError, expectedCode: 401 },
    { code: 403, errorClass: ForbiddenError, expectedCode: 403 },
    { code: 404, errorClass: NotFoundError, expectedCode: 404 },
    { code: 422, errorClass: UnprocessableEntityError, expectedCode: 422 },
    { code: 451, errorClass: UnavailableForLegalReasonsError, expectedCode: 451 },
    { code: 429, errorClass: TooManyRequestsError, expectedCode: 429 },
    { code: 500, errorClass: InternalServerError, expectedCode: 500 },
    { code: 503, errorClass: ServiceUnavailableError, expectedCode: 503 },
    // Unknown error code processed as ResponseError
    { code: 999, errorClass: ResponseError, expectedCode: 999 },
    { code: 'xyz', errorClass: InternalServerError, expectedCode: 500 },
  ])(
    'it should create a proper *ResponseError instance depending on status code',
    ({ code, errorClass, expectedCode }) => {
      const error = ResponseErrorFactory.create({ code });

      expect(error).toBeInstanceOf(errorClass);
      expect(error.code).toBe(expectedCode);
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
