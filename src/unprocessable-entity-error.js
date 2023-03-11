import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "422 Unprocessable Entity Response" response error class.
 *
 * Indicates that the server understands the content type of the request entity,
 * and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 * Mostly used for validation errors.
 *
 * @class UnprocessableEntityError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
export default class UnprocessableEntityError extends ResponseError {
  constructor(data) {
    super(
      new ResponseErrorOptions(
        {
          code: 422,
          ...(data && typeof data === 'object' ? data : { message: data }),
        },
        'Unprocessable Entity'
      )
    );
  }
}
