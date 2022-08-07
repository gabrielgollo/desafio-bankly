import { DataTypes } from "sequelize";
import { AccountSchema } from "./account";

import { sequelize } from "../mysql";

const TransactionSchema = sequelize.define('Transactions', {
    accountOrigin: DataTypes.STRING,
    accountDestination: DataTypes.STRING,
    value: DataTypes.NUMBER,
    status: DataTypes.STRING,
    method: DataTypes.STRING,
})

TransactionSchema.hasMany(AccountSchema, {
    foreignKey: 'accountNumber',
})


export { TransactionSchema as TransactionModel };