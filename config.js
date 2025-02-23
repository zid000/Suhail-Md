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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_47_02_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUpROThDd3AwcHJJTUx2ZTBGYU5vYks3ZlNTV0p1NnRhNHdvbWlrZThPcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2JoLUVjczVRWDZ0bkpBbFZLdHJkd1wiLFxuICBcInBob25lSWRcIjogXCI3OGIyNTRhZi1iZjdiLTQzY2UtOTc1ZC02MTBiOGI4NzdlM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTcsXG4gICAgICAxNzIsXG4gICAgICAxMTAsXG4gICAgICAxOTYsXG4gICAgICAxNSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NixcbiAgICAgIDE3MixcbiAgICAgIDg1LFxuICAgICAgMjAzLFxuICAgICAgMTM0LFxuICAgICAgNjcsXG4gICAgICAyMDMsXG4gICAgICAxMDMsXG4gICAgICAxMTgsXG4gICAgICA5NCxcbiAgICAgIDE2LFxuICAgICAgMjQ5LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTcsXG4gICAgICA0NyxcbiAgICAgIDE3MyxcbiAgICAgIDE5OCxcbiAgICAgIDIyMCxcbiAgICAgIDIxNyxcbiAgICAgIDIwNixcbiAgICAgIDUzLFxuICAgICAgMTc5LFxuICAgICAgOTksXG4gICAgICAxNDUsXG4gICAgICA4NixcbiAgICAgIDE1MixcbiAgICAgIDEzMyxcbiAgICAgIDIxOCxcbiAgICAgIDI4LFxuICAgICAgMjM4LFxuICAgICAgNzYsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlRIM0syUUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTM1K2RVQ0VJU2k3YjBHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5LRjZRK0lJWEdWY25PaS92YzVCbitjOERneUNBMUdxb1k2L25yNHp1QzNwRjBjNjBScjhuQVlDanBDcjdETjdjZHRKVERJeDFsLzdOQXYrWkdNSEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImIvalhHVUZoNU9aYmRXSHVGaXhpV3hMd2s1Qldrc1dFaUhid21VK0tqNHdmVlhiUS9KSVZMS2lDWVp5N2NmY211blE1cm9naHkwTnpuR3dUbFAvUmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDAzMjkyMjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIS2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhLaS5qc29uIjogIntcImtleURhdGFcIjpcInFuWnB5a3QwekZyeEJOaDhEdUE1aytLcUxrNVI3REswZTdHYWhsbWhpbTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
