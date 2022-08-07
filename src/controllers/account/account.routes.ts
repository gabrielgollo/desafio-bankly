import AccountController from "./account-controller";
import express from 'express'
const AccountRoutes = express.Router()

AccountRoutes.post('/create', AccountController.create)


export default AccountRoutes