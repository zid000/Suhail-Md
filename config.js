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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_44_03_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NSxcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSno4U0JKeC8vM095R0M4WTlIeVFoVW9QOGtteE1yNzhtcHo0OHZzMUwvST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFhJOVRmSk5SZ0tPWnJXNVNubUJBUVwiLFxuICBcInBob25lSWRcIjogXCJiMTI0MTc3My02ZDMxLTRmOWMtYTgyNy03YjQ2ZDZlODAzMTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgNTYsXG4gICAgICAxNDMsXG4gICAgICA2NixcbiAgICAgIDIwOCxcbiAgICAgIDEyOCxcbiAgICAgIDE2LFxuICAgICAgMTA4LFxuICAgICAgMjQsXG4gICAgICAzOSxcbiAgICAgIDgzLFxuICAgICAgMTk4LFxuICAgICAgMjQsXG4gICAgICA4OCxcbiAgICAgIDIsXG4gICAgICA2MCxcbiAgICAgIDMwLFxuICAgICAgMjM5LFxuICAgICAgMTI1LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTQ3LFxuICAgICAgMTc0LFxuICAgICAgMTkzLFxuICAgICAgMTI3LFxuICAgICAgODIsXG4gICAgICAxNTIsXG4gICAgICAxODcsXG4gICAgICAxOTUsXG4gICAgICA1LFxuICAgICAgMTcyLFxuICAgICAgMzAsXG4gICAgICA1NCxcbiAgICAgIDE0NyxcbiAgICAgIDIyNSxcbiAgICAgIDE0OCxcbiAgICAgIDIxNyxcbiAgICAgIDc1LFxuICAgICAgMTE3LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRCSko0VFo2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2NitkVUNFTmYyOWI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3dC92Sko3eUlabk04VTNxdXBDVHVEUklCVEF4V2lqd056ZmZ0Sys3VFZSTHd2dVd5cFdzbTlxR0lBdXFkMW94NjNHVUhrSStJVnVHSDFCdkw5eGxDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnM3Q5d1VpUVI0MTFTSVl6MUdBUDBkdFhjaGZaVitsbWR4S1RVd24xVHFSVHJnK3hHZXhJTDFud1NNek91UkZnL3RRa2c5ckxMeXdwenBaSVVYVXFDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyNTY4Mjg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqNi9ZUGhPK29RK2ZWbmtRMTVUeU9mWWVUMjNxY0N0TWxETjZxWHpOZEZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
