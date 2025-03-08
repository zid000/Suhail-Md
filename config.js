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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_04_03_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInE2NDV2S1pGZXIxeUw2RG40MTUrTEwxYzEvOXByb0RNR1JMZ1V2VjRlNWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBRT1BEQV9QUlZDNlFvRDl6YUNjSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDVlNGYwZTItZGZkNC00M2UwLThiODUtZjU3Y2JmNTFiZmU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTUwLFxuICAgICAgMTU0LFxuICAgICAgMjA5LFxuICAgICAgMTU1LFxuICAgICAgODMsXG4gICAgICAyNixcbiAgICAgIDEyMixcbiAgICAgIDcxLFxuICAgICAgMjA4LFxuICAgICAgNjEsXG4gICAgICA2NCxcbiAgICAgIDAsXG4gICAgICA2OSxcbiAgICAgIDIwNSxcbiAgICAgIDQ3LFxuICAgICAgNDQsXG4gICAgICAyMjQsXG4gICAgICAxMzcsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAyMzEsXG4gICAgICAxNTcsXG4gICAgICA0OSxcbiAgICAgIDI0LFxuICAgICAgNTksXG4gICAgICAxMjQsXG4gICAgICAxNTYsXG4gICAgICAxOTEsXG4gICAgICAxNSxcbiAgICAgIDEyNCxcbiAgICAgIDExMixcbiAgICAgIDEyMCxcbiAgICAgIDQ3LFxuICAgICAgMTA4LFxuICAgICAgMjUyLFxuICAgICAgMTkyLFxuICAgICAgNDIsXG4gICAgICAxOCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZSlg4Qzc2WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbjUrZFVDRVArNHNiNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNkY5d0h2alNOWlVQR0xHOS9mODlYdUd6b1Ryb3pTSUJ1ekZDMjBLTFZFeHVKc0VHOU9aSmNjMERWT3hUSWNPUlc4bGJMcWUyQ0R3eWZqN2lYTHFrRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1ROcHNJV1p5Tyt0RTgrd0pzYVViZUFIdlBOWVlJTk1OT0lOWW8vcUdST1FDOVkxK1FIbDlZTHRqWGZhb3dXZisvb3lpcDlGS2ZuVi9seEpkRlVrQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTQ0NjI3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajYvWVBoTytvUStmVm5rUTE1VHlPZlllVDIzcWNDdE1sRE42cVh6TmRGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
