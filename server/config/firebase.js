const fs = require('fs');
const admin = require("firebase-admin");
console.log(`holl, ${__dirname}`, fs.readFileSync(`${__dirname}/../GOOGLE_SERVICES.json`))
var serviceAccount = fs.readFileSync(`${__dirname}/../GOOGLE_SERVICES.json`);
try {
  admin.initializeApp({
    // credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_SERVICES_JSON))
    credential: admin.credential.cert(JSON.parse(serviceAccount.toString()))
  });
} catch (e) {
  console.error(e);
}

module.exports = admin;
