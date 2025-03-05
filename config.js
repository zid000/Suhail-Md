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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_58_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCYnF1dUozTnZPcVgvK1FEdjg1eFF4ejRxSysxYkpTOUttNXdsNXZBVnhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLdm5xZXRSOFRRaXpfRnlaa1UzLTJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQwMGU0YTQyLTA4NTMtNGVhNC05YjU3LTk4NGY0NDRhZGU4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAxNzAsXG4gICAgICAyMSxcbiAgICAgIDE4MyxcbiAgICAgIDIwNSxcbiAgICAgIDIxNCxcbiAgICAgIDI0MCxcbiAgICAgIDQ0LFxuICAgICAgMTYwLFxuICAgICAgMjA4LFxuICAgICAgNSxcbiAgICAgIDI1MyxcbiAgICAgIDEwNCxcbiAgICAgIDIzMCxcbiAgICAgIDIyLFxuICAgICAgMjIxLFxuICAgICAgMTU0LFxuICAgICAgNjgsXG4gICAgICA5MCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDMsXG4gICAgICAyMTUsXG4gICAgICAyMDUsXG4gICAgICA5OCxcbiAgICAgIDQ5LFxuICAgICAgMjAxLFxuICAgICAgNTksXG4gICAgICAyMCxcbiAgICAgIDI0MixcbiAgICAgIDIyNCxcbiAgICAgIDI1NSxcbiAgICAgIDU4LFxuICAgICAgNTQsXG4gICAgICAxODEsXG4gICAgICAyMjIsXG4gICAgICAyMjAsXG4gICAgICA3NCxcbiAgICAgIDk5LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyS0VDQ0Y3NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUDUrZFVDRUlyS283NEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicU03ZmFnbzA0N0d0Wms0anlaVWh6K0lYNWR2cW1ENFppRVZSbWI0ZkQwOGdNalBwQnlBb0czZWhrTjFPNU9QN0hEUHRsRzV6cXdxT244WGI0R1RaQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieWVXNk9lTkVrajNOODFkcFg0WHNmdVZwZXFqT3pkT0o1T0tncVdramFhMWk3ZzNVMWlXRGcrcUlRaFBGRDIzZlNReFRUVGFwUGxkbHFYcGpScmNrQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTIxOTA4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZILmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnAwS0o4ZjZrQWdGclk3eDdpZ1NKc0VrTEZHWGRRUEdIb2FCV2R4N1lWZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
