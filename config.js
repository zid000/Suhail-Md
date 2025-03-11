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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_21_03_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxUR1NxOTdaRWw3RUpmUHdzZ0JTNDJvaWJaNkRnMUh4NDlpMG12S0pMdzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhKdkkyaldSVGpXOC15azRUSkI0NkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y1N2VjMTMtZDNjZC00MDg3LWFmNDItZjUyNTI3ODU0ZTQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDIyLFxuICAgICAgMjIxLFxuICAgICAgMjE4LFxuICAgICAgMTY2LFxuICAgICAgMTgyLFxuICAgICAgMTE5LFxuICAgICAgMTkwLFxuICAgICAgMTI2LFxuICAgICAgMjUsXG4gICAgICA5MCxcbiAgICAgIDEzNSxcbiAgICAgIDk1LFxuICAgICAgMTg4LFxuICAgICAgMTkwLFxuICAgICAgOTYsXG4gICAgICAxMzcsXG4gICAgICAxMTgsXG4gICAgICAxODMsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgNTUsXG4gICAgICAyMjMsXG4gICAgICAyMjMsXG4gICAgICAzMixcbiAgICAgIDExNyxcbiAgICAgIDY5LFxuICAgICAgMTk4LFxuICAgICAgNDIsXG4gICAgICAxMTEsXG4gICAgICA0MixcbiAgICAgIDkzLFxuICAgICAgOCxcbiAgICAgIDE5MixcbiAgICAgIDIwNSxcbiAgICAgIDE3OCxcbiAgICAgIDcyLFxuICAgICAgMTYxLFxuICAgICAgMTQsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRN0E3S1gzUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo5MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNzUrZFVDRUlDRXZyNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRkRlODAvclFlMHdocm96eUpvbnNPRFEyMXlkbHBsT0R4anR5T05kVFZHOUM5dG5PS2hJK21VRHRDcWphNFdKaVRsenJMdE9UeWNCRGJBcnVEc3JaQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSktBOVJ3RlpSRDdKTHBqb0doRGlwbzFNRnVWZ0VUY1orVEFzZmVsWDhOdTZOYzBxRXRURnYxK2NKZDRIOFhtVm1wKzRoakxSelZoWTRQMGQyb09hakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTY1MjQ4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ3pkLzNBWVlkNnYzYVR0Qll6anlSWmVpb0NQMjM4WTlwbk9rcFQrZ09Tbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDE2MjgyMDAyOTlcIn0iCn0="  // PUT your SESSION_ID 


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
