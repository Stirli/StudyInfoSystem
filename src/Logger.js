export class Logger {
    log(...args) {
        console.log(new Date().toLocaleTimeString(), ...args);
    }
}
