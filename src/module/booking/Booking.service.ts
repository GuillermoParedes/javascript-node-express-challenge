import { DatabaseService } from "../../core/service/Database.service";

export class BookingService extends DatabaseService{
    constructor() {
        super("booking")
    }
}