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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_15_04_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhRFFCMDlRVm90UEZ2aXhvRG5WMjhoR1cwZlBsOHQ1RldMeFFYaXB5R2I0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMzYxMzQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkUxQUJGQTBERDVDQkI0QzM5NDIyNzBFQkI5MTU3RjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQzNzAwNTU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAzNjEzNDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMEIzNzlCMUY4MjNCMkY4QUY0RUE3MkFCNjc4QUY0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDM3MDA1NTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVNsd1M3ekpUNnFNVmM5c0JrRmVVQVwiLFxuICBcInBob25lSWRcIjogXCIwYjIyMmNhYS0zNjY3LTRkYWMtODZlMy02MmE5ZWJhM2ExNjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyNDUsXG4gICAgICAxNzksXG4gICAgICAxMTMsXG4gICAgICAyMzgsXG4gICAgICAxMzksXG4gICAgICAxODYsXG4gICAgICAyMzksXG4gICAgICAxNTUsXG4gICAgICAxMTAsXG4gICAgICAxOTUsXG4gICAgICAxNDMsXG4gICAgICAxMTMsXG4gICAgICAxMTEsXG4gICAgICAyOCxcbiAgICAgIDg0LFxuICAgICAgMTM5LFxuICAgICAgMjI5LFxuICAgICAgMjE5LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNzUsXG4gICAgICAyMzMsXG4gICAgICAyMzYsXG4gICAgICAzLFxuICAgICAgNTksXG4gICAgICAxLFxuICAgICAgMjE5LFxuICAgICAgMTUxLFxuICAgICAgNTIsXG4gICAgICAyMDgsXG4gICAgICAxMTcsXG4gICAgICAxMDQsXG4gICAgICAzOSxcbiAgICAgIDE4OSxcbiAgICAgIDIxNixcbiAgICAgIDI4LFxuICAgICAgODIsXG4gICAgICA5MixcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk44RzlZM1Y1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDM2MTM0MjA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4ayKzaHNnPCdkJnwnZCI8J2Qg/CdkIgg8J2QjPCdkIDwnZCL8J2QiPCdkIrigbDCucKyIOqrguKDn/Cfh6bwn4e/4pml77iP8J+RkVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YSnZIOFF4SVM3dndZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjlJZnpjdFA3c2szRHdST0xnUThRb0tMYUtXaFFDdVBUNTk0bUhIMkJ3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4Rm5jZ292cWc4QWhLQ0l3dzNlZVlsZXVIRXMwV2dDQlRTRTBpOGdDUzJ1TDh2RmhUb2RNTTBmOVlaTnFYT2d5QVJGYk1UMDNKMWt5VUJDck9RKzhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNeWxOVFRocy9LWXlRUkNQOXdYOXlIYi83d1k3ZXJVV2ZINTlCb0RQcUVDdHdkMkV0VnhhZkJBelJjM3A0bjRVcFlkM0ZrOFo1eXlJL0JnN0RPeEVoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDM3MDA1NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mOC5qc29uIjogIntcImtleURhdGFcIjpcImZKS1JtVXFwVnBON1pBT0p5bG96RE5IS1hBcnNiVGpMZWQzdXNsVFVraWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY3MzMwNzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDM3MDA1NTYwMTRcIn0iCn0="  // PUT your SESSION_ID 


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
