import { check } from 'express-validator/check'
import { User } from '../models/user'

export const userRules = {
  forCreate: [
    check('name').exists().withMessage('Name field blank'),
    check('dot').exists().withMessage('Date of Birth field blank'),
    check('address').exists().withMessage('Address field blank'),
    check('description').exists().withMessage('Description field blank')
  ],
  forDeleteReadUpdate: [
    check('id').exists()
    .custom(id => User.findByPk(id).then(u => !!!u)).withMessage('User exists'),
  ],
}