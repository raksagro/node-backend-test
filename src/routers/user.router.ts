import { Router } from 'express'
import { matchedData } from 'express-validator/filter'
import { validationResult } from 'express-validator/check'
import { userRules } from '../rules/user.rules'
import { UserService } from '../services/user.service'
import { UserModel } from '../models/user'

export const userRouter = Router()
const userService = new UserService()

userRouter.post('/create', userRules['forCreate'], (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserModel
    const user = userService.create(payload)

    return user.then(u => res.json(u))
})

userRouter.get('/read/:id', userRules['forDeleteReadUpdate'], (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserModel
    const response = userService.read(payload.id)

    return response.then(t => res.json(t))
})
userRouter.delete('/delete/:id', userRules['forDeleteReadUpdate'], (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserModel
    const response = userService.delete(payload.id)

    return response.then(t => res.json(t))
})
userRouter.patch('/update/:id', userRules['forDeleteReadUpdate'], (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserModel
    const response = userService.update(payload, payload.id)

    return response.then(t => res.json(t))
})