import * as Koa from "koa";
import * as serve from "koa-static";
import * as compress from "koa-compress";
import * as https from "https";
import {Z_SYNC_FLUSH} from "zlib";

export {
    Server
};

class Server {
    app: Koa;
    server: https.Server;
    io: SocketIO.Server;

    static  bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = new Koa();

        this.app.use(compress({
            filter: content_type => /(text|javascript)/i.test(content_type),
            threshold: 2048,
            flush: Z_SYNC_FLUSH
        }));

        this.app.use(serve(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "\\..\\..\\client\\dist"));

        this.server = this.app.listen(3000, "127.0.0.1", () =>
            console.log("app listen on", this.server.address().address + ":" + this.server.address().port));
    }

    close() {
        this.server.close(data => console.log("Server closed:", data));
    }
}
