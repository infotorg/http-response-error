import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"412 Precondition Failed"</b> response error class.
 *
 * Indicates that access to the target resource has been denied.
 * This happens with conditional requests on methods other than `GET` or `HEAD` when
 * the condition defined by the `If-Unmodified-Since` or `If-None-Match` headers is not fulfilled.
 * In that case, the request, usually an upload or a modification of a resource,
 * cannot be made and this error response is sent back.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412|412 Precondition Failed - HTTP | MDN
 */
class PreconditionFailedError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412|412 Precondition Failed - HTTP | MDN
   */

  /**
   * PreconditionFailedError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.PRECONDITION_FAILED, reasonPhrases.PRECONDITION_FAILED));
  }
}

export default PreconditionFailedError;
