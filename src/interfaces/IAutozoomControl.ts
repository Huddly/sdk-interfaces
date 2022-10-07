import FramingModes from '../enums/FramingModes';
import ICnnControl from './ICnnControl';

export default interface IAutozoomControl extends ICnnControl {
  /**
   * Gets the supported framing modes for the camera
   *
   * @return {Promise<FramingModes[]>} Returns a promise that resolves an array of supported modes
   * @memberof IAutozoomControl
   */
  getSupportedFramingModes(): Promise<FramingModes[]>;
  /**
   * Sets autozoom mode on camera
   *
   * @param {FramingModes} framingMode What framing mode to set
   * @returns {Promise<void>} Returns a promise which
   * resolves in case the camera operation completes
   * succesfully. Reject with an error otherwise.
   * @memberof IAutozoomControl
   */
  setFramingMode(framingMode: FramingModes): Promise<void>;
}
