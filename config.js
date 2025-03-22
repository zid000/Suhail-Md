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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_40_03_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRiTlZTZ2d0YmlXc21FZDlxWTRZc2Z1alJrZS85Z0Q3cWJtV3NnMWZrNHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIml6LTAtRW5MUlZtY3RJYS1JblZ4eHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTdjNjgzZGQtN2JlMS00ZGY2LWI3MGItZjE4ZjQ1MTEwODJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTQ2LFxuICAgICAgMTk3LFxuICAgICAgODUsXG4gICAgICAxMzUsXG4gICAgICAxMTQsXG4gICAgICAyMTksXG4gICAgICA3OSxcbiAgICAgIDUzLFxuICAgICAgMTg2LFxuICAgICAgNDcsXG4gICAgICA4MixcbiAgICAgIDQxLFxuICAgICAgMjM0LFxuICAgICAgMjU1LFxuICAgICAgMTEsXG4gICAgICAxNzMsXG4gICAgICAxMzksXG4gICAgICAyMDgsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAyNTMsXG4gICAgICAxMDAsXG4gICAgICAxMjQsXG4gICAgICAyNDcsXG4gICAgICA3MCxcbiAgICAgIDIxMixcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgMTc3LFxuICAgICAgMjA0LFxuICAgICAgMTA3LFxuICAgICAgMTM4LFxuICAgICAgMTg4LFxuICAgICAgMTA0LFxuICAgICAgMjAxLFxuICAgICAgMTYyLFxuICAgICAgNDIsXG4gICAgICA1MSxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFR1JLTDVOTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJLzYrZFVDRU9MUCs3NEdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic0N1MUNNeDhXaGhpcHZvajYxeXVGb0FrN0U3QnIwa0svZkpKS3ZreUhRVTBGSU43NEI5aCtCbWptc21zSC9JNEFvRFhvdnpINTNvd3A0Z2NRckFyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib2FLaWU4UktZUXdISUk3aWxiNGtpTTZFeHp3ZmYwTldTVlRJUUpmZzdLT1VtWFFXWGxVSEpOcVZQTzRsS1dPNXo5SHIxeThVaGphbm54UDcxb2MxQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjY2MTYwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajYvWVBoTytvUStmVm5rUTE1VHlPZlllVDIzcWNDdE1sRE42cVh6TmRGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
