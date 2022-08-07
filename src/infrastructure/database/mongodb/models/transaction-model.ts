const mongoose = require('mongoose')

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

    static getStatusByTransactionId(transactionId: string){
        return Transaction.findById(transactionId).lean()
    }
}

export default TransactionModel