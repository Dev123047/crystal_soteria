//endcrypt is just a amalgamation of encrypt/decrpyt... endecrypt seemed nice but endcrypt is just nicer lol

function encryptAES(message, passphrase) {
  var ciphertext = CryptoJS.AES.encrypt(message, passphrase).toString();
  return ciphertext;
}

function decryptAES(encryptedmsg, passphrase) {
  const decrypted = CryptoJS.AES.decrypt(encryptedmsg, passphrase).toString(CryptoJS.enc.Utf8);
  return decrypted;
}

function vigenereCipher(message, key, mode) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const messageUpper = message.toUpperCase();
  const keyUpper = key.toUpperCase();
  let encryptedMessage = '';
  if (mode === 'encrypt') {
    for (let i = 0; i < messageUpper.length; i++) {
      const char = messageUpper.charAt(i);
      if (ALPHABET.indexOf(char) !== -1) {
        const shift = (ALPHABET.indexOf(keyUpper.charAt(i % keyUpper.length)) + ALPHABET.indexOf(char)) % 26;
        encryptedMessage += ALPHABET.charAt(shift);
      } else {
        encryptedMessage += char;
      }
    }
  } else if (mode === 'decrypt') {
    for (let i = 0; i < messageUpper.length; i++) {
      const char = messageUpper.charAt(i);
      if (ALPHABET.indexOf(char) !== -1) {
        const shift = (ALPHABET.indexOf(char) - ALPHABET.indexOf(keyUpper.charAt(i % keyUpper.length)) + 26) % 26;
        encryptedMessage += ALPHABET.charAt(shift);
      } else {
        encryptedMessage += char;
      }
    }
  } else {
    throw new Error('Invalid mode. Please use "encrypt" or "decrypt".');
  }
  return encryptedMessage;
}
