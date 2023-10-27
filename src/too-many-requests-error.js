import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"429 Too Many Requests"</b> response error class
 *
 * Indicates the user has sent too many requests in a given amount of time ("rate limiting").
 * A `Retry-After` header might be included to this response indicating how long to wait before making a new request.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429|429 Too Many Requests - HTTP | MDN
 */
class TooManyRequestsError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * TooManyRequestsError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.TOO_MANY_REQUESTS, reasonPhrases.TOO_MANY_REQUESTS));
  }
}

export default TooManyRequestsError;
