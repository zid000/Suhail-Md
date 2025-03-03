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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_11_03_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUNOR3FVQ1dyTWNnODViRjFHaTFSL0huWDhlUTBhdVZTUE9WT0ovTE42Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0NJSEJrczBTUC1jVTNnWjFOalhSUVwiLFxuICBcInBob25lSWRcIjogXCJhNDZhYjU1YS1mOWZmLTRkODctOTk5OS00YmI0YzkxN2YzYjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyNTMsXG4gICAgICAyMDcsXG4gICAgICAzNCxcbiAgICAgIDI0MCxcbiAgICAgIDE2NyxcbiAgICAgIDE2LFxuICAgICAgMTQzLFxuICAgICAgNjIsXG4gICAgICA4NCxcbiAgICAgIDksXG4gICAgICAxNjksXG4gICAgICAyMzMsXG4gICAgICAxOTIsXG4gICAgICA3MyxcbiAgICAgIDIyMSxcbiAgICAgIDQwLFxuICAgICAgODEsXG4gICAgICAxOTIsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDEyNSxcbiAgICAgIDUzLFxuICAgICAgMzMsXG4gICAgICA1OSxcbiAgICAgIDEyNyxcbiAgICAgIDEyNyxcbiAgICAgIDcxLFxuICAgICAgODgsXG4gICAgICAxMDUsXG4gICAgICAxODIsXG4gICAgICA4NCxcbiAgICAgIDIxNCxcbiAgICAgIDQ3LFxuICAgICAgMjEwLFxuICAgICAgMTAsXG4gICAgICAyNSxcbiAgICAgIDIyNCxcbiAgICAgIDEyLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNaN0M1UTk5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zNStkVUNFS21zbGI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0VHFHRGNGRHo2OHkwY1VuaDVDeHRzQmgxOW5WQ2RsRSsrOEc1ck9aaHRuRGRkZldVSHh1QjNRNFNqblpsOHNLN2tSYVU3TnY0bDNxL2NvQi9WenhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrd1JiOHcybDBPYWtEU0gyeTBwNFRRMlhjTDZvR0QyMzRBUHdmYitDYWN2dWNZNXRBaEd1aWVxY1RubVM5QStDRnR3L050NTBUMFB5SXVVT0hrUmlDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwOTg1OTAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGUzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFcVJaYjNBVHNMUEtJdmJIMWhxSWpaeFhsL084emp2cWlYYjVUVmphNklVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
