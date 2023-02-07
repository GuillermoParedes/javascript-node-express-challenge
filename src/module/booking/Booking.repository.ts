import { Body, Get, Path, Post, Route, Tags } from "tsoa";
import { IRepository, ISuccessRequest } from "../../core/interface/IRepository";
import { IBooking } from "./Booking.interface";
import { BookingService } from "./Booking.service";

@Route("booking")
@Tags("Booking")
export class BookingRepository {
    service = new BookingService();

    @Get('/handle')
    public async getHandle(): Promise<String> {
        return 'Booking API REST'
    }

    @Get('/')
    public async findAll(): Promise<Array<IBooking>> {
        return this.service.findAll();
    }

    @Post("/")
    public async create(
        @Body() data: IBooking): Promise<ISuccessRequest> {
        try {
            const response = await this.service.create(data);
            return { error: !!response, message: "It's created a user" }
        } catch (err: any) {
            console.log('err', err);
            return { error: true, message: err.message }

        }

    }

    @Get("/:id")
    public async findById(@Path() id: string): Promise<IBooking | ISuccessRequest | null> {
        return await this.service.findById(id);
    }

    @Post("/update")
    public async update(@Body() body: any): Promise<any> {
        console.log('body', body);
        return this.service.update(body.filter, body.data);
    }

}