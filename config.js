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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_14_03_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRFF5RFFXRzg1TXpJSVdFekRhT3dNRUVwVDJYRTcvWnRUM3ExQmV2VmFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiR2JSTDJkUlJLV185bnRHWWJoakRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlMDE1MzExLWQ0NmMtNGNhZC05NjBjLTg3NDk2NWVkMGVkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDEwLFxuICAgICAgOTIsXG4gICAgICAxNjUsXG4gICAgICAxMzQsXG4gICAgICAyNTEsXG4gICAgICA5MSxcbiAgICAgIDIwNCxcbiAgICAgIDE3LFxuICAgICAgMTgwLFxuICAgICAgMTY2LFxuICAgICAgMTA4LFxuICAgICAgMjU1LFxuICAgICAgMTMsXG4gICAgICA1LFxuICAgICAgMjIxLFxuICAgICAgMjEsXG4gICAgICAyNDYsXG4gICAgICAyMjYsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDU2LFxuICAgICAgMTg1LFxuICAgICAgMzAsXG4gICAgICAxODIsXG4gICAgICAyMDMsXG4gICAgICA0MixcbiAgICAgIDI1NSxcbiAgICAgIDE3LFxuICAgICAgNDIsXG4gICAgICAxLFxuICAgICAgMTEzLFxuICAgICAgMTksXG4gICAgICAxNzUsXG4gICAgICA2OCxcbiAgICAgIDE5MyxcbiAgICAgIDQ1LFxuICAgICAgMjA2LFxuICAgICAgMTYyLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkJYWEhXR1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWI2K2RVQ0VMdkY4TDRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZZQWFvbkppNWxxQUVhRWJSZk5pRGozc2dHNDQ3WDNFTm8rZVZsY01CRXBVejBmc24vTXBqUk1sNkdlMmppQmNURVh4cEg3NmRUdElJYW5EZFJ2MEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1INTNNbGg0M29LRmh4Y3l0U013OEdFVHhnU001cnBVYmF2aHF3VXhGdTRuc1BBdk1ubGpXQzFOUXlabFh2UTAxakUwWEVCMjlHNDVVVUQvWHBEYUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI0ODAwNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZ1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxnUS5qc29uIjogIntcImtleURhdGFcIjpcIllOR0JuRTZ3SG52K3YvdDduWmNvamEySkVOOGoyalE0Vk54MnZGYktFVkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQyNDYwNDE2ODUwXCJ9Igp9"  // PUT your SESSION_ID 


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
