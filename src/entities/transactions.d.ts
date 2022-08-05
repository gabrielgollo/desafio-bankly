import { Account } from "./account";

export interface TransactionsInterface {
    accountOrigin: Account;
    accountDestination: Account;
    value: number;
    status: "In Queue" | "Processing" | "Confirmed" | "Error";
    method: "DOC" | "TED" | "PIX" | "TEF"
}