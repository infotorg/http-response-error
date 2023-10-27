import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"422 Unprocessable Entity Response"</b> response error class.
 *
 * Indicates that the server understands the content type of the request entity,
 * and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 * Mostly used for validation errors.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422|422 Unprocessable Entity - HTTP | MDN
 */
class UnprocessableEntityError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * UnprocessableEntityError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.UNPROCESSABLE_ENTITY, reasonPhrases.UNPROCESSABLE_ENTITY));
  }
}

export default UnprocessableEntityError;
