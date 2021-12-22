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
  L1_PID = 0x3e9, // Huddly L1/ACE
  BASE_PID = 0xba5e, // Huddly BASE
}

export default HuddlyHex;
