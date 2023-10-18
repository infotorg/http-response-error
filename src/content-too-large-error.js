import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"413 Content Too Large"</b> response error class.
 *
 * Indicates that the request entity is larger than limits defined by server;
 * the server might close the connection or return a Retry-After header field.
 *
 * Prior to RFC 9110 the response phrase for the status was Payload Too Large. That name is still widely used.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
class ContentTooLargeError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ContentTooLargeError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 413, 'Content Too Large'));
  }
}

export default ContentTooLargeError;
