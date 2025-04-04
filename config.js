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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_01_04_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNObmh2cktxRmtNampEVkphMnZEcTFROU5CMkFGd3ZibGpFbmlmb05RNlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdreVlYYWFmUjVpMEtKVEJicFFucGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJkY2U3MWUtN2I0Yy00YTkwLThmMjYtNDQ2OWUxM2M1MTUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDIwMixcbiAgICAgIDExNSxcbiAgICAgIDE5OSxcbiAgICAgIDE4NyxcbiAgICAgIDE2LFxuICAgICAgMjUzLFxuICAgICAgMjEwLFxuICAgICAgMTY4LFxuICAgICAgNDYsXG4gICAgICA2NSxcbiAgICAgIDE5NCxcbiAgICAgIDk4LFxuICAgICAgMjAsXG4gICAgICA0NyxcbiAgICAgIDE2OCxcbiAgICAgIDE3NCxcbiAgICAgIDEzNyxcbiAgICAgIDIyMCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDIxMSxcbiAgICAgIDI0NSxcbiAgICAgIDE3MyxcbiAgICAgIDM0LFxuICAgICAgNjYsXG4gICAgICAyMzIsXG4gICAgICAyMDcsXG4gICAgICA3NyxcbiAgICAgIDI1MixcbiAgICAgIDExNixcbiAgICAgIDE2MixcbiAgICAgIDk5LFxuICAgICAgMjI1LFxuICAgICAgNzAsXG4gICAgICAxNzksXG4gICAgICAyMTAsXG4gICAgICAxMjMsXG4gICAgICAyMzEsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlo2NEtUTktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEg2K2RVQ0VOR2p2cjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJkaDJUdDJTeEpjbGZUQXFzN3ZndXlEWFB4MkgvdXF0RDA2dDZjTVRJN2lNVG9aaG5hamlXNHdrZGJHSDdWQ1k0SklNdjNGWGxISWRvcjA2eWlxUUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllycjJUVWNSY0RLSWpsYmxlaWduZEN2V2ppaEZUNXZTR2g4WWowS3FxMVZzV1VaQ3BwTk9HMi9vakVIOW1WK3c0MEtEY3MrSG5FU0g5cUxmdmxEVWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDM3NTM2ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
