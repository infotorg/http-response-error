import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

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
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413|413 Content Too Large - HTTP | MDN
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
    super(new ResponseErrorOptions(data, statusCodes.CONTENT_TOO_LARGE, reasonPhrases.CONTENT_TOO_LARGE));
  }
}

export default ContentTooLargeError;
