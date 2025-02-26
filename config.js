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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_26_02_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVUWUJUWFJNUng3bVZveUpCT09mSUIydHRNekc2L0Fzb2gxNzhkcjhwM0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdqaTBZWlZ5UzNDVmQyTDRJcjdaZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQ1ZDNmZWYtMTc0Ni00MTlhLTg2MjgtMjY3NzIwNzcyYjlmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDI0NyxcbiAgICAgIDE3NSxcbiAgICAgIDE4NyxcbiAgICAgIDM4LFxuICAgICAgMTcsXG4gICAgICAyNDUsXG4gICAgICAxMTksXG4gICAgICA5OSxcbiAgICAgIDEzLFxuICAgICAgMTk5LFxuICAgICAgMTcyLFxuICAgICAgMTYsXG4gICAgICAyNCxcbiAgICAgIDE4MCxcbiAgICAgIDIyOCxcbiAgICAgIDc4LFxuICAgICAgMjQzLFxuICAgICAgNzcsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAxMDQsXG4gICAgICA5MSxcbiAgICAgIDY4LFxuICAgICAgMjM5LFxuICAgICAgMTMwLFxuICAgICAgMTcyLFxuICAgICAgNzUsXG4gICAgICA2OSxcbiAgICAgIDIwOCxcbiAgICAgIDg1LFxuICAgICAgMTQ4LFxuICAgICAgMTI5LFxuICAgICAgMTkxLFxuICAgICAgMTM3LFxuICAgICAgNjgsXG4gICAgICAyMDUsXG4gICAgICA4MyxcbiAgICAgIDY2LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1RKNE1DN0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxuXFxu8J2RrfCdkLTwnZGAMPCdkYjwnZGGIFxcbvCdkoHwnZGW8J2Qt/CdkZYg8J2RtPCdkY7wnZGZ8J2RlvCdkL5cXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkQ1K2RVQ0VPeXMvTDBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhpV29nUzkzUEFqMDZxOVhyK1d0TkFtTDJ5V3Vvd0JiQ0VaK3A2cjVmanBxU0VtSkdvYmFLS29xNUEwOG1WcUJxNDV5b1dlYUNPenpBdkcxczJGRkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNDRzBvenFva09FdGI2OXEzMzI5UnhSK0tlWXVIM1QzL0pNbklWaVpDUlh4aTMwczBJRm5xOFZIYlozN0MyeVJ4SndKaEZVVlBkbDc1bGQ4RjhneEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA1NzYzNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Udy5qc29uIjogIntcImtleURhdGFcIjpcIkVoVWxUNVVkcGgzaEttVlpKMHRkenFtN3BoWTI3V2JHdWRzUDhucjFyM0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODYzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
