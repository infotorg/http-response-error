import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"410 Gone"</b> response error class.
 *
 * Indicates that access to the target resource is no longer available at the origin server
 * and that this condition is likely to be permanent.
 *
 * If you don't know whether this condition is temporary or permanent, a 404 status code should be used instead.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
class GoneError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * GoneError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 410, 'Gone'));
  }
}

export default GoneError;
