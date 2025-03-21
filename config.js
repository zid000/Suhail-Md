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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_29_03_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZwL1JNNnBQaGdUeVhmNnJMSkJQTGRGVDlYelltREl0VmxocEZwWE9aN0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNGTGk0eWJMVE1PWDk0NWRidjlOcUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2EzYzcyNTctODBjZS00YmQ1LThjMGItODZlYTI3YzkxYjE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMjEsXG4gICAgICAyMjAsXG4gICAgICAyLFxuICAgICAgOSxcbiAgICAgIDksXG4gICAgICAxMTQsXG4gICAgICAxOTAsXG4gICAgICA0NCxcbiAgICAgIDYsXG4gICAgICAyMjMsXG4gICAgICAxMjksXG4gICAgICAxODQsXG4gICAgICAxOCxcbiAgICAgIDk1LFxuICAgICAgMTY2LFxuICAgICAgMjQ5LFxuICAgICAgMjcsXG4gICAgICAxODYsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA4OCxcbiAgICAgIDE2MSxcbiAgICAgIDMsXG4gICAgICAxODYsXG4gICAgICA0NyxcbiAgICAgIDYyLFxuICAgICAgMjMyLFxuICAgICAgMTA4LFxuICAgICAgMjI3LFxuICAgICAgMTc0LFxuICAgICAgMTc1LFxuICAgICAgMCxcbiAgICAgIDEwLFxuICAgICAgMTIsXG4gICAgICAxOTYsXG4gICAgICAzNSxcbiAgICAgIDIzMyxcbiAgICAgIDk0LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFE4MUxKWEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXo2K2RVQ0VJaVk5NzRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi90ZmRLY3VIMk8rbmpISTNBcUo5S3ZTVjdJWCtDekhEMjYrMmZpRjdtZDBZdkcxVzRxYWcweU9QYjVpMWhHUnNkZXJBcGdQRTlhc00wWVNkUm9GMkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZETy9xWDJvT0lLY0VuVllBQWd6TlF4cWFKYktXZ2o1bG1Geng0SjFEMFd1Q25oY2QwK2p4aU8wNFBNNUE5d2RpdkxGcTF0LytDdlQwdHBoZXRoMmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI1ODg5NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmUC5qc29uIjogIntcImtleURhdGFcIjpcImo2L1lQaE8rb1ErZlZua1ExNVR5T2ZZZVQyM3FjQ3RNbERONnFYek5kRk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
