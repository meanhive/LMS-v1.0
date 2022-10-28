const { StatusCodes } = require('http-status-codes')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')

const authController = {
    register: async (req, res) => {
        try {
            const { name, email, mobile, password } = req.body

            const encPassword = await bcrypt.hash(password, 10)

            const newUser = await User.create({
                name,
                email,
                mobile,
                password: encPassword
            })

            res.status(StatusCodes.OK).json({ msg: "User registered Succesfully", data: newUser })

        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    login: async (req, res) => {
        try {
            res.json({ msg: "login" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.json({ msg: "logout" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    refreshToken: async (req, res) => {
        try {
            res.json({ msg: "refreshtoken" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    resetPassword: async (req, res) => {
        try {
            res.json({ msg: "resetpassword" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
}

module.exports = authController