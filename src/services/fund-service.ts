import AccountAPI from "../api/AccountAPI";
import { TransactionsInterface } from "../entities/transactions";
import { Exception } from "../helpers/exception";
import TransactionModel from "../infrastructure/database/mongodb/models/transaction-model";

export default class FundService{
    public static async processMessage(data: TransactionsInterface){
        const transactionId = await FundService.openTransference(data)
        if(!transactionId) throw new Exception('Failed to create a new transaction!', 500)
        return transactionId
    }

    
    private static async openTransference(data: TransactionsInterface): Promise<string>{
        const Transaction = await TransactionModel.create(data)
        return Transaction
    }
    
    private static getAccounts(accountNumber1: string, accountNumber2: string): Promise<Array<any>>{
        return Promise.all([
            AccountAPI.get(`Account/${accountNumber1}`),
            AccountAPI.get(`Account/${accountNumber2}`)
        ])
    }

    private static async doBalacement(){

    }
}