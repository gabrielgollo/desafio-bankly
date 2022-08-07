import { AccountSchema } from "../schema/account";


export default class AccountModel{
    static createNew(data: any){
        return AccountSchema.create(data)
    }
}