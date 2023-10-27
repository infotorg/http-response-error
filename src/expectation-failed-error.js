import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"417 Expectation Failed"</b> response error class.
 *
 * Indicates that the expectation given in the request's `Expect` header could not be met.
 *
 * See the {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect|Expect} header for more details
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417|417 Expectation Failed - HTTP | MDN
 *
 * @class
 * @extends ResponseError
 */
class ExpectationFailedError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ExpectationFailedError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.EXPECTATION_FAILED, reasonPhrases.EXPECTATION_FAILED));
  }
}

export default ExpectationFailedError;
