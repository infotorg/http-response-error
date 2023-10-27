import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"502 Bad Gateway"</b> response error class.
 *
 * Indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.
 *
 * Note: A Gateway might refer to different things in networking and a 502 error is usually not something you can fix,
 * but requires a fix by the web server or the proxies you are trying to get access through.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502|502 Bad Gateway - HTTP | MDN
 */
class BadGatewayError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * BadGatewayError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] - Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.BAD_GATEWAY, reasonPhrases.BAD_GATEWAY));
  }
}

export default BadGatewayError;
