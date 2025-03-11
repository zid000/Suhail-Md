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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_35_03_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3czdQZ0Z5SEZIVVV1NUZnd0pQcC9oWk5zbWhORVdoSzNzSlVsOEVhRHdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMzYxMzQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjI1Qzk4MkFFMkY2OUI3N0EwRDEyNTMzRTVGNTlCRDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQxNjg1Njk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAzNjEzNDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzFDNDk4QjBBN0RGQjYzNzRDMEM0MzU0RTNFNkRENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDE2ODU3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekctQm1aZjNTQ2VZekFneDVkZm1EQVwiLFxuICBcInBob25lSWRcIjogXCJjY2I0MTYzNy05NzMyLTRkNmItYjM5Yi1kMmQwMGE3MzZiOWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjUyLFxuICAgICAgMTYwLFxuICAgICAgMjA4LFxuICAgICAgODMsXG4gICAgICAxMDUsXG4gICAgICAzOCxcbiAgICAgIDE4NyxcbiAgICAgIDM2LFxuICAgICAgODIsXG4gICAgICAxNDQsXG4gICAgICA5MyxcbiAgICAgIDE2NixcbiAgICAgIDEyOCxcbiAgICAgIDY4LFxuICAgICAgNzMsXG4gICAgICAxMzQsXG4gICAgICA3OCxcbiAgICAgIDE4MyxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxNzUsXG4gICAgICA0NyxcbiAgICAgIDE3NSxcbiAgICAgIDE5MCxcbiAgICAgIDIzNCxcbiAgICAgIDEwNyxcbiAgICAgIDE5MSxcbiAgICAgIDE1LFxuICAgICAgMjMzLFxuICAgICAgNDgsXG4gICAgICAyMjIsXG4gICAgICAyOCxcbiAgICAgIDI0MSxcbiAgICAgIDIxOCxcbiAgICAgIDI2LFxuICAgICAgMTIxLFxuICAgICAgMTU2LFxuICAgICAgMTg2LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZWkIyQ01UXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDM2MTM0MjA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4p2l77iO8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QgPCdkIvwnZCI8J2QiuKBsMK5wrLwn4em8J+Hv+KZpe+4j/CflI/impTvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTEp2SDhRdW9mQXZnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk45SWZ6Y3RQN3NrM0R3Uk9MZ1E4UW9LTGFLV2hRQ3VQVDU5NG1ISDJCd1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlhaWExjbk1yeGU3NlY2N1hqOVJvZklMSGN4VWE5ZmY2M2hPQStVbXRzRmxhVE1qOFIxUVBkR1AvTUVCbkpkV0V4VzNNaU4vR0cvQWU4MHJDN0NLQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUw4Q2ZOeXFSYTVGNSs4N1hjTkV4N2FKY0FkVklpTGlZUFozR25zWDF6M0FxMzA0a1JlVUJuMjMxU3RFVjRLQ21hNiszTE1ZY0ZENWhLSkRVaFVnZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAzNjEzNDIwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxNjg1Njk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0k0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPSTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKYnhZMjhGcFVhM1YzaG9NVHBFWlN1NVBjSG5nMFA3RjZROE10Y1NMdEhRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NzMzMDc1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQxNjg1Njk3MzUwXCJ9Igp9"  // PUT your SESSION_ID 


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
