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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_46_03_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYTBLOVk2cHZBeWFKRXRLRzZZVDRwZGU2Z0tRbkhwTnNPQVMwRnIxRHhxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUNNTGpmbUtTMzJDMDJtelFxZVZCQVwiLFxuICBcInBob25lSWRcIjogXCJlZWU5MTc5Mi1hYTVmLTQxOTgtOWFmOC1kYzEyMTkyNjEwOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTg4LFxuICAgICAgMjIzLFxuICAgICAgODEsXG4gICAgICAxMjUsXG4gICAgICA3LFxuICAgICAgMjE1LFxuICAgICAgMjIzLFxuICAgICAgMTg5LFxuICAgICAgMTE4LFxuICAgICAgMTE0LFxuICAgICAgOTQsXG4gICAgICAxOCxcbiAgICAgIDIyNixcbiAgICAgIDE4NyxcbiAgICAgIDY4LFxuICAgICAgNDEsXG4gICAgICAyMDIsXG4gICAgICAxMzIsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxODksXG4gICAgICA0NixcbiAgICAgIDExLFxuICAgICAgNTIsXG4gICAgICAyMDcsXG4gICAgICAxNDMsXG4gICAgICAyNDIsXG4gICAgICAyMTEsXG4gICAgICAxODEsXG4gICAgICA2MyxcbiAgICAgIDkxLFxuICAgICAgMjQ4LFxuICAgICAgMTMxLFxuICAgICAgMTI1LFxuICAgICAgMTgxLFxuICAgICAgMTAyLFxuICAgICAgMTA3LFxuICAgICAgMTQ4LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVhSVzczNkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEw1K2RVQ0VMZit5YjRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm04Wng2Q3JOOFUrdC9ncHJmQXdxVTVUaTc5N2ZXUnZEdnR6UFZlb3FCejZNZ2FQS01YZ3dSc1ZLazZzSDk1dmNIMG9kU3pYbThhMW8wMy9NeU9jTEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNXY3QwVnJnYWxMUVpZd0xLS3M1Z2lnK0g5YmdpWnVoOVFZckVlUmxESE9SU2NSbGJGeDBqa1g3ckpXM3Z5QVlURXp1MGlITjRWeklIYmxBZFNtRUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDE4NDgzNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZm1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmbS5qc29uIjogIntcImtleURhdGFcIjpcIkdlVThPZHZhUnExUHRYTi9zZUdiMHV6MHdkc2Y2TnZLQi9YVkJDajFZd0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQxODAwMzM2NTY1XCJ9Igp9"  // PUT your SESSION_ID 


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
