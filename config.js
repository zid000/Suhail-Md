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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_04_03_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3cDhFR0JzQTFuOUNTRlNFTVJoVnp1Z2k2ZzBJRXZRYUxoZ1ljTGRjZThnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKT0VDeFcya1FhMjAzNXVjMmZaUmFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFkYmFlMmI3LTY4MTAtNDE3Mi1iMmQwLTliMDA1ZGY2MmRhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDE1MixcbiAgICAgIDE4MyxcbiAgICAgIDEsXG4gICAgICAyMTYsXG4gICAgICA3OCxcbiAgICAgIDE4NCxcbiAgICAgIDY2LFxuICAgICAgMjE2LFxuICAgICAgMTE5LFxuICAgICAgMjE3LFxuICAgICAgNzMsXG4gICAgICAxNDEsXG4gICAgICAxODQsXG4gICAgICAyMzIsXG4gICAgICA2MyxcbiAgICAgIDEsXG4gICAgICA5NSxcbiAgICAgIDE4NixcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTM5LFxuICAgICAgODEsXG4gICAgICAxMTIsXG4gICAgICAyMDksXG4gICAgICAyMzQsXG4gICAgICA3LFxuICAgICAgNSxcbiAgICAgIDExOCxcbiAgICAgIDQ5LFxuICAgICAgMTM5LFxuICAgICAgMTc0LFxuICAgICAgMTE3LFxuICAgICAgMjA1LFxuICAgICAgMjA4LFxuICAgICAgMTMzLFxuICAgICAgMjMwLFxuICAgICAgOTEsXG4gICAgICAxODgsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMVjFMWlYxU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcjYrZFVDRUp5UDliNEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU0JDVm91a0VWY3NaSzlXNVVrT2V3RHpHZ0d2UVowVEFJcGg0eGVkVHg0Qm9sQmNSZVpicnFkbVpMRUpBTC8zVkNCcStHUGs1YWJFYkgzOXowTnA5QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS200Q3JWSGVaMFZGOEt3Rzhia3h5cVJsanBGYi9HdjRESE9ucUlOYzROeXlZZGZWZzlRenpZMUs4b1ZJNXZwZWdUY1IxSnlmNkEvVysyQU9GU0VWaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjU1NTA0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
