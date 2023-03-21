import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"400 Bad Request"</b> response error class.
 *
 * Indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * Warning: The client should not repeat this request without modification.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
class BadRequestError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * BadRequestError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] - Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 400, 'Bad Request'));
  }
}

export default BadRequestError;
