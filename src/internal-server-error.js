import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "500 Internal Server Error" response error class.
 *
 * Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * This error response is a generic "catch-all" response. Usually, this indicates the server cannot find a better 5xx error code to response.
 * Sometimes, server administrators log error responses like the 500 status code with more details about the request to prevent the error from happening again in the future.
 *
 * @class InternalServerError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
export default class InternalServerError extends ResponseError {
  /**
   * InternalServerError constructor
   *
   * @param {Object|String|ResponseErrorOptions|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(ResponseErrorOptions.create(data, 500, 'Internal Server Error'));
  }
}
