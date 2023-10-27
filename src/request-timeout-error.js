import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"408 Request Timeout"</b> response error class.
 *
 * The response status code means that the server would like to shut down this unused connection.
 * It is sent on an idle connection by some servers, even without any previous request by the client.
 *
 * A server should send the "close" `Connection` header field in the response,
 * since `408` implies that the server has decided to close the connection rather than continue waiting.
 *
 * This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9,
 * use HTTP pre-connection mechanisms to speed up surfing.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408|408 Request Timeout - HTTP | MDN
 */
class RequestTimeoutError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * RequestTimeoutError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.REQUEST_TIMEOUT, reasonPhrases.REQUEST_TIMEOUT));
  }
}

export default RequestTimeoutError;
