import BadRequestError from './bad-request-error.js';
import ForbiddenError from './forbidden-error.js';
import InternalServerError from './internal-server-error.js';
import NotFoundError from './not-found-error.js';
import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import ServiceUnavailableError from './service-unavailable-error.js';
import TooManyRequestsError from './too-many-requests-error.js';
import UnauthorizedError from './unauthorized-error.js';
import UnavailableForLegalReasonsError from './unavailable-for-legal-reasons-error.js';
import UnprocessableEntityError from './unprocessable-entity-error.js';

/**
 * Factory class to create {@link ResponseError} instances like: {@link ServiceUnavailableError}, {@link UnauthorizedError}, {@link TooManyRequestsError}, {@link BadRequestError}, {@link ForbiddenError}, {@link UnprocessableEntityError}, {@link NotFoundError}, {@link UnavailableForLegalReasonsError}, {@link InternalServerError}.
 *
 * @class
 */
class ResponseErrorFactory {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  constructor() {
    if (this.constructor === ResponseErrorFactory) {
      throw new Error("Factory class can't be instantiated. Use 'create' static method instead.");
    }
  }

  /**
   * Creates a ResponseError instance.
   *
   * @static
   * @param {Object|ResponseErrorOptions|Options} config
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

export default ResponseErrorFactory;
