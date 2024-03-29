import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"414 URI Too Long"</b> response error class.
 *
 * Indicates that the URI requested by the client is longer than the server is willing to interpret.
 *
 * There are a few rare conditions when this might occur:
 * - when a client has improperly converted a POST request to a GET request with long query information,
 * - when the client has descended into a loop of redirection (for example, a redirected URI prefix that points to a suffix of itself),
 * - or when the server is under attack by a client attempting to exploit potential security holes.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414|414 URI Too Long - HTTP | MDN
 */
class UriToLongError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * UriToLongError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.URI_TOO_LONG, reasonPhrases.URI_TOO_LONG));
  }
}

export default UriToLongError;
