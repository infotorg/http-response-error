import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"401 Unauthorized"</b> response error class.
 *
 * Indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
 *
 * This status code is sent with an HTTP `WWW-Authenticate` response header that contains information on how the client can request
 * for the resource again after prompting the user for authentication credentials.
 *
 * This status code is similar to the "403 Forbidden" status code, except that in situations resulting in this
 * status code, user authentication can allow access to the resource.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401|401 Unauthorized - HTTP | MDN
 */
class UnauthorizedError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * UnauthorizedError constructor
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.UNAUTHORIZED, reasonPhrases.UNAUTHORIZED));
  }
}

export default UnauthorizedError;
