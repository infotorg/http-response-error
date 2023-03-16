import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"422 Unprocessable Entity Response"</b> response error class.
 *
 * Indicates that the server understands the content type of the request entity,
 * and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 * Mostly used for validation errors.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
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
    super(ResponseErrorOptions.create(data, 422, 'Unprocessable Entity'));
  }
}

export default UnprocessableEntityError;
