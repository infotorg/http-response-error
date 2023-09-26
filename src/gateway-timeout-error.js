import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"504 Gateway Timeout"</b> response error class.
 *
 * Indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.
 *
 * Note: A Gateway might refer to different things in networking and a 504 error is usually not something you can fix,
 * but requires a fix by the web server or the proxies you are trying to get access through.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
class GatewayTimeoutError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * GatewayTimeoutError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] - Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 504, 'Gateway Timeout'));
  }
}

export default GatewayTimeoutError;
