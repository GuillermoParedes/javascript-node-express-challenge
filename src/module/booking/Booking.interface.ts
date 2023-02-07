export interface IBooking {
    id?: string;
    name: string;
    email: string;
    origin?: string | null;
    destination?: string | null;
    departureDate?: Date | null;
    time?: number | null;
    duration?: number | null;
}