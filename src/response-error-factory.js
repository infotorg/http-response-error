import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  ResponseError,
  ServiceUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
} from './main.js';
import ResponseErrorOptions from './response-error-options.js';

/**
 * Factory class to create ResponseError instances.
 *
 * @class ResponseErrorFactory
 */
export default class ResponseErrorFactory {
  constructor() {
    if (this.constructor === ResponseErrorFactory) {
      throw new Error("Factory class can't be instantiated. Use 'create' static method instead.");
    }
  }

  /**
   * Creates a ResponseError instance.
   *
   * @static
   * @param {Object|ResponseErrorOptions} config
   * @return {ResponseError|ServiceUnavailableError|UnauthorizedError|TooManyRequestsError|BadRequestError|ForbiddenError|UnprocessableEntityError|NotFoundError|UnavailableForLegalReasonsError|InternalServerError}
   * @throws {TypeError}
   */
  static create(config = {}) {
    if (typeof config !== 'object') {
      throw new TypeError(
        'ResponseErrorFactory can not create the ResponseError class instance. Expected config param.'
      );
    }

    const options = ResponseErrorOptions.create(config, 500, 'Internal Server Error');

    switch (options.code) {
      case 400:
        return new BadRequestError(options);
      case 401:
        return new UnauthorizedError(options);
      case 403:
        return new ForbiddenError(options);
      case 404:
        return new NotFoundError(options);
      case 422:
        return new UnprocessableEntityError(options);
      case 429:
        return new TooManyRequestsError(options);
      case 451:
        return new UnavailableForLegalReasonsError(options);
      case 500:
        return new InternalServerError(options);
      case 503:
        return new ServiceUnavailableError(options);
      default:
        return new ResponseError(options);
    }
  }
}
