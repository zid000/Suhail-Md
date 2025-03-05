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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_37_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1mOGZXNVBPd2x1bDh3Z3NoVWJwcnFnaVhRUzFveDZhamoxUGxQL3Z1b2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1yaVVBZ0ZsUnJDT01MTlRyQTJablFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTkxOGE2ZTMtNDgyZC00ODE0LWFkMjItYzJmOWEwMGE2YTRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDMwLFxuICAgICAgMjEwLFxuICAgICAgNzMsXG4gICAgICAyMDIsXG4gICAgICA2NixcbiAgICAgIDMsXG4gICAgICAyMjQsXG4gICAgICAyMjUsXG4gICAgICAyMzUsXG4gICAgICAxMDksXG4gICAgICAyNDEsXG4gICAgICAxMzcsXG4gICAgICA1MixcbiAgICAgIDkwLFxuICAgICAgMTI0LFxuICAgICAgMTM0LFxuICAgICAgNyxcbiAgICAgIDIwNixcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxNjIsXG4gICAgICA2NyxcbiAgICAgIDM2LFxuICAgICAgMjQ1LFxuICAgICAgMzMsXG4gICAgICAxMzksXG4gICAgICAxMjQsXG4gICAgICAyNDAsXG4gICAgICAxMTksXG4gICAgICAyMDQsXG4gICAgICAyMzAsXG4gICAgICAxLFxuICAgICAgNjUsXG4gICAgICAyNTUsXG4gICAgICAxMTcsXG4gICAgICAyNDgsXG4gICAgICA5MyxcbiAgICAgIDIyOSxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTNDhURFdOS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTDUrZFVDRUliRG9iNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianVRdHRveDFidWl5cFRSazdxbjI4eURwMW9OeVNhTEpXVGNOWTlQLzhrZWhTTUpHUjFuU0wwZ1QwZmhOSXdXQ3Fxaklaa2kvZHcwa29sMUlMZk0xREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3Z0dGptaDdpYVU5YUJ0Um5FV0tUL0FiRFE2M0gzL1c2enhyVEY2U3lUL3R4Zy9pT3Y2R2E4Y0s3d0JIaWFBREw0SFVsUUlTemxaZWVZNWtUTTBXamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTE4NTQxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQlJ0Tkh2UHV2ekxWRnQvdjdiWnh1OWxEUkVaZE9iRTVuL3FZZzhEY3NCbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDExNTkxNDE1NDVcIn0iCn0="  // PUT your SESSION_ID 


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
