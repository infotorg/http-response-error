import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "404 Not Found" response error class.
 *
 * Indicates that the server cannot find the requested resource.
 * Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.
 *
 * A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent.
 * If a resource is permanently removed, use the 410 (Gone) status instead.
 *
 * @class NotFoundError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
 */
export default class NotFoundError extends ResponseError {
  /**
   * NotFoundError constructor
   *
   * @param {Object|String|ResponseErrorOptions|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(ResponseErrorOptions.create(data, 404, 'Not Found'));
  }
}
