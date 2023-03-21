import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"429 Too Many Requests"</b> response error class
 *
 * Indicates the user has sent too many requests in a given amount of time ("rate limiting").
 * A 'Retry-After' header might be included to this response indicating how long to wait before making a new request.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
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
    super(new ResponseErrorOptions(data, 429, 'Too Many Requests'));
  }
}

export default TooManyRequestsError;
