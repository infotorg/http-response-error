import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * "503 Service Unavailable" Error class
 *
 * Indicates that the server is not ready to handle the request.
 *
 * Common causes are a server that is down for maintenance or that is overloaded.
 * This response should be used for temporary conditions and the `Retry-After` HTTP header should, if possible,
 * contain the estimated time for the recovery of the service.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503|503 Service Unavailable - HTTP | MDN
 */
class ServiceUnavailableError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ServiceUnavailableError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.SERVICE_UNAVAILABLE, reasonPhrases.SERVICE_UNAVAILABLE));
  }
}

export default ServiceUnavailableError;
