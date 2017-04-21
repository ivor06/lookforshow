export {BaseError}

class BaseError extends Error {
    title?: string;
    message: string;

    constructor(title?: string, message?: string) {
        super(message);
        this.title = title;
        this.message = message;
    }

    toString(): string {
        return (this.title ? this.title : "") + (this.message ? ": " + this.message : "");
    }
}
