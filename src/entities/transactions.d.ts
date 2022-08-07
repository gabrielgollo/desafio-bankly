export interface TransactionsInterface {
    accountOrigin: string;
    accountDestination: string;
    value: number;
    status?: "In Queue" | "Processing" | "Confirmed" | "Error";
}