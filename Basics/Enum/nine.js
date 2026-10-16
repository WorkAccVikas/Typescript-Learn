// TOPIC : Enum with function
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Error"] = 2] = "Error";
})(LogLevel || (LogLevel = {}));
function log(level) { }
log(LogLevel.Info);
log(0);
export {};
