/**
 *
 * Enum defining all the Huddly HEX values related to device product IDs, vendor ID etc
 */
enum HuddlyHex {
  VID = 0x2bd9, // Huddly Vendor ID
  GO_PID = 0x11, // Huddly GO
  BOXFISH_PID = 0x21, // Huddly IQ (with mic) / IQ Jamboard
  CLOWNFISH_PID = 0x31, // Huddly IQ (without mic and cnn feature)
  DWARFFISH_PID = 0x51, // Huddly ONE
  DARTFISH_PID = 0x41, // Huddly Canvas
  BASE_PID = 0xba5e, // Huddly BASE
  L1_PID = 0x4d3f64b, // Huddly L1/ACE => From onvif wsdd discovery response (decimal val: 81000011)
  S1_PID = 0x4d3f64e, // Huddly S1/SEE => From onvif wsdd discovery response (decimal val: 81000014)
  SMARTBASE_PID = 0xba01, // Huddly Smartbase
  S1_SMARTBASE_PID = 0xa031, // Huddly S1/SEE when connected to smartbase
  L1_SMARTBASE_PID = 0xa032, // Huddly L1/ACE when connected to smartbase
  CREW_SMARTBASE_PID = 0xa033, // Huddly Crew when connected to smartbase
}

export default HuddlyHex;
