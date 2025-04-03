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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_52_04_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlRGJxYkl0SDZIWjZub2ZnZTc0ZjBsZCtkN1dLd2gvenpUUjhNbU9UaFh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMzYxMzQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTUxRTM0OEFENzE4ODhGMEZEQTZBNzM4N0FGREExREVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQzNjcwMzE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAzNjEzNDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNjFDODkxMjUzODU5NkY1MTkwQUFFN0IzRDFFRUMwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDM2NzAzMTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTdVMjdqNDNRWG1rb1JickYwVVp2UVwiLFxuICBcInBob25lSWRcIjogXCIwMTVkYzRkOC02NjQyLTRkOWItYjdmZi04ZjA2ZDlhYzA3MzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTIwLFxuICAgICAgMjQ0LFxuICAgICAgMTI5LFxuICAgICAgMTgwLFxuICAgICAgMTIwLFxuICAgICAgMzgsXG4gICAgICA4NixcbiAgICAgIDIzLFxuICAgICAgMjU0LFxuICAgICAgNDksXG4gICAgICA1LFxuICAgICAgMTUsXG4gICAgICA4NSxcbiAgICAgIDQ3LFxuICAgICAgMTg5LFxuICAgICAgMTU1LFxuICAgICAgNzUsXG4gICAgICAxMDUsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTcxLFxuICAgICAgMTIyLFxuICAgICAgMTI2LFxuICAgICAgOTAsXG4gICAgICA4LFxuICAgICAgMjUzLFxuICAgICAgMTkxLFxuICAgICAgMjQ1LFxuICAgICAgOTUsXG4gICAgICA2NSxcbiAgICAgIDg3LFxuICAgICAgNjcsXG4gICAgICA4MCxcbiAgICAgIDIxMixcbiAgICAgIDkwLFxuICAgICAgMCxcbiAgICAgIDEyLFxuICAgICAgMTkxLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVYOUVaVDFCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDM2MTM0MjA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4ayKzaHNnPCdkJnwnZCI8J2Qg/CdkIgg8J2QjPCdkIDwnZCL8J2QiPCdkIrigbDCucKyIOqrguKDn/Cfh6bwn4e/4pml77iP8J+RkVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01USnZIOFFwSmk1dndZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjlJZnpjdFA3c2szRHdST0xnUThRb0tMYUtXaFFDdVBUNTk0bUhIMkJ3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDUzd5c3RsSERXam13RVRHLzhqeUZRY1JYREk5OWNFWWc0QzVHcVhtRXJ1N3NoYWtqZElPN0c0a291QVI5dUgySSswZmFERWp1YjRjVFpIYnY5YzJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoaWNOVmNDS0ZTVUc3SXlmTEg2djllYW9JUGhEYmhibmcvRUgxWVliZXlUbyt2L0o2MTM1THhWYUdKaDM3Vm03K0NzSFlYbllpNGFlTGRTc3F1N2xCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDM2NzAzMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZjVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mNS5qc29uIjogIntcImtleURhdGFcIjpcImk2bjFxVHBnV2FlT1RkU2tWSXNZQU9wbm9GR3VSdVlsVGt2NHZMVjBOV289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY3MzMwNzU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQzNjY0ODYxNTIxXCJ9Igp9"  // PUT your SESSION_ID 


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
