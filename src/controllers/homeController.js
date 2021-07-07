import Logger from "../Logger";

export function index(request, response) {
	Logger.log(request.url);
	response.send("Главная страница");
}

export function about(request, response) {
	Logger.log(request.url);
	response.send("О сайте");
}
