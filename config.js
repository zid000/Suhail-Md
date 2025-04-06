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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_10_04_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZJbEh2M2NXTEtFdzRkRXovdjl2empMWWpYeW9vdVFrTEpqN3dzVDkzSnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpTaEV2SXZmUzQyQUJjbXF2S0t4Y0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y5YzQ2YjAtMzM5MC00YTI4LWFhMjktMDJkYzg1Zjk2MzBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDIwMyxcbiAgICAgIDE4NyxcbiAgICAgIDIyLFxuICAgICAgMjIzLFxuICAgICAgMTg4LFxuICAgICAgMTYwLFxuICAgICAgMjAxLFxuICAgICAgMjQxLFxuICAgICAgMjA5LFxuICAgICAgMTUsXG4gICAgICAxMTUsXG4gICAgICAxNTYsXG4gICAgICA3MixcbiAgICAgIDE3MixcbiAgICAgIDgwLFxuICAgICAgMTIsXG4gICAgICAxOTYsXG4gICAgICAxODQsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTU2LFxuICAgICAgMjA2LFxuICAgICAgMjEwLFxuICAgICAgMjQ4LFxuICAgICAgMjEzLFxuICAgICAgMjI1LFxuICAgICAgMTcxLFxuICAgICAgMTUzLFxuICAgICAgNjAsXG4gICAgICAyNyxcbiAgICAgIDEwMixcbiAgICAgIDE1MixcbiAgICAgIDE4MSxcbiAgICAgIDE2MixcbiAgICAgIDE2NyxcbiAgICAgIDE5NCxcbiAgICAgIDY0LFxuICAgICAgNzIsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1SDZUNTREMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWDYrZFVDRU0zT3lyOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3AxOHFEeUZYeThWekFiV1V5eUZZOXdSWUMzRWQwY2hhWDAwNi80NGNnaGxoSXRtZEdLNXMvdXNnNysvNmQxN1krYTBkZUtCRGhNK1pXZkt3b2FLQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMFo5K0JWM2NlcElyWlh2NGVvQVpRelM5cXdDUlpIeGEwN1orUzFORTJVTGxRVFRFUUVEU2JQTjE2dm1zNWxOR0VvcS8zVitBQklpMFlreklIQWRVQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Mzk1NTgxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
