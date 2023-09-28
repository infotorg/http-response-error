import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"407 Proxy Authentication Required"</b> response error class.
 *
 * Indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server
 * that is between the browser and the server that can access the requested resource.
 *
 * This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
class ProxyAuthenticationRequiredError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ProxyAuthenticationRequiredError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 407, 'Proxy Authentication Required'));
  }
}

export default ProxyAuthenticationRequiredError;
