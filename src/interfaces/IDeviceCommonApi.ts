import ReleaseChannel from './../enums/ReleaseChannel';
import InterpolationParams from './IInterpolationParams';
import IUsbTransport from './IUsbTransport';

/**
 * Interface describing common api class used by the device managers
 *
 * @ignore
 * @export
 * @interface IDeviceCommonApi
 */

export default interface IDeviceCommonApi {
  transport: IUsbTransport;

  sendAndReceiveMessagePack(message: any, commands: any, receiveTimeout?: number): Promise<any>;

  sendAndReceiveWithoutLock(cmd: string, options?: any);

  sendAndReceive(payload: Buffer, commands: any, timeout?: number): Promise<any>;

  withSubscribe<T>(
    subscribeMessages: string[],
    fn: () => Promise<T>,
    shouldAwaitUnsubscribe?: boolean
  ): Promise<T>;

  getProductInfo(): Promise<any>;

  setProductInfo(newProdInfoData: any): Promise<void>;

  getUptime(): Promise<any>;

  getCameraInfo(): Promise<any>;

  getErrorLog(timeout: number, retry?: number, allowLegacy?: boolean): Promise<any>;

  eraseErrorLog(timeout: number): Promise<void>;

  setInterpolationParameters(params: InterpolationParams): void;

  getInterpolationParameters(): Promise<InterpolationParams>;

  getAutozoomStatus(timeout?: number): Promise<any>;

  getLatestFirmwareUrl(device: string, releaseChannel?: ReleaseChannel): Promise<string>;
}
