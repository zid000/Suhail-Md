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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_49_03_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM21FM2NDeHZlMzNqVXN4OXRYTEJRaDc5eDE4Q0ZQczNTbEVkLzcrWDE2dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRkpUR0ZKVlZSWGlPY3hjcWJUTC1mQVwiLFxuICBcInBob25lSWRcIjogXCI1NmZmNWVkNi0zNmVmLTQxN2MtYmQyZC1mZjgxMzdlMDFlNGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTcsXG4gICAgICAyNDgsXG4gICAgICAyNDQsXG4gICAgICAxNzUsXG4gICAgICAyMixcbiAgICAgIDE2OSxcbiAgICAgIDkwLFxuICAgICAgMjAwLFxuICAgICAgMTEsXG4gICAgICA3OCxcbiAgICAgIDgzLFxuICAgICAgNDksXG4gICAgICAxNTMsXG4gICAgICAyMzUsXG4gICAgICAxMTgsXG4gICAgICAxODIsXG4gICAgICAyMzIsXG4gICAgICAyMixcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICA2NCxcbiAgICAgIDIzMixcbiAgICAgIDExLFxuICAgICAgMTkzLFxuICAgICAgOTIsXG4gICAgICAxNzksXG4gICAgICAxOTEsXG4gICAgICAxOTksXG4gICAgICAxNDksXG4gICAgICAxNzQsXG4gICAgICAxMzgsXG4gICAgICAxNCxcbiAgICAgIDY3LFxuICAgICAgMzIsXG4gICAgICA4MSxcbiAgICAgIDg0LFxuICAgICAgMjMzLFxuICAgICAgMTU3LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDNTTkcxQlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS82K2RVQ0VObi8rcjRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm41aW9rY0QzMWRFSHdLeDc0N04xcXZFbDVMRnZPcGYxeTBLeTNESmFmUnd6djZ6SWNwQUVMRExyc0krOHhUVU1IUkpwUHBXeERSOXp5dksvVnR1K0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNENEpLbitnSHFWbnNwbnpKYjJVUlR6Z0RCWGp5eVFMcnJjeSt6cHphVkhuTjU4aGp0S3R6NldMK09aTEJ3QVl3dWozSkVDbkRZZytpVVhaYk1sTUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI2NTEzNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmUC5qc29uIjogIntcImtleURhdGFcIjpcImo2L1lQaE8rb1ErZlZua1ExNVR5T2ZZZVQyM3FjQ3RNbERONnFYek5kRk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
