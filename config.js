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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_29_04_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkwyUzB3V3FUcW9oSUFrU0tJU0JJU0lMc3d5K2lFOHZDZUdlYnFGc3MxY289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAzNjEzNDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQTMwMEM3Nzg1REFCQTRDMjlGMzdCMjE1NzU4MkIyN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDM3MDEzNDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDM2MTM0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlEMkQ4ODA4NEUzQTkwNkNFNzUzOTZDNUY2OUJEMjYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzcwMTM0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLaUxKLXNOblE3Q25SMmM5WDNCMUNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlYmVhZTVhLWRiY2EtNDAwYi05M2NiLWE5MjhkM2E1MDgzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMTUsXG4gICAgICA0NyxcbiAgICAgIDI0NyxcbiAgICAgIDE4MyxcbiAgICAgIDE0NSxcbiAgICAgIDEwOCxcbiAgICAgIDE0NyxcbiAgICAgIDIxNixcbiAgICAgIDE0OSxcbiAgICAgIDE3MyxcbiAgICAgIDE0NixcbiAgICAgIDEzLFxuICAgICAgMjQ2LFxuICAgICAgNzIsXG4gICAgICAxNDAsXG4gICAgICAyMDcsXG4gICAgICAxODYsXG4gICAgICAxMTEsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA2NSxcbiAgICAgIDEyMixcbiAgICAgIDM4LFxuICAgICAgMTM2LFxuICAgICAgMjM1LFxuICAgICAgODYsXG4gICAgICAzNCxcbiAgICAgIDEzMyxcbiAgICAgIDEyMyxcbiAgICAgIDE2MixcbiAgICAgIDEyMixcbiAgICAgIDQ1LFxuICAgICAgMTU0LFxuICAgICAgMTQ0LFxuICAgICAgMjI5LFxuICAgICAgMTc3LFxuICAgICAgNTgsXG4gICAgICAyMzcsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTRFNlRFTFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMzYxMzQyMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM1MDQzOTc4NDg1ODk6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLhrIrNoc2c8J2QmfCdkIjwnZCD8J2QiCDwnZCM8J2QgPCdkIvwnZCI8J2QiuKBsMK5wrIg6quC4oOf8J+HpvCfh7/imaXvuI/wn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJKdkg4UTJZcTd2d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOOUlmemN0UDdzazNEd1JPTGdROFFvS0xhS1doUUN1UFQ1OTRtSEgyQndRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1BNjZqTkJjZEc0TSs5dkNhZTlFVXc5cnUzL3d6RlRWazVWQ3Mxa2tJS3M2OUN3WkI2SS9aSktqeFhVQk4vQVdtU0cxbW81WEtqL1U3V2ZsRGVPS0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRsa0FsWEpSNnNEaG84TnRQWGRxWnNpUlRSSUFaek43VUJLcW9zdWFZV2NZSTBWYlliWFlEdXpvaVZKQktGbFhnNWFCZUt0b2ZRQ3RUZnl5WlNNV0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMzYxMzQyMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzcwMTM0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1mK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWYrLmpzb24iOiAie1wia2V5RGF0YVwiOlwidE5wQ2x5Y1NlR2FRVkVmZjJSRms0eWlUbWlkTG5FTTIwTkpTb0xNbSszMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjczMzA3NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MzcwMTM0NTE0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
