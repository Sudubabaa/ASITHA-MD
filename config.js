const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=GnZl3A4I#YXen1se0069pvP1zGavQVnT8s3wbcgYxMe5UcqHoqgU",
MONGODB: process.env.MONGODB || "94701242477",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
