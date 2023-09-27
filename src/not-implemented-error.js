import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"501 Not Implemented"</b> response error class.
 *
 * Server error response code means that the server does not support the functionality required to fulfill the request.
 *
 * This status can also send a Retry-After header,
 * telling the requester when to check back to see if the functionality is supported by then.
 *
 * 501 is the appropriate response when the server does not recognize the request method and is incapable of supporting
 * it for any resource.
 * The only methods that servers are required to support (and therefore that must not return 501) are GET and HEAD.
 *
 * If the server does recognize the method, but intentionally does not support it,
 * the appropriate response is 405 Method Not Allowed.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
class NotImplementedError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * NotImplementedError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 501, 'Not Implemented'));
  }
}

export default NotImplementedError;
