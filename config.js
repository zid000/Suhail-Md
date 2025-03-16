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

 
global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_42_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi8yV2FNZnJuSUxGUHhJSTl1VmU1andXSzkvZlp4ZHRiZFFmWG50eWw5YWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5xNk5KdVZzU0RxN19IOXRVdFNoUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQyNTljMTItMjkyMS00MzNjLWIwMTctMmQwMTllMDI4NjNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDQ2LFxuICAgICAgMTc2LFxuICAgICAgMjAxLFxuICAgICAgOTUsXG4gICAgICAyMzQsXG4gICAgICA0NCxcbiAgICAgIDIwMixcbiAgICAgIDIyMixcbiAgICAgIDE2OSxcbiAgICAgIDEzLFxuICAgICAgNTIsXG4gICAgICAxNzAsXG4gICAgICAxNzksXG4gICAgICAyMixcbiAgICAgIDI3LFxuICAgICAgMTUsXG4gICAgICA5MyxcbiAgICAgIDYxLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDExNyxcbiAgICAgIDIwMyxcbiAgICAgIDE0MyxcbiAgICAgIDE0MCxcbiAgICAgIDE4OSxcbiAgICAgIDExMyxcbiAgICAgIDEzNCxcbiAgICAgIDExMCxcbiAgICAgIDg5LFxuICAgICAgMjM3LFxuICAgICAgMjIzLFxuICAgICAgMjE5LFxuICAgICAgNDIsXG4gICAgICAzLFxuICAgICAgNzgsXG4gICAgICAyNTEsXG4gICAgICAyNTUsXG4gICAgICA2NCxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLMzU0ODlTQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHY1K2RVQ0VJcWIzTDRHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVrNjc1dktZV3FOVXNsdFdhRmlGNDdraUl1ZUJ5RVl3WVk0UElIMHd6akdoaWwxdWV1ZzN1cExuakIvaGdEWVcyOEVZYXgzU1cxVnM4YzJyajh0dkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZOamYwQThZa1JiZVlXTksrQnlWWnVDVFAwd2FYenBqZjZqb09CbnhLTURhTWhLY2VYVjE0UGt2Q3U2ZEhZR2l2ZUtuWlRVcVlSSW9PZVBEN2RUL0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjE0Njk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajYvWVBoTytvUStmVm5rUTE1VHlPZlllVDIzcWNDdE1sRE42cVh6TmRGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
