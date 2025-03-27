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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_06_03_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrUWxYK0xTODlJUStOQU5DUllUNE4wRU9vMXljYSt5eGcxV0doQ0xqZFJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmUW9xcm1TWlQ5S1lYYkhmSE90YkxRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzYjM0NTMxLWViNDktNGE5NC1iOTU1LWRkZDkzMTFiMmI3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAyMjcsXG4gICAgICA1LFxuICAgICAgNSxcbiAgICAgIDEyMSxcbiAgICAgIDkwLFxuICAgICAgMTUxLFxuICAgICAgMjE5LFxuICAgICAgMTQ4LFxuICAgICAgMTQxLFxuICAgICAgODgsXG4gICAgICA5NixcbiAgICAgIDUxLFxuICAgICAgMTA4LFxuICAgICAgNjcsXG4gICAgICAyNDEsXG4gICAgICAxMzIsXG4gICAgICA3NixcbiAgICAgIDE2MSxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAyMjEsXG4gICAgICAyMzIsXG4gICAgICAyMTgsXG4gICAgICAxMzgsXG4gICAgICA4OSxcbiAgICAgIDEzLFxuICAgICAgMTA5LFxuICAgICAgMTYzLFxuICAgICAgNTUsXG4gICAgICA0NyxcbiAgICAgIDc5LFxuICAgICAgODAsXG4gICAgICAxNCxcbiAgICAgIDQ0LFxuICAgICAgMTQzLFxuICAgICAgNTUsXG4gICAgICAxMDcsXG4gICAgICAxNjksXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5NkpWRVhOWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNzYrZFVDRVBDc2tyOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieStFUEtYR1RrOUFzWWZabnhuVlUrWU1BcUoyMjRoR3IyQ0psUjI5M0UwdWMvcWQ0VUNsQmxZWGtYbjhBVlpJb3IvRDNoMkQvakpjdWFjbTdubW53Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV3pVeXhQL01pMWEyKzJFMFowcEtncHNuMXlvZnF0UlNuWjVNQUNabHlIWVRxcnNoYVdveE5ZMGhCM3ExWnVLTHFwZVJOb1g1a3RObEc3WXZjZCswRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzAzMzk3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtUZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1RnLmpzb24iOiAie1wia2V5RGF0YVwiOlwib3IvMitsMkx5VThodEFYQVk4NVh4ckErUnBvcmk2YkhickJLbENyT1ZkRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
