import { TransactionsInterface } from '../../../../entities/transactions'
import MongoDb from '../mongodb'
import TransactionSchema from '../schemas/transaction-schema'

const connection = MongoDb.getOrCreateConnection()

const Transaction = connection.model('transaction', TransactionSchema, 'transactions')

class TransactionModel{
    static create(data: TransactionsInterface){
        return Transaction.create({
            ...data,
            status: 'In Queue'
        })
    }

    static deleteById(_id: string){
        return Transaction.deleteOne({
            _id
        })
    }

    static getStatusByTransactionId(transactionId: string){
        return Transaction.findById(transactionId).select({status: 1}).exec()
    }
}

export default TransactionModel