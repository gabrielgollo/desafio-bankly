import { TransactionsInterface } from "../entities/transactions";
import { Exception } from "../helpers/exception";
import TransactionModel from "../infrastructure/database/mongodb/models/transaction-model";
import RabbitMQService from "../infrastructure/queue/rabbitmq-service";

export default class FundService{
    public static async createTransaction(data: TransactionsInterface) {
        let transactionId =  null
        try {
            transactionId = await FundService.openTransference(data)
            if(!transactionId) throw new Exception('Failed to create a transaction!', 500)
            await RabbitMQService.sendMessage(transactionId)
            
            return transactionId
        
        } catch (error: any) {
            try {
                if(transactionId){
                    TransactionModel.deleteById(transactionId)
                }
            } finally {
                throw new Exception(error.message || 'Failed to create a transaction!', 500)
            }
        } 
    }

    
    private static async openTransference(data: TransactionsInterface): Promise<string>{
        let transactionId = null;
        try{
            const transactionDoc = await TransactionModel.create(data)
            transactionId = transactionDoc._id
            return transactionId
        } catch(error: any) {
            throw new Exception(error.message || 'Failed to create a transaction!', error.statusCode || 500)
        }
    }

    public static async findTransaction(transactionId: string) {
        try {
            const status = await TransactionModel.getStatusByTransactionId(transactionId)
            if(!status) throw new Exception('No transaction found!', 400)
            return status._doc
        } catch (error: any) {
            throw new Exception(error.message || 'An error has been found!', 500)
        }

    }
}