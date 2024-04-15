const createError = require('http-errors')
const User = require('../models/User')
const JWT = require('jsonwebtoken')
const mongoose = require('mongoose')
const clientRed = require('../utils/redis_connect')
const messages = require("../helpers/messages")
const utils = require("../utils/utilsfn")
const dbConnect = require("../utils/dbconnect")
const validations_ = require("../utils/validators")
const bcrypt = require("bcrypt")


dbConnect()

const authRoutes = {
    register: async (req, res, next) => {
        const session = await mongoose.startSession()

        try {
            const result = await validations_.authSchema.validateAsync(req.body)
            const user = await User.findOne({ email: result.email }).session(session)
            if(user) {
                throw createError.Conflict(utils.joinStringWithSpace([ result.email, message.auth.alreadyExistPartText]))
            }

            let created = false
            const userToCreate = new User(result)
            userToCreate.email_confirmed = true;
            const saveUser = await userToCreate.save()
            created = true
            res.send({ success: true, message: "Registeratin successfull"})
        } catch (error) {
            if(error.isJoi === true){
                error.status = 422;
            }
            next()
        }
    },

    login: async (req, res, next) => {
        try {
            const result = await validations_.authSchema.validateAsync(req.body)
            const user = await User.findOne({ email: result.email })
            if(!user) throw createError.MotFound(messages.auth.userNotRegistered)
            console.log(result);
            const isMatch = await User.isValidPassword(result.password)
            if(!isMatch)
                throw createError.Unauthorized(messages.auth.emailNotVerified)
            const accessToken = await jwtHelper
        } catch (error) {
            
        }
    }
}