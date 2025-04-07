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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_04_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQaGFUZzF0ZVJiTEVEOUlrZ2VzUURtWFJpa3BNMUpvdEszcWo4cEs4ODdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEdFd6U2JCaVRXT0pDSTIzSEstdHpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4ZjYwOGFkLTk4MzMtNDE3OC1hY2UyLWZlYzI2OTZjMGI1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICA2LFxuICAgICAgMTUwLFxuICAgICAgNzQsXG4gICAgICAyMzQsXG4gICAgICAxNzYsXG4gICAgICA2MyxcbiAgICAgIDExMixcbiAgICAgIDE3MixcbiAgICAgIDE2NSxcbiAgICAgIDkwLFxuICAgICAgNDQsXG4gICAgICAxMDMsXG4gICAgICAyMSxcbiAgICAgIDE1NSxcbiAgICAgIDE0OSxcbiAgICAgIDE5OCxcbiAgICAgIDEyOCxcbiAgICAgIDkwLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMTQsXG4gICAgICAyMzUsXG4gICAgICAyMzEsXG4gICAgICAxNDUsXG4gICAgICAxNTYsXG4gICAgICAxMzIsXG4gICAgICA3MyxcbiAgICAgIDUzLFxuICAgICAgMTYzLFxuICAgICAgNDgsXG4gICAgICAyMTgsXG4gICAgICAxNixcbiAgICAgIDgzLFxuICAgICAgMjI2LFxuICAgICAgMTMsXG4gICAgICAxMjcsXG4gICAgICAxMDMsXG4gICAgICAxMDksXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlE2QVJCM0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6ODdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGY2K2RVQ0VPcVJ6NzhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkwwc01GZjlHMUduM0UzNjE3UXFKWUtiV0FjS1pZSnVidTh6dlFNOTNoc3UrMW93YUVJZlpqZENqUEN1RUNsaWZzZXYyb1ZhMDZyQ3BiYlFwc1habEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVVbEVxcVIwZ3hJTjl5K0dTNjZNSndCVXlabHcwZy9BUHpua3lEeTJPMGRFZlpDS1M3KzFVbmRNNUowQjUyWG5RbEFEeEtyTk1iVHg1UElTbmxvVWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQwMjk5MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
