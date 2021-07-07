import Logger from "../Logger";
export function addUser(request, response) {
	Logger.log(request.url);
	response.send("Добавление пользователя");
}

export function getUsers(request, response) {
	Logger.log(request.url);
	response.send("Список пользователей");
}
