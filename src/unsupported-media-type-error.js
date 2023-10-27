import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"415 Unsupported Media Type"</b> response error class.
 *
 * Indicates that the server refuses to accept the request because the payload format is in an unsupported format.
 *
 * The format problem might be due to the request's indicated `Content-Type` or `Content-Encoding`,
 * or as a result of inspecting the data directly.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415|415 Unsupported Media Type - HTTP | MDN
 */
class UnsupportedMediaTypeError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * UnsupportedMediaTypeError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.UNSUPPORTED_MEDIA_TYPE, reasonPhrases.UNSUPPORTED_MEDIA_TYPE));
  }
}

export default UnsupportedMediaTypeError;
