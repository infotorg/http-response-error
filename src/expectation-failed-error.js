import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"417 Expectation Failed"</b> response error class.
 *
 * Indicates that the expectation given in the request's `Expect` header could not be met.
 *
 * See the {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect|Expect} header for more details
 *
 * MDN Documentation: {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417|417 Expectation Failed}
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
    super(new ResponseErrorOptions(data, 417, 'Expectation Failed'));
  }
}

export default ExpectationFailedError;
