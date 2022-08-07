import { DataTypes } from "sequelize";

import { sequelize } from "../mysql";

export const AccountSchema = sequelize.define('Accounts', {
    accountNumber: DataTypes.NUMBER,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    birthday: DataTypes.DATE,
    balance: DataTypes.NUMBER,
    concurrency: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
})