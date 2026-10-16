// TOPIC : Enum with function

enum LogLevel {
  Info,
  Warning,
  Error,
}

function log(level: LogLevel) {}

log(LogLevel.Info);
log(0);
// log(3); // !: Argument of type '3' is not assignable to parameter of type 'LogLevel'.

export {};