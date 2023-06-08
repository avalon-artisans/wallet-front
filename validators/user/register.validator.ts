import Joi from 'joi';
import BaseValidator from '../base.validator';

/**
 * RegisterValidator class
 * @author Kenneth Sumang
 * @since  2023.06.08
 */
export default class RegisterValidator extends BaseValidator {
  /**
   * Regex for determining if password is valid. It must have:
   * - 8 or more characters
   * - At least 1 uppercase
   * - At least 1 lowercase
   * - At least 1 digit
   * - At least 1 symbol
   * @private
   */
  private PASSWORD_PATTERN = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  /**
   * Schema for register
   * @protected
   */
  protected schema = Joi.object({
    name: Joi
      .string()
      .required()
      .min(1)
      .max(100)
      .messages({
        'any.required': 'Name is required.',
        'string.base': 'Name must be a text.',
        'string.min': 'Name must have a minimum of 1 character.',
        'string.max': 'Name must not have more than 100 characters.',
      }),
    email: Joi
      .string()
      .email({ tlds: { allow: false } })
      .required()
      .max(100)
      .messages({
        'any.required': 'Email is required.',
        'string.base': 'Email must be a valid email address.',
        'string.email': 'Email must be a valid email address.',
        'string.max': 'Email must not have more than 100 characters.',
      }),
    password: Joi
      .string()
      .required()
      .pattern(this.PASSWORD_PATTERN)
      .messages({
        'any.required': 'Password is required.',
        'string.base': 'Password must be a text.',
        'string.pattern.base': 'Password must have at least an uppercase letter, a lowercase letter, a number, and a symbol.',
      }),
    retypePassword: Joi
      .any()
      .equal(Joi.ref('password'))
      .required()
      .messages({
        'any.required': 'Passwords do not match.',
        'any.equal': 'Passwords do not match.',
        'any.only': 'Passwords do not match.',
      }),
  });
}