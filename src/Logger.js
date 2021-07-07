class Logger {
    log(...args) {
        console.log(new Date().toLocaleTimeString(), ...args);
    }
}

export default new Logger();