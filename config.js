const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_41_04_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDZmJYTUk0dUlsRC9BdGNlTElJQUd0UW5zZE9pOFZ2MWEzUGtWZUZyT2RNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzMUFTOXFVUFFBRzFlY05MSnRndFhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlZTc1NDBhLWQ5MDgtNGJlNy1hYTFhLTIxMGFjMzNmYTM2MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAxNixcbiAgICAgIDIwNyxcbiAgICAgIDE4MixcbiAgICAgIDk1LFxuICAgICAgNSxcbiAgICAgIDk2LFxuICAgICAgMTc0LFxuICAgICAgMjIyLFxuICAgICAgMzEsXG4gICAgICA0NCxcbiAgICAgIDU5LFxuICAgICAgNCxcbiAgICAgIDQ5LFxuICAgICAgOSxcbiAgICAgIDE0LFxuICAgICAgNjYsXG4gICAgICAxNDYsXG4gICAgICAxNTUsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDkyLFxuICAgICAgMTI4LFxuICAgICAgOTAsXG4gICAgICA4MyxcbiAgICAgIDEwNSxcbiAgICAgIDg1LFxuICAgICAgNTQsXG4gICAgICAyMzYsXG4gICAgICAxMzMsXG4gICAgICAxOTIsXG4gICAgICAxOTIsXG4gICAgICAyMDIsXG4gICAgICAxLFxuICAgICAgMTc4LFxuICAgICAgMjQ0LFxuICAgICAgNTksXG4gICAgICAwLFxuICAgICAgMjI3LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVFWVDgyVFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMzYxMzQyMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM1MDQzOTc4NDg1ODk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEp2SDhRbHZhdnZ3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk45SWZ6Y3RQN3NrM0R3Uk9MZ1E4UW9LTGFLV2hRQ3VQVDU5NG1ISDJCd1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUVPdFhwTDREYVRJZUVHK0lWeWQzcFhKOTdBaXA4Z3JjL01MS2l3N3QwVUNBb1I1dFlOTEZSMmdTeTBBMDU5UWM3M1Q2RmlrZjl2cW8wUlNtQUFLRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWGZKOE5JODNqUVh4S0dWWmlVL0NkWUc1QlpGdGdReU5vT0VaT2I2ei85aDliSnVyNXgxTDNZTElRTkNoZjZaemRYNlljRWR4Rzc1RmV3Q21uU1F2alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAzNjEzNDIwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzNTE4NDg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWY0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZjQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJraDBTaUh0ei9Ha1pCOUJVbCt3dGZxMkxxWVFPVjE4ZUJZdHVlQmJwc2pJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NzMzMDc1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzNTE4NDkwMTAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
