import ITransport from './ITransport';

export default interface ISubscriber {
  /**
   * Handler for deserialization and any sort of useful
   * manipulation before the data reaches the end user.
   */
  _subscriptionHandler: Function;

  /**
   * Transport for communicating with the camera
   */
  _transport: ITransport;

  /**
   * Starts subscribing to a given message
   * @param options Options that are relevant for initialization
   */
  subscribe(options: any): void;

  /**
   * Stops subscribing to a given message
   */
  unsubscribe(): void;
}
