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

    const code = ResponseErrorOptions.parseCode(config.code, [500]);

    switch (code) {
      case 400:
        return new BadRequestError(config);
      case 401:
        return new UnauthorizedError(config);
      case 403:
        return new ForbiddenError(config);
      case 404:
        return new NotFoundError(config);
      case 422:
        return new UnprocessableEntityError(config);
      case 429:
        return new TooManyRequestsError(config);
      case 451:
        return new UnavailableForLegalReasonsError(config);
      case 500:
        return new InternalServerError(config);
      case 503:
        return new ServiceUnavailableError(config);
      default:
        return new ResponseError(config);
    }
  }
}

export default ResponseErrorFactory;
