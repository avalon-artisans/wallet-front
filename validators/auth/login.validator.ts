import Joi from 'joi';
import BaseValidator from '../base.validator';

/**
 * LoginValidator class
 * @author Kenneth Sumang
 * @since  2023.06.08
 */
export default class LoginValidator extends BaseValidator {
  /**
   * Schema for login
   * @protected
   */
  protected schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.required()
  });
}