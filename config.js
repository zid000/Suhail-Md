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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_59_03_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkZlFMTWVVQ0JTeHpYd1VTdGFEd1RvOFNnYjg2a085NEZQdnRLQ3dwRkFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0NzExNjY4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUNFNjNGNDYzNkUxOUI3MEYxNUQyMDBCMkQ0RTZGNURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQyNTE1MTEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVQdVk1dTNaUjVTV0U2amtueHc5dmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWQwMmIwMjYtZjk0Yy00MTA4LWJiYTEtNWQ2ZTQ2YjZkYzBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE2NSxcbiAgICAgIDI0NixcbiAgICAgIDE4MixcbiAgICAgIDE2NyxcbiAgICAgIDE1MCxcbiAgICAgIDI2LFxuICAgICAgMTQwLFxuICAgICAgMTEzLFxuICAgICAgMjUzLFxuICAgICAgNixcbiAgICAgIDEyMixcbiAgICAgIDIxLFxuICAgICAgMTg4LFxuICAgICAgMTI1LFxuICAgICAgMTU0LFxuICAgICAgMTc5LFxuICAgICAgMTU1LFxuICAgICAgMTg2LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMjA1LFxuICAgICAgMTI4LFxuICAgICAgOTMsXG4gICAgICA5MixcbiAgICAgIDE5MyxcbiAgICAgIDIyLFxuICAgICAgMTA4LFxuICAgICAgNzksXG4gICAgICAxMjIsXG4gICAgICA3OSxcbiAgICAgIDMxLFxuICAgICAgMjA4LFxuICAgICAgMTAyLFxuICAgICAgMjUsXG4gICAgICAyOSxcbiAgICAgIDgwLFxuICAgICAgMjQ2LFxuICAgICAgMTYyLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhaWUY5MVAyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqNitkVUNFSnZYOHI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqNWpJVTNOMVFXQ2VWZ3dydGJYT3l3L25IZUt5eWswTS9pMkg3NCtHRUlZdXRkYkozQ0VCWEZoZFZPTlF3ZDdvZUZVMXlveGJpZ3FFK29OYTBnZktDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmNGpIaHRlTDdRUTJISGdlcU5MamxYak9GeWVFRGRVMVUzZ1E3b3QvcmRZSHg5Ym5ia0locmtBVWp5RS9meDNKMzFLZDV4L1ltejc2UFJPTEUrQ1ZpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyNTE1MTA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZlAuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
