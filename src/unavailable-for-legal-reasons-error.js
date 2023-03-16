import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"451 Unavailable For Legal Reasons"</b> response error class.
 *
 * Indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
class UnavailableForLegalReasonsError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * UnavailableForLegalReasonsError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(ResponseErrorOptions.create(data, 451, 'Unavailable For Legal Reasons'));
  }
}

export default UnavailableForLegalReasonsError;
