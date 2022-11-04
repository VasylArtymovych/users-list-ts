import Joi from 'joi';

export const UserSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30),
  rank: Joi.number()
});
