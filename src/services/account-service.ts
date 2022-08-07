import { Exception } from "../helpers/exception";
import AccountModel from "../infrastructure/database/mysql/models/account-model";

export default class AccountService{
    static async createAccount(data: any){
        try {
            const response = await AccountModel.createNew(data)
            if(!response) throw new Exception('Falha ao criar nova conta!', 400)
            return response
        } catch (error: any) {
            throw new Exception(
                error.message || "Ocorreu um erro ao criar uma nova conta",
                error.statusCode || 500
            )
        }
    }


}