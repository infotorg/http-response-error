import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"403 Forbidden"</b> response error class.
 *
 * Indicates that the server understands the request but refuses to authorize it.
 *
 * This status is similar to 401, but for the 403 Forbidden status code, re-authenticating makes no difference.
 * The access is tied to the application logic, such as insufficient rights to a resource.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403|403 Forbidden - HTTP | MDN
 */
class ForbiddenError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ForbiddenError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   *
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.FORBIDDEN, reasonPhrases.FORBIDDEN));
  }
}

export default ForbiddenError;
