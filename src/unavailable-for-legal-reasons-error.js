import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"451 Unavailable For Legal Reasons"</b> response error class.
 *
 * Indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451|451 Unavailable For Legal Reasons - HTTP | MDN
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
    super(
      new ResponseErrorOptions(
        data,
        statusCodes.UNAVAILABLE_FOR_LEGAL_REASONS,
        reasonPhrases.UNAVAILABLE_FOR_LEGAL_REASONS
      )
    );
  }
}

export default UnavailableForLegalReasonsError;
