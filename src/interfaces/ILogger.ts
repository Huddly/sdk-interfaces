export default interface ILogger {
  info(message: string, component?: string): void;
  debug(message: string, component?: string): void;
  warn(message: string, component?: string): void;
  error(message: string, stackTrace?: any, component?: string): void;
}
