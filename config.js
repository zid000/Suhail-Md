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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_59_04_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvVllScW96WFNCNEE3M2ZrZVIrK0MyOWFmZEVEbWM5S291ZTdrMGZCbmd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMzYxMzQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTc4RkY3Qjk5MjA1MDQ0NjZCMTM1OERFNzVGNjJENTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQzOTIyNzc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNHOUs3SjFpVEY2dFFsb3RKYXJMSlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNmOGQ0ZTQtODc5MC00MTIyLTg0ZGYtNGZiNGQ1MzY1NzEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgODIsXG4gICAgICAxMixcbiAgICAgIDM4LFxuICAgICAgMTEwLFxuICAgICAgNTEsXG4gICAgICAxNzUsXG4gICAgICAyMDAsXG4gICAgICA5MCxcbiAgICAgIDksXG4gICAgICAxNzAsXG4gICAgICA4OSxcbiAgICAgIDE2MyxcbiAgICAgIDQxLFxuICAgICAgODQsXG4gICAgICAxNjcsXG4gICAgICAxMzgsXG4gICAgICAxMjYsXG4gICAgICAxOTUsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICA1OCxcbiAgICAgIDE4OSxcbiAgICAgIDIyMCxcbiAgICAgIDE0MSxcbiAgICAgIDIzMixcbiAgICAgIDgsXG4gICAgICAxMTgsXG4gICAgICAyNCxcbiAgICAgIDk2LFxuICAgICAgMzgsXG4gICAgICAyMjMsXG4gICAgICAyMzQsXG4gICAgICAxNTIsXG4gICAgICAyMTEsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDIxNyxcbiAgICAgIDExNCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFWOEFBVDJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDM2MTM0MjA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4ayKzaHNnPCdkJnwnZCI8J2Qg/CdkIgg8J2QjPCdkIDwnZCL8J2QiPCdkIrigbDCucKyIOqrguKDn/Cfh6bwn4e/4pml77iP8J+RkVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mSnZIOFF6Y3pJdndZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjlJZnpjdFA3c2szRHdST0xnUThRb0tMYUtXaFFDdVBUNTk0bUhIMkJ3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkbC9qckMvOVlzYUlGelRGWUluVWN4UGhKM1huNms1MWxSY3Q2TldzR0YwRmNTU3d0VTdBZC8vRktLMlhscU5pRlNCTlh4NkxOeFEwNmRKWW84c3dBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzZ2E1RjlRVVdVYkVXT3dyV3hzV1lHby9iUHhCeU5YcjdXb2pBVTRxZVFpSmpvSjR3Z1hJc1pCM1RTZ0JxMUdpY2gxTEs4aFlGTm5XZ3FmSThlUnlBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDM5MjI3NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZ0FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1nQS5qc29uIjogIntcImtleURhdGFcIjpcIm5EY0tJN3FvZlRMbDlpdTd4YUtzU2NaL29RajdNdDIzekZGMDlYTHp5RFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY3MzMwNzU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDM5MjI3NzUxMjBcIn0iCn0="  // PUT your SESSION_ID 


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
