import BadGatewayError from './bad-gateway-error.js';
import BadRequestError from './bad-request-error.js';
import ConflictError from './conflict-error.js';
import ContentTooLargeError from './content-too-large-error.js';
import ExpectationFailedError from './expectation-failed-error.js';
import ForbiddenError from './forbidden-error.js';
import GatewayTimeoutError from './gateway-timeout-error.js';
import GoneError from './gone-error.js';
import InternalServerError from './internal-server-error.js';
import LengthRequiredError from './length-required-error.js';
import MethodNotAllowedError from './method-not-allowed-error.js';
import NotAcceptableError from './not-acceptable-error.js';
import NotFoundError from './not-found-error.js';
import NotImplementedError from './not-implemented-error.js';
import PaymentRequiredError from './payment-required-error';
import PreconditionFailedError from './precondition-failed-error.js';
import ProxyAuthenticationRequiredError from './proxy-authentication-required-error.js';
import RangeNotSatisfiableError from './range-not-satisfiable-error.js';
import RequestTimeoutError from './request-timeout-error.js';
import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import ServiceUnavailableError from './service-unavailable-error.js';
import TooManyRequestsError from './too-many-requests-error.js';
import UnauthorizedError from './unauthorized-error.js';
import UnavailableForLegalReasonsError from './unavailable-for-legal-reasons-error.js';
import UnprocessableEntityError from './unprocessable-entity-error.js';
import UnsupportedMediaTypeError from './unsupported-media-type-error.js';
import UriToLongError from './uri-too-long-error.js';

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
   * @return {ExpectationFailedError|LengthRequiredError|NotAcceptableError|ProxyAuthenticationRequiredError|GoneError|TooManyRequestsError|UriToLongError|UnauthorizedError|BadRequestError|NotFoundError|UnsupportedMediaTypeError|ContentTooLargeError|PreconditionFailedError|ConflictError|PaymentRequiredError|RangeNotSatisfiableError|ForbiddenError|RequestTimeoutError|UnprocessableEntityError|ResponseError|UnavailableForLegalReasonsError|InternalServerError|ServiceUnavailableError|MethodNotAllowedError}
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
      case 402:
        return new PaymentRequiredError(config);
      case 403:
        return new ForbiddenError(config);
      case 404:
        return new NotFoundError(config);
      case 405:
        return new MethodNotAllowedError(config);
      case 406:
        return new NotAcceptableError(config);
      case 407:
        return new ProxyAuthenticationRequiredError(config);
      case 408:
        return new RequestTimeoutError(config);
      case 409:
        return new ConflictError(config);
      case 410:
        return new GoneError(config);
      case 411:
        return new LengthRequiredError(config);
      case 412:
        return new PreconditionFailedError(config);
      case 413:
        return new ContentTooLargeError(config);
      case 414:
        return new UriToLongError(config);
      case 415:
        return new UnsupportedMediaTypeError(config);
      case 416:
        return new RangeNotSatisfiableError(config);
      case 417:
        return new ExpectationFailedError(config);
      case 422:
        return new UnprocessableEntityError(config);
      case 429:
        return new TooManyRequestsError(config);
      case 451:
        return new UnavailableForLegalReasonsError(config);
      case 500:
        return new InternalServerError(config);
      case 501:
        return new NotImplementedError(config);
      case 502:
        return new BadGatewayError(config);
      case 503:
        return new ServiceUnavailableError(config);
      case 504:
        return new GatewayTimeoutError(config);
      default:
        return new ResponseError(config);
    }
  }
}

export default ResponseErrorFactory;
