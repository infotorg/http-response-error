import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

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
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
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
    super(new ResponseErrorOptions(data, 415, 'Unsupported Media Type'));
  }
}

export default UnsupportedMediaTypeError;
