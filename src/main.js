/**
 * @file Main entry point for the HttpResponseError library.
 *
 * @author <a href="https://github.com/coderua">Volodymyr Chumak</a>
 * @see <a href="https://github.com/infotorg/http-response-error">GitHub repo</a>
 * @license MIT
 */

// Base class for all errors
export { default as ResponseError } from './response-error';
// Factory for creating ResponseError instances
export { default as ResponseErrorFactory } from './response-error-factory';
// Base class for all errors options
export { default as ResponseErrorOptions } from './response-error-options';

// -------
// 4xx Client error responses
// -------

// 400 Bad Request
export { default as BadRequestError } from './bad-request-error.js';
// 401 Unauthorized
export { default as UnauthorizedError } from './unauthorized-error.js';
// 402 Payment Required
export { default as PaymentRequiredError } from './payment-required-error';
// 403 Forbidden
export { default as ForbiddenError } from './forbidden-error.js';
// 404 Not Found
export { default as NotFoundError } from './not-found-error.js';
// 405 Method Not Allowed
export { default as MethodNotAllowedError } from './method-not-allowed-error.js';
// 406 Not Acceptable
export { default as NotAcceptableError } from './not-acceptable-error.js';
// 407 Proxy Authentication Required
export { default as ProxyAuthenticationRequiredError } from './proxy-authentication-required-error.js';
// 408 Request Timeout
export { default as RequestTimeoutError } from './request-timeout-error.js';
// 409 Conflict
export { default as ConflictError } from './conflict-error.js';
// 410 Gone
export { default as GoneError } from './gone-error.js';
// 411 Length Required
export { default as LengthRequiredError } from './length-required-error.js';
// 412 Precondition Failed
export { default as PreconditionFailedError } from './precondition-failed-error.js';
// 422 Unprocessable Entity
export { default as UnprocessableEntityError } from './unprocessable-entity-error.js';
// 429 Too Many Requests
export { default as TooManyRequestsError } from './too-many-requests-error.js';
// 451 Unavailable For Legal Reasons
export { default as UnavailableForLegalReasonsError } from './unavailable-for-legal-reasons-error.js';

// -------
// 5xx Server error responses
// -------
// 500 Internal Server Error
export { default as InternalServerError } from './internal-server-error.js';
// 501 Not Implemented
export { default as NotImplementedError } from './not-implemented-error.js';
// 502 Bad Gateway
export { default as BadGatewayError } from './bad-gateway-error.js';
// 503 Service Unavailable
export { default as ServiceUnavailableError } from './service-unavailable-error.js';
// 504 Gateway Timeout
export { default as GatewayTimeoutError } from './gateway-timeout-error.js';
