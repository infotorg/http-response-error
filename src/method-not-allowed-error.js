import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

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
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405|405 Method Not Allowed - HTTP | MDN
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
    super(new ResponseErrorOptions(data, statusCodes.METHOD_NOT_ALLOWED, reasonPhrases.METHOD_NOT_ALLOWED));
  }
}

/**
 * Plain object representation of the error
 *
 * @function MethodNotAllowedError#toPojo
 * @example
 * // returned object
 * {
 *   error: {
 *     code: 405,
 *     requestId: '123456-test-request-id',
 *     message: 'Method Not Allowed',
 *     details: 'Check your request body'
 *   }
 * }
 *
 * @return {{ error: {code: (number|string), requestId: string, details: (string|*), message: string} }}
 */

export default MethodNotAllowedError;
