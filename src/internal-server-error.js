import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"500 Internal Server Error"</b> response error class.
 *
 * Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * This error response is a generic "catch-all" response. Usually, this indicates the server cannot find a better 5xx error code to response.
 * Sometimes, server administrators log error responses like the 500 status code with more details about the request to prevent the error from happening again in the future.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500|500 Internal Server Error - HTTP | MDN
 */
class InternalServerError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * InternalServerError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.INTERNAL_SERVER_ERROR, reasonPhrases.INTERNAL_SERVER_ERROR));
  }
}

export default InternalServerError;
