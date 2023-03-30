import requestId from './utils/request-id';
import PaymentRequiredError from '../src/payment-required-error.js';
import ResponseErrorOptions from '../src/response-error-options.js';

describe('Tests PaymentRequiredError response error class', () => {
  describe('Instantiation without params', () => {
    test('it should return expected POJO/JSON information', () => {
      const expected = {
        error: {
          message: 'Payment Required',
          requestId: '',
          code: 402,
          details: '',
        },
      };
      const error = new PaymentRequiredError();

      expect(error).toBeInstanceOf(PaymentRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a message only', () => {
    test('it should return expected POJO/JSON information', () => {
      const error = new PaymentRequiredError('Payment Required for the content');
      const expected = {
        error: {
          message: 'Payment Required for the content',
          requestId: '',
          code: 402,
          details: '',
        },
      };

      expect(error).toBeInstanceOf(PaymentRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with a plain object as a config', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 402,
        message: 'This is not free content, please provide a payment.',
        requestId: requestId(),
        details: '',
      };
      const expected = {
        error: config,
      };
      const error = new PaymentRequiredError(config);

      expect(error).toBeInstanceOf(PaymentRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });

  describe('Instantiation with the ResponseErrorOptions instance', () => {
    test('it should return expected POJO/JSON information', () => {
      const config = {
        code: 402,
        message: 'This is not free content, please provide a payment.',
        requestId: requestId(),
        details: 'Check your request body',
      };
      const expected = {
        error: config,
      };

      const error = new PaymentRequiredError(new ResponseErrorOptions(config));

      expect(error).toBeInstanceOf(PaymentRequiredError);
      expect(error.toPojo()).toStrictEqual(expected);
      expect(error.toJSON()).toStrictEqual(expected);
    });
  });
});
