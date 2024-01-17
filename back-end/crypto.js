import crypto from "crypto";
// Membuat string hex acak sepanjang 64 karakter
const randomString = crypto.randomBytes(32).toString('hex');

console.log('Random String:', randomString);
