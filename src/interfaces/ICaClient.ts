/**
 *
 */
export const Option = {
  speakerFraming: 'speakerframing',
} as const;

/**
 * Mirrors the expected structure of the server response for each option
 * certificate.
 */
export interface OptionCertificate {
  /**
   * Format of the certificate. Typically Pem
   */
  format: string;

  /**
   * Name of the option the certificate is meant for. An option
   * can for instance be a feature such as speaker framing. Typically as a single
   * string of combined words without any spaces.
   */
  option: typeof Option;
  data: string;
}

export function isOptionCertificate(
  optionCertificate: OptionCertificate
): optionCertificate is OptionCertificate {
  return (
    'format' in optionCertificate && 'option' in optionCertificate && 'data' in optionCertificate
  );
}

/**
 * Client used for communicating with the Huddly Certificate Authorithy.
 * Main use is to get option certificates for a given camera based on its
 * serial number.
 *
 */
export default interface ICaClient {
  getOptionCertificates(serialNumber: string): Promise<OptionCertificate[]>;
}
