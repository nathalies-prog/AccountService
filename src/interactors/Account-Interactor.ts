import { StorageRepository } from "../repositories/Storage-Repository";

export class AccountInteractor{
    storageRepository : StorageRepository;
    constructor(storageRepository : StorageRepository){
        this.storageRepository = storageRepository;
    }
    
}