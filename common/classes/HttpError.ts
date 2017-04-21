import {BaseError} from "./BaseError";

export {
    HttpError
}

class HttpError extends BaseError {
    status: number;

    constructor(statusCode: number, title?: string, message?: string) {
        super(title, message);
        this.status = statusCode;
    }

    toString(): string {
        return this.status + " " + super.toString();
    }
}
