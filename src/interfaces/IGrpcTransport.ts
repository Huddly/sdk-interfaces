import ITransport from './ITransport';

/**
 * Interface used to communicate with huddly network devices.
 *
 * @ignore
 * @interface IGrpcTransport
 */
export default interface IGrpcTransport extends ITransport {
  /**
   * TODO
   *
   * @type {number}
   * @memberof IGrpcTransport
   */
  grpcConnectionDeadlineSeconds: number;

  /**
   * TODO
   *
   * @type {HuddlyServiceClient}
   * @memberof IGrpcTransport
   */
  grpcClient: any;

  overrideGrpcClient(client: any): void;
}
