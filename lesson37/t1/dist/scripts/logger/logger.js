export const createLogger = (loggerName) => {
    const logs = [];
    return {
        getLogs () {
            return logs;
        },
        log(message){
            logs.push(`log - ${loggerName} - ${message}`);
        },
        error(errorText){
            logs.push(`error - ${loggerName} - ${errorText}`);
        },
        }
    }