import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"405 Method Not Allowed"</b> response error class.
 *
 * Indicates that the server knows the request method, but the target resource doesn't support this method.
 *
 * The server must generate an Allow header field in a 405 status code response.
 * The field must contain a list of methods that the target resource currently supports.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
class MethodNotAllowedError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * MethodNotAllowedError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 405, 'Method Not Allowed'));
  }
}

export default MethodNotAllowedError;
