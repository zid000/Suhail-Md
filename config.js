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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_35_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWYzhGSUxuSHZQZUwybTVlYjVxdEQ2QUhOTzM4MG9ka2hYSnBVSXRXeDFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0NzExNjY4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjgxNjczNzhGRDFGOUVFQTg5ODJGNjA5NTQ0MDk2QThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQzMjU1MzQwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInB1MjA2ZlFRUTh5UkNtRXFkak5yZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjMwMDExYmQtNjc4Ni00ZTliLWFmMzUtZjBiOTBhYzkzYzgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTM1LFxuICAgICAgNyxcbiAgICAgIDI2LFxuICAgICAgMzIsXG4gICAgICAxNDMsXG4gICAgICAxNzcsXG4gICAgICA4NCxcbiAgICAgIDE4NixcbiAgICAgIDQxLFxuICAgICAgMjMxLFxuICAgICAgMjQ4LFxuICAgICAgMTMzLFxuICAgICAgMTUwLFxuICAgICAgMjI4LFxuICAgICAgMTc1LFxuICAgICAgMjAwLFxuICAgICAgMTI4LFxuICAgICAgMTYzLFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIyNSxcbiAgICAgIDE0NCxcbiAgICAgIDIyNSxcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgMjQ0LFxuICAgICAgMTg5LFxuICAgICAgMTcxLFxuICAgICAgODEsXG4gICAgICAyNDQsXG4gICAgICAyNDgsXG4gICAgICA2MCxcbiAgICAgIDQ3LFxuICAgICAgMTU2LFxuICAgICAgMjIxLFxuICAgICAgMzQsXG4gICAgICA1OSxcbiAgICAgIDIyMSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQktBMUtXS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZjYrZFVDRUtIdW43OEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicTNibC9GWDBwdEIyczBTTUZySERESnpibGZUeHFjTzVrd0VINXhVSFJ2b1phbDE4emhMZFFVOXBIWXlZK3Y0bk5zNXZ2RjBHbnVTYU1xSjV2NW5kQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV25CWjFXeG0yYmdFQlEzTlovMzZrU0E3c1lMTnJTZkdQTExXbTJ1ZXNNTy85M29UdDZya2thdTJhRi9OS21ObU1yWEwzL1NQMkg2RzBubU9aZGZqaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzI1NTMzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpNelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk16Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0dvRlhHNGdRRjVhWmdHRENBT3Q1N25RR3ZJdEhDU3NxNXRGbStxc1phWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
