import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"409 Conflict"</b> response error class.
 *
 * Indicates that a request conflict with the current state of the target resource.
 *
 * Conflicts are most likely to occur in response to a PUT request.
 * For example, you may get a 409 response when uploading a file that is older than the existing one on the server,
 * resulting in a version control conflict.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409|409 Conflict - HTTP | MDN
 */
class ConflictError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ConflictError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.CONFLICT, reasonPhrases.CONFLICT));
  }
}

export default ConflictError;
