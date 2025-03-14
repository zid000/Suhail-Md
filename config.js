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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_58_03_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDgxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1NpTG9WK1V1Q3V4N0owa3BLdXdNV3dFR3FrVUZIR3pwalpqY3FVRE0vTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibFo2ZklrZkFTald3NGRaNVhJb0lRd1wiLFxuICBcInBob25lSWRcIjogXCJiN2MwM2VmNC1jMmRkLTRkNjctYjRkMy0yZmI0NTBiYjFlOGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgODUsXG4gICAgICAxMDIsXG4gICAgICAxODAsXG4gICAgICAxOTgsXG4gICAgICA4MyxcbiAgICAgIDEyOSxcbiAgICAgIDE1OCxcbiAgICAgIDE4NSxcbiAgICAgIDIyNCxcbiAgICAgIDE4LFxuICAgICAgMTMwLFxuICAgICAgNTksXG4gICAgICAxODcsXG4gICAgICAyNDQsXG4gICAgICAxNDcsXG4gICAgICA2MixcbiAgICAgIDEzMCxcbiAgICAgIDUxLFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTAwLFxuICAgICAgMzksXG4gICAgICAxMzMsXG4gICAgICAyMzksXG4gICAgICAxOTMsXG4gICAgICAzMCxcbiAgICAgIDM4LFxuICAgICAgMTQ1LFxuICAgICAgNDksXG4gICAgICAxNTEsXG4gICAgICAzNCxcbiAgICAgIDk3LFxuICAgICAgMTk1LFxuICAgICAgMjM0LFxuICAgICAgMSxcbiAgICAgIDE4NCxcbiAgICAgIDI0NSxcbiAgICAgIDEwNSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNNWjRXTTc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYjUrZFVDRUphazBiNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHpxeE40MHR4aFE0WlFyU28wTGliZE00enRBaXJ3MEdUVGI3b2ZWcDVIQUZkZitLNjFWRGw5SEJweXluRHlLNkVaa2RqVWZ0NlJLRnZ0TjErRXp1Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid21aY2k5SFhYUlROeWhEdjJWaytGbWE0QzZFcUJYUTE1MEdQd1IvN1lSaXd3Vmp3RnZ5czdLcDlQWW80L3ZsaHI2b2NxWWl2dUFmSk1iRWJBSThlQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxOTY3ODk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqNi9ZUGhPK29RK2ZWbmtRMTVUeU9mWWVUMjNxY0N0TWxETjZxWHpOZEZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
