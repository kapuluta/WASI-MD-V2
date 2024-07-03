//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "+255674477908";
global.owner = process.env.OWNER_NUMBER || "+255674477908";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "  eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBaRXdsK1N4dDBacnRIbG04bGgyazJ0SmRRKzNSQXAxMTN2TXFtZ0wyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXUwZDNxYXJlZFA2VTBZK2VmZW1MYzdiVmNURmFsdG4yMWRUTmd4Rkozaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRlZFSGkwbEpEL25uSXAyT1VzR3lrTUNld1pGdW9VTlA5dU1CSTU1eDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpK0pVWmdKdy9GQkhsRkVSWUdvTGQwUWlFalNYREdFMnA0YnBnOEdWMkN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDcmVFRFlxUXFaVEpzcXlaUGIzZ05qUHpuQldjT2VjcFhkVW56ZWFxSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iksvc0tJdUtiYVgwZ3RTaVBGbmVSYWNqZ3cvVG1RNXNVb0pweTRFNTBDZ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENOOWRSeVh3RExEZlB5ZTl4TERFeXJTTWFaVCt5MXQ0SXY1MXNjeWJuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGxsdUdUc1p4TE1SRk40TUM1K20yNW43c1ZQM05VcU9PK3pvSkxEc2xuVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzdktaTGsxa2VhUnJlUk9WVGYrYkZZMkZ6QnRYMEpTc2V5dU1hUVg5eDVuYmdUdXVuSG9BV2pReEx3b2hRTWJIa2JQUS9EWE0vYUVNaCtEVE5kaGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJrc21uU2lhVzZ5Z1JkRi8wWmYzSE9RY1FtSmZOa2Q1VGZkNldWMFBjWW1ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJISzNicThVN1EwcWJQOU15VjRtS253IiwicGhvbmVJZCI6IjEwZTU2NzVlLTBlNzktNDQxZS1iZmU1LTg0ZTU3MTkxZGQxZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnb2JDYVgrVDhsZDlvbGd1a0d1QS9CbEtONDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTF2eStaeWVMREpaUGtFcTM4UWlic1RzdkQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1LOENZSEoxIiwibWUiOnsiaWQiOiIyNTU2NzQ0Nzc5MDg6MjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05xTnpma0ZFSmFYbExRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZ1VU5PRS9icmxpNkhsUW9qcmpKcFNGcnhGYngzakQwSUpBVThyWGorU2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1NSW5PMzJRNkJHVmV0NHVCS0t6eCtuTDVITlNqYjRCZDh3S0JXcHNBOUNkWmtlMUJYclVMRHlxL3hWalN6UlhUQmovREN6OCs1U29JZVFWVG90K0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrK0pHZFNrVm1YN3B2c3VEeDVVSGZ5MmtsMW5RYmtrTUo1UTJMMEJCZTM1YWZxMXMyUXpnSk9wa2NEaWZ2ZjhtSGhYbzhpSUd0UGQzZmdtcEg2Qndndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NDQ3NzkwODoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlcmxEVGhQMjY1WXVoNVVLSTY0eWFVaGE4Ulc4ZDR3OUNDUUZQSzE0L2tuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTk1MzAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFoaSJ9   "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "𝐑𝐈𝐂𝐇𝐀𝐑𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "𝐑𝐈𝐂𝐇𝐀𝐑𝐃(𝑬𝒎𝒆𝒓𝒊𝒕𝒖𝒔)🇹🇿",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
