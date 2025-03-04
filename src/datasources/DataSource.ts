import { getPool } from "../db/Db";
import { Account } from "../entitites/Account";
import { StorageRepository } from "../repositories/Storage-Repository";

export class DataSource implements StorageRepository {
  async getAllAccounts(): Promise<Account[] | null> {
    try {
      const res = await getPool().query(`SELECT * FROM account`);
      return res.rows;
    } catch (error) {
      console.error("Fehler beim Abrufen aller Accounts", error);
      return null;
    }
  }
  async getAccount(accountNumber: number): Promise<Account | null> {
      try{
        const res = await getPool().query(`SELECT * FROM account WHERE accountNumber=$1`,[accountNumber]);
        return res.rows[0];
      }
      catch(error){
        console.error(`Fehler beim Abrufen des abgefragten ${accountNumber} Accounts`,error);
        return null;
      }
  }
}
