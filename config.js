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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_45_03_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRnVXhxWXNvWmZndnFPcGhGVFp5Sk13Vk1vVWxXbXd2SmM4Nk9oTCtRL0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIks5QV8zQkM3VEQtUjc2eW5MQ1JVVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjY2ZWI1YmUtM2NjYi00YjY1LTkwZjItZDZiODVjNjcxNWUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDAsXG4gICAgICAxMzksXG4gICAgICAxOSxcbiAgICAgIDEwOCxcbiAgICAgIDk4LFxuICAgICAgMzAsXG4gICAgICAxODQsXG4gICAgICA3LFxuICAgICAgMTIzLFxuICAgICAgMTU3LFxuICAgICAgODAsXG4gICAgICAxMjMsXG4gICAgICAxNjIsXG4gICAgICA1NyxcbiAgICAgIDQ1LFxuICAgICAgMTgyLFxuICAgICAgMTYyLFxuICAgICAgMTI4LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDE2MixcbiAgICAgIDE3OSxcbiAgICAgIDE0NyxcbiAgICAgIDE1OSxcbiAgICAgIDEzNCxcbiAgICAgIDcsXG4gICAgICAyMTQsXG4gICAgICA2MyxcbiAgICAgIDExNyxcbiAgICAgIDM0LFxuICAgICAgNjgsXG4gICAgICAxNDksXG4gICAgICAxMzQsXG4gICAgICA4OSxcbiAgICAgIDEzNyxcbiAgICAgIDY3LFxuICAgICAgMTk2LFxuICAgICAgNCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIMlM5WDVZWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKLzYrZFVDRUtLQmxyOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTlBiVndZRE5idXhXSEUzc2dSbUFiQWpZSk4xOHRQc1BhT2tiRm9mQ0tjYndkMmFSc2MwSFdsWEJFRXVGZW5DYldFMFQ2WkJNMFA0NkNaZ21kRVNrQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibXo4SzBlREhnOS93YWZlSExEQXpndlBTZ3JLRHlhNkpkSTRiZkl4RVlwWWYyR0I0dmtPWGVrNFBpY3F5UGdPN0VwamxueS8rOEUwWllGamhLYm9yaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzA5MzkyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtUZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1RnLmpzb24iOiAie1wia2V5RGF0YVwiOlwib3IvMitsMkx5VThodEFYQVk4NVh4ckErUnBvcmk2YkhickJLbENyT1ZkRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
