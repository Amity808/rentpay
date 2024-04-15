const JWTSON = require('jsonwebtoken')
const createEror = require('http-errors')
const clientRes = require("../utils/redis_connect")


const jwtHelper = {
    signAccessToken: (userID: any, type="") => {
        return new Promise ((resolve, reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET
            const option = {
                expireIn: '24th',
                issuer: process.env.ISSUER_URL,
                audience: userID
            }
            JWTSON.sign(payload, secret, option, (err, token) => {
                if(err) {
                    console.log(err.message);
            reject(createError.InternalServerError())
            return
                    
                }
                resolve(token)
            })
        })
    },

    verifyAccessToken: (req, res, next) => {
        if(!req.headers['authorization']) return next(createError.Unauthorized())
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        JWTSON.verify(token, token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err) {
                const message = err.message = err.name ==='JsonWebTokenError' ? 'Unauthorized' : err.message
                return next(createError.Unauthorized(message))
            }
            req.payload = payload
            next()
        })
    },

    signRefereshToken: (userID: any) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            
        const secret = process.env.REFRESH_TOKEN_SECRET
        const options = {
          expiresIn: '1y',
          issuer: process.env.ISSUER_URL,
          audience: userID,
        }
        JWTSON.sign(payload, secret, options, (err, token) => {
            if(err) {
                console.log(err.message);
                reject(createEror.InternalServerError())   
            }
            clientRes.SET(userID, token, 'EX', 365 * 24 * 60 * 60, (err, reply) => {
                if (err) {
                    console.log(err.message);
                    reject(createError.InternalServerError())
                    return
                }
                resolve(token)
            } )
        })
        })
    },
    verifyRefreshToken: (refreshToken: string) => {
        return new Promise((resolve, reject) => {
            JWTSON.verify(refreshToken,  process.env.REFRESH_TOKEN_SECRET, (err, payload) =>{
                if (err) return reject(createError.Unauthorized())
                    const userID = payload.aud
                clientRes.GET(userID, (err, result) => {
                    if(err) {
                        console.log(err.message);
                        reject(createError.InternalServerError())
                        return
                    }
                    if(refreshToken === result) return resolve(userID)
                        reject(createError.Unauthorized())
                })
            })
        })
    }
}


module.exports = jwtHelper