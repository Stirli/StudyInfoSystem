import Logger from "./Logger.js";
import express from "express";
import Ajv from "ajv";
import userRouter from "./routes/userRouter.js";
import homeRouter from "./routes/homeRouter.js";
import { FileSystemInfo } from "./services/fileProvider.js";

const fsi = new FileSystemInfo({}, "server-config.json.schema");

if (fsi.exists) {
	const ajv = new Ajv();
	JSON.parse()
}

const app = express();
const port = 3000;

// определяем маршруты и их обработчики внутри роутера userRouter
app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
	res.status(404).send("Not Found");
});

Logger.log(`Start listeneing port ${port}`);
app.listen(port);
