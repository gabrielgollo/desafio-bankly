import { Request, Response } from "express"
import AccountService from "../../services/account-service"
import { AccountValidations } from "../../validations/account-validation"

export default class AccountController {
    static async create(request: Request, response: Response){
        const { body } = request
        
        try{
            AccountValidations.create(body)
            

            await AccountService.createAccount(body)

            response.status(200).json({
                message: 'Conta criada com sucesso!',
                status: 200
            })

        } catch (error: any) {
            response.status(error.statusCode).json({
                message: error.message,
                status: error.statusCode
            })
        }

    }
}