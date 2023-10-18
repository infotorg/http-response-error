import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

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
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
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
    super(new ResponseErrorOptions(data, 409, 'Conflict'));
  }
}

export default ConflictError;
