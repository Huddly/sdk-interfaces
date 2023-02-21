export interface OptionCertificate {
  format: string;
  option: string;
  data: string;
}

export interface OptionCertificatesResult {
  error?: string;
  optionCertificates?: OptionCertificate[];
}

export function isOptionCertificate(
  optionCertificate: OptionCertificate
): optionCertificate is OptionCertificate {
  return (
    'format' in optionCertificate && 'option' in optionCertificate && 'data' in optionCertificate
  );
}

export default interface ICaClient {
  getOptionCertificates(serialNumber: string): OptionCertificatesResult;
}
