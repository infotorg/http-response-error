import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"411 Length Required"</b> response error class.
 *
 * Indicates that the server refuses to accept the request without a defined Content-Length header.
 *
 * Note: by specification, when sending data in a series of chunks,
 * the Content-Length header is omitted and at the beginning of each chunk you need to add the length of the
 * current chunk in hexadecimal format. See Transfer-Encoding for more details.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411|411 Length Required - HTTP | MDN
 */
class LengthRequiredError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * LengthRequiredError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.LENGTH_REQUIRED, reasonPhrases.LENGTH_REQUIRED));
  }
}

export default LengthRequiredError;
