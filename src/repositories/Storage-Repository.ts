import { Account } from "../entitites/Account";

export interface StorageRepository{
    createAccount(firstName : string, lastName : string) : Promise<Account | null>;
    getAllAccounts() : Account[];
    getAccount(accountNumber : number ) : Account;
}