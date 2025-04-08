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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_10_04_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE4LFxuICAgICAgICA0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidERDWG9UY2s3Wk9uMWlsSkhHd0d5cy8veUFMdmFtUCsyOGJTc3pRczFJcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVI3VTl2NFBUZk9yLVYydDhFQ1ZnUVwiLFxuICBcInBob25lSWRcIjogXCJiNDhlMjcwNC0xMDEzLTQ0MTQtOWU1YS0xNmM1NGYxZTVkNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMjM4LFxuICAgICAgMjE0LFxuICAgICAgMTI5LFxuICAgICAgMTgsXG4gICAgICA4NyxcbiAgICAgIDcyLFxuICAgICAgMTMwLFxuICAgICAgNjQsXG4gICAgICAxNzUsXG4gICAgICAxNDksXG4gICAgICAzNyxcbiAgICAgIDI0MyxcbiAgICAgIDEwMyxcbiAgICAgIDIzLFxuICAgICAgODUsXG4gICAgICAyMjYsXG4gICAgICAyMDIsXG4gICAgICAyMyxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNjEsXG4gICAgICAyMDIsXG4gICAgICAxNzIsXG4gICAgICAxNTMsXG4gICAgICAyNDksXG4gICAgICAzNixcbiAgICAgIDI0NCxcbiAgICAgIDk3LFxuICAgICAgNTIsXG4gICAgICAyNDksXG4gICAgICA1MixcbiAgICAgIDIzMixcbiAgICAgIDExNyxcbiAgICAgIDE5OSxcbiAgICAgIDE1LFxuICAgICAgMjQxLFxuICAgICAgMTE3LFxuICAgICAgMjM1LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzhNWUgyR0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHI2K2RVQ0VJZnYwYjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNqeEVCUURZOEZUZ05aN01yNlV6b2xKaXJjS3Y2Y0MxbGRRODNZVVpZR050L0xIOEhGaFlDT2owRmJJQ29udlhPSUp5OWVyVTJTRU5aS3Y0RDYrOENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9wbkxueW1jcDM5LzFPWWlqNWVBbnFyL0p4NkpQSDliNXhFSXNqQ1RkQ3d6SlRxTXhDZXZScGZ5YzJzRFk4ZjVKOGZzaHR6VDRjZm9Gd0RSQ0NkSkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQwNzQ2MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
