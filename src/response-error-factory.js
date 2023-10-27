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
import ImATeapotError from './im-a-teapot-error.js';
import statusCodes from './status-codes.js';

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

    const {
      BAD_REQUEST,
      UNAUTHORIZED,
      PAYMENT_REQUIRED,
      FORBIDDEN,
      NOT_FOUND,
      METHOD_NOT_ALLOWED,
      NOT_ACCEPTABLE,
      PROXY_AUTHENTICATION_REQUIRED,
      REQUEST_TIMEOUT,
      CONFLICT,
      GONE,
      LENGTH_REQUIRED,
      PRECONDITION_FAILED,
      CONTENT_TOO_LARGE,
      URI_TOO_LONG,
      UNSUPPORTED_MEDIA_TYPE,
      RANGE_NOT_SATISFIABLE,
      EXPECTATION_FAILED,
      IM_A_TEAPOT,
      UNPROCESSABLE_ENTITY,
      TOO_MANY_REQUESTS,
      UNAVAILABLE_FOR_LEGAL_REASONS,
      INTERNAL_SERVER_ERROR,
      NOT_IMPLEMENTED,
      BAD_GATEWAY,
      SERVICE_UNAVAILABLE,
      GATEWAY_TIMEOUT,
    } = statusCodes;

    const classMap = {
      [BAD_REQUEST]: BadRequestError,
      [UNAUTHORIZED]: UnauthorizedError,
      [PAYMENT_REQUIRED]: PaymentRequiredError,
      [FORBIDDEN]: ForbiddenError,
      [NOT_FOUND]: NotFoundError,
      [METHOD_NOT_ALLOWED]: MethodNotAllowedError,
      [NOT_ACCEPTABLE]: NotAcceptableError,
      [PROXY_AUTHENTICATION_REQUIRED]: ProxyAuthenticationRequiredError,
      [REQUEST_TIMEOUT]: RequestTimeoutError,
      [CONFLICT]: ConflictError,
      [GONE]: GoneError,
      [LENGTH_REQUIRED]: LengthRequiredError,
      [PRECONDITION_FAILED]: PreconditionFailedError,
      [CONTENT_TOO_LARGE]: ContentTooLargeError,
      [URI_TOO_LONG]: UriToLongError,
      [UNSUPPORTED_MEDIA_TYPE]: UnsupportedMediaTypeError,
      [RANGE_NOT_SATISFIABLE]: RangeNotSatisfiableError,
      [EXPECTATION_FAILED]: ExpectationFailedError,
      [IM_A_TEAPOT]: ImATeapotError,
      [UNPROCESSABLE_ENTITY]: UnprocessableEntityError,
      [TOO_MANY_REQUESTS]: TooManyRequestsError,
      [UNAVAILABLE_FOR_LEGAL_REASONS]: UnavailableForLegalReasonsError,
      [INTERNAL_SERVER_ERROR]: InternalServerError,
      [NOT_IMPLEMENTED]: NotImplementedError,
      [BAD_GATEWAY]: BadGatewayError,
      [SERVICE_UNAVAILABLE]: ServiceUnavailableError,
      [GATEWAY_TIMEOUT]: GatewayTimeoutError,
    };
    const code = ResponseErrorOptions.parseCode(config.code, [500]);
    const className = classMap[code] || ResponseError;

    return new className(config);
  }
}

export default ResponseErrorFactory;
