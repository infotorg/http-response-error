import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"402 Payment Required"</b> response error class.
 *
 * This is a nonstandard response status code that is reserved for future use.
 * This status code was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment.
 *
 * Sometimes, this status code indicates that the request cannot be processed until the client makes a payment.
 * However, no standard use convention exists and different entities use it in different contexts.
 *
 * <i>Browser compatibility</i>
 * This status code is reserved but not defined.
 * No browser actually supports it and the error will be displayed as a generic 4xx status code.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
class PaymentRequiredError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * NotFoundError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 402, 'Payment Required'));
  }
}

export default PaymentRequiredError;
