import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"406 Not Acceptable"</b> response error class.
 *
 * Indicates that the server cannot produce a response matching the list of acceptable values defined in the request's
 * proactive content negotiation headers, and that the server is unwilling to supply a default representation.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406|406 Not Acceptable - HTTP | MDN
 */
class NotAcceptableError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * NotAcceptableError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.NOT_ACCEPTABLE, reasonPhrases.NOT_ACCEPTABLE));
  }
}

export default NotAcceptableError;
