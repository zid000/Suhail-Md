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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_47_03_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDU3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitqdEUzNmp4MHBVTkpnNUFQUXRiQzIyOGJkd1ZMUjdKYi9oYmxSczg5eGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxkMzN5M0JEUk1XeG0zbW82allhbGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU5ZmVmN2YtMjYzYi00OGJhLWEzZWQtYjkzOTE0OTE5YjRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDk3LFxuICAgICAgMTQ5LFxuICAgICAgMTEsXG4gICAgICAyLFxuICAgICAgMTgsXG4gICAgICAxOTQsXG4gICAgICAxNDYsXG4gICAgICAyMzAsXG4gICAgICAyNTMsXG4gICAgICAxMixcbiAgICAgIDE4OCxcbiAgICAgIDkwLFxuICAgICAgMTgsXG4gICAgICA0OCxcbiAgICAgIDc3LFxuICAgICAgNTgsXG4gICAgICA0LFxuICAgICAgMTcwLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAxNTIsXG4gICAgICAyMzgsXG4gICAgICAyMDYsXG4gICAgICAzNixcbiAgICAgIDQ3LFxuICAgICAgMjI2LFxuICAgICAgMzksXG4gICAgICA4LFxuICAgICAgMTM2LFxuICAgICAgMTYzLFxuICAgICAgMTg4LFxuICAgICAgMjA2LFxuICAgICAgMTE3LFxuICAgICAgMTkwLFxuICAgICAgMTMsXG4gICAgICAyNDQsXG4gICAgICAyNDYsXG4gICAgICA4NSxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFWThWWUUyQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGo1K2RVQ0VQMmwxcjRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkt3c2pYOWhTL216VWdrT24xcmFuKzB6N1hFNGNML21WRkFpS2NlSitlWE4rMktTczVmclRBN05mL1Q3WHNCSjA0L011SUc0endzaFFsWGp6dDFrdERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImI4OU51L05VRVlidnd3a20xb25zeUNZSzFuVGlMb3l2RVp5bXRreWp1TmVxaGw0SEJhbGNNbEZDVjNpR1VLOGJiOUVaWjhMc3JYdktDYitRS0o0NkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjA1MDA0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajYvWVBoTytvUStmVm5rUTE1VHlPZlllVDIzcWNDdE1sRE42cVh6TmRGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
