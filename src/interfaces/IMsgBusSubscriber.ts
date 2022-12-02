import ISubscriber from './ISubscriber';
import IUsbTransport from './IUsbTransport';

export default interface IMsgBusSubscriber extends ISubscriber {
  /**
   * Msgbus command used for subscribing and unsubscribing
   */
  _currentSubscription: string;

  /**
   * Usb transport
   */
  _transport: IUsbTransport;

  /**
   * Starts subscribing to a given message
   * @param options Msg bus subscriber specific options
   */
  subscribe(options: MsgBusSubscriberOptions): Promise<void>;
}

export type MsgBusSubscriberOptions = {
  msgBusCmd: string;
  subscriptionHandler?: Function;
};
