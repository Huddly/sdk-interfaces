import FramingModes from '../enums/FramingModes';
import ICnnControl from './ICnnControl';

export default interface IAutozoomControl extends ICnnControl {
  /**
   * Sets autozoom mode on camera
   *
   * @param {FramingModes} framingMode What framing mode to set
   * @returns {Promise<void>} Returns a promise which
   * resolves in case the camera operation completes
   * succesfully. Reject with an error otherwise.
   * @memberof IAutozoomControl
   */
  setFraming(framingMode: FramingModes): Promise<void>;
}
