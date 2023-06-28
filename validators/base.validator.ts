import Joi from 'joi';

/**
 * ValidationResult structure
 */
interface ValidationResult {
  valid: boolean;
  message: string|null;
}

/**
 * BaseValidator class
 * @author Kenneth Sumang
 * @since  2023.06.08
 */
export default class BaseValidator {
  /**
   * Default schema
   * @protected
   */
  protected schema: Joi.ObjectSchema<any> = Joi.object({});

  /**
   * Validates the data
   * @param data
   */
  validate(data: Record<string, any>): ValidationResult {
    const result = this.schema.validate(data);
    if (result.error !== undefined) {
      return {
        valid: false,
        message: result.error.message
      }
    }

    return { valid: true, message: null };
  }
}