import fs from "fs/promises";
import path from "path";

export class FileSystemInfo {
	#fullName;
	#name;
	#extension;
	/**
	 * @type {import('path').PlatformPath} OS specific path
	 */
	#path;
	/**
	 * @type {FileSystemInfo}
	 */
	#directory;

	/**
	 * constructor
	 * @param hostEnvirenment
	 * @param {string} name @link parent if parent undefined: full name of file or direcotory otherwise just name
	 * @param {string} parent parent directory
	 */
	constructor(hostEnvirenment, name, parent = ".") {
		this.#path =
			hostEnvirenment.OS === undefined ? path : path[hostEnvirenment.OS];

		const parentpath = this.#path.resolve(parent);
		this.#directory =
			name == ""
				? null
				: new FileSystemInfo(
						hostEnvirenment,
						this.#path.basename(parentpath),
						this.#path.dirname(parentpath)
				  );
		this.#fullName = path.resolve(parent, name);

		this.#name = name == "" ? parent : this.#path.basename(name);
		this.#extension = this.#path.extname(this.#name);
	}

	/**
	 * gets full file of directory name (C:/dir/file.txt)
	 * @type {string}
	 */
	get fullName() {
		return this.#fullName;
	}

	/**
	 * gets name without path (file.txt)
	 * @type {string}
	 */
	get name() {
		return this.#name;
	}

	/**
	 * returns file extension without '.'
	 * @type {string}
	 */
	get extension() {
		return this.#extension;
	}

	/**
	 * get parent directory
	 * @type {FileSystemInfo}
	 */
	get directory() {
		return this.#directory;
	}

	/**
	 * get true if file exists
	 * @type {boolean}
	 */
	get exists() {
		return fs.existsSync(this.#fullName);
	}

	async readAsync(callback) {
		return fs.readFile(this.#fullName, "utf8", callback);
	}
}

export class PhisicalFileProvider {
	/**
	 * @type {import('path').PlatformPath} OS specific path
	 */
	#path;
	#rootPath;
	#hostEnvirenment;
	constructor(hostEnvirenment, rootPath) {
		this.#hostEnvirenment = hostEnvirenment;
		this.#path =
			hostEnvirenment.OS === undefined ? path : path[hostEnvirenment.OS];
		this.#rootPath = rootPath;
	}

	getFileInfo(subPath) {
		return new FileSystemInfo(
			this.#hostEnvirenment,
			this.#path.resolve(this.#rootPath, subPath)
		);
	}

	enumerateDirectory(subPath) {
	const dir = (await	fs.opendir(subPath));
    dir.
	}
}
