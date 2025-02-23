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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_36_02_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1nRURISzJaM1gweEE2aW9qamFHOElNc2RBYm5DM2RqbnNhVHlXcm9HSXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVjbG4yNmdnUnlTRzVzNkFjc0RtM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjljNGQ4OGQtZjY3ZS00MGQxLWI1ZDAtYWZhMGRiNjFlYmE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTAyLFxuICAgICAgMTg2LFxuICAgICAgMjExLFxuICAgICAgMTQ4LFxuICAgICAgMTM0LFxuICAgICAgMjM1LFxuICAgICAgMTE4LFxuICAgICAgMTc0LFxuICAgICAgNCxcbiAgICAgIDMyLFxuICAgICAgMTM0LFxuICAgICAgOTYsXG4gICAgICA1OCxcbiAgICAgIDIxMixcbiAgICAgIDkyLFxuICAgICAgOTEsXG4gICAgICA5MixcbiAgICAgIDEwNCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE5OCxcbiAgICAgIDk4LFxuICAgICAgMjEzLFxuICAgICAgMTg5LFxuICAgICAgMTMwLFxuICAgICAgMjQ1LFxuICAgICAgODksXG4gICAgICAyMjUsXG4gICAgICAyMTEsXG4gICAgICAxOTUsXG4gICAgICAxNzcsXG4gICAgICAxNzUsXG4gICAgICAyNTEsXG4gICAgICAyMSxcbiAgICAgIDE5NixcbiAgICAgIDI0OCxcbiAgICAgIDgwLFxuICAgICAgMTg5LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFdHNlBMVEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXY1K2RVQ0VQajI2YjBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndFOTBkTllzaWtTMDVDVS9jam1BeW10U1BCTUltcWJIZGMwMW1yd3NwejBIdERISFRLNGdiUFhWQ3NqbU9qZzlwdW9XaXAxTDd4VXdoNHMrQnJDb0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVKY1J1bmJqVVo0Q2R5ZjB0MmkyR2J4U0pGZitMQWlJazhLTzBLREMrM3FSSmM1VE9GS2x4VndGOTg1ZXVrdWxwamd1dngvSEVQS0dzYWlYQzVwcWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDAyNzQ1NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIS2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhLaC5qc29uIjogIntcImtleURhdGFcIjpcIkZ3QWpoUk9samVtays3RmMweUx6dmRLWGtwRUFOTVgrdTdGNFhXVU1RK1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODU4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQwMjc0NTI3NDkyXCJ9Igp9"  // PUT your SESSION_ID 


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
