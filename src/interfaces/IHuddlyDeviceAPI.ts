import EventEmitter from 'events';
import IUVCControlAPI from './IUVCControlApi';
import IDeviceDiscovery from './IDeviceDiscovery';
import ITransport from './ITransport';
import IHuddlyDeviceDiscoveryAPI from './IHuddlyDeviceDiscoveryAPI';

/**
 * Interface used to manage, operate and communicate with a Huddly device.
 *
 * @ignore
 * @interface IHuddlyDeviceAPI
 */
export default interface IHuddlyDeviceAPI extends IHuddlyDeviceDiscoveryAPI {
  /**
   * Returns the concrete implementation of the `IDeviceDiscovery` interface.
   *
   * @returns {Promise<IDeviceDiscovery>} An instance of `IDeviceDiscovery`
   * @memberof IHuddlyDeviceAPI
   */
  getDeviceDiscoveryAPI(): Promise<IDeviceDiscovery>;

  /**
   * Performs a check whether the `Device-API` is able to communicate with
   * the Huddly physical device. If the check goes through, the instance of
   * the transport interface is returned back.
   *
   * @param {*} device An object representing the discovered physical device.
   * @returns {Promise<ITransport>} An instance of `ITransportable`
   * @memberof IHuddlyDeviceAPI
   */
  getValidatedTransport(device: any): Promise<ITransport>;

  /**
   * Returns the concrete implementation of the `ITransportable` interface used
   * to send and receive messages/commands to the device.
   *
   * @param {*} device An object representing the discovered physical device.
   * @returns {Promise<ITransport>} An instance of `ITransportable`
   * @memberof IHuddlyDeviceAPI
   */
  getTransport(device: any): Promise<ITransport>;

  /**
   * Performs a check whether the `Device-API` is able to do standard
   * UVC-XU controls on the device.
   *
   * @param {*} device An object representing the discovered physical device.
   * @returns {Promise<Boolean>} Returns true if the `Device-Api` can perform
   * standed UVC-XU controls on the physical device, false otherwise.
   * @memberof IHuddlyDeviceAPI
   */
  isUVCControlsSupported(device: any): Promise<Boolean>;

  /**
   * Returns a concrete implementation of `IUVCControlApi` interface which is used
   * to perform standard UVC-XU controls on the device.
   *
   * @param {*} device An object representing the discovered physical device.
   * @returns {Promise<IUVCControlAPI>} An instance of `IUVCControlAPI`
   * @memberof IHuddlyDeviceAPI
   */
  getUVCControlAPIForDevice(device: any): Promise<IUVCControlAPI>;

  /**
   * Performs a check whether the `Device-API` is able to communicate with
   * an HID device.
   *
   * @param {*} device  An object representing the discovered physical device.
   * @returns {Promise<Boolean>} Returns true if the `Device-Api` is able
   * to communcate with an HID device, false otherwise.
   * @memberof IHuddlyDeviceAPI
   */
  isHIDSupported(device: any): Promise<Boolean>;

  /**
   * Returns an class instance that is able to communicate, send and receive
   * commands on a HID device.
   *
   * @param {*} device An object representing the discovered physical device.
   * @returns {Promise<any>} A HuddlyHID class instance.
   * @memberof IHuddlyDeviceAPI
   */
  getHIDAPIForDevice(device: any): Promise<any>;
}
