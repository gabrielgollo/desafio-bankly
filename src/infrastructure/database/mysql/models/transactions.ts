import { DataTypes, Sequelize } from "sequelize/types";
import { Account } from "./account-schema";


const sequelize = new Sequelize('sqlite::memory')

const TransactionModel = sequelize.define('Transaction', {
    accountOrigin: DataTypes.UUIDV4,
    accountDestination: DataTypes.UUIDV4,
    value: DataTypes.NUMBER,
    status: DataTypes.STRING,
    method: DataTypes.STRING,
})

TransactionModel.hasMany(Account, {
    foreignKey: 'accountNumber',
})


export { TransactionModel };