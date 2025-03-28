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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_23_03_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNk5yL0pyaTAvanVjTWxvZ3cvQmtlSVdxY2NrT1JEZnkzZ0ZkQzl2K0h2MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXZVNkpnd29UeTJFXy1WcDFqZjBHUVwiLFxuICBcInBob25lSWRcIjogXCJjYmJmZTAzMi1jNGMwLTQwZDktYmFjOC0yMGI4YmRjOGYwZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTE0LFxuICAgICAgNjMsXG4gICAgICAxNjAsXG4gICAgICAxNDksXG4gICAgICAyOSxcbiAgICAgIDE4MSxcbiAgICAgIDM3LFxuICAgICAgMjAsXG4gICAgICAyMyxcbiAgICAgIDY3LFxuICAgICAgMTUsXG4gICAgICAyMjksXG4gICAgICAyNDgsXG4gICAgICAyMjgsXG4gICAgICAxMzcsXG4gICAgICAyMjcsXG4gICAgICAxNzAsXG4gICAgICAxODksXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDEyNSxcbiAgICAgIDIwMCxcbiAgICAgIDM0LFxuICAgICAgMTkxLFxuICAgICAgMjI2LFxuICAgICAgMzUsXG4gICAgICAxNyxcbiAgICAgIDIyMixcbiAgICAgIDE3NCxcbiAgICAgIDIzLFxuICAgICAgMTIsXG4gICAgICA5OSxcbiAgICAgIDE0MCxcbiAgICAgIDQ0LFxuICAgICAgMjE5LFxuICAgICAgMTMsXG4gICAgICA0LFxuICAgICAgMTEwLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFZSE1GTUdDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tENitkVUNFSS9ZbDc4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwM09kYkV4SlJpNG43NVBUVHIzSGJSOFNSeWhOV1JUQnBsVTdCcTMvSFZaaFJ0V3ZuWVVySzg1OStGa0paeFFXSFVyUjV6VS9EUkM4UGIzM3haQS9CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxenduemlvVEdQbVlidUpFUlVnMWVTUXU5SEJ4S3pUTkNYSWNWUjI5dktBbEJxTEo0cm8rRjVaRS9uQUR0VTdNK2tEeU5DUmhTYWI1RWNXY3B3SjFpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMTIxNDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1RnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvci8yK2wyTHlVOGh0QVhBWTg1WHhyQStScG9yaTZiSGJyQktsQ3JPVmRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjkzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
