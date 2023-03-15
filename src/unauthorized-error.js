import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "401 Unauthorized" response error class.
 *
 * Indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
 *
 * This status code is sent with an HTTP WWW-Authenticate response header that contains information on how the client can request
 * for the resource again after prompting the user for authentication credentials.
 *
 * This status code is similar to the "403 Forbidden" status code, except that in situations resulting in this status code, user authentication can allow access to the resource.
 *
 * @class UnauthorizedError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export default class UnauthorizedError extends ResponseError {
  constructor(data) {
    super(ResponseErrorOptions.create(data, 401, 'Unauthorized'));
  }
}
