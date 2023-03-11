import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "403 Forbidden" response error class.
 *
 * Indicates that the server understands the request but refuses to authorize it.
 *
 * This status is similar to 401, but for the 403 Forbidden status code, re-authenticating makes no difference.
 * The access is tied to the application logic, such as insufficient rights to a resource.
 *
 * @class ForbiddenError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export default class ForbiddenError extends ResponseError {
  constructor(data) {
    super(
      new ResponseErrorOptions(
        {
          code: 403,
          ...(data && typeof data === 'object' ? data : { message: data }),
        },
        'Forbidden'
      )
    );
  }
}
