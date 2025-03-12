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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_39_03_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNHb3c4SnVBREIxbkVoS2l6OGpjUEVaVzcyNGFjY3NqT0F0ZXdJdCtDQXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjI5WlZmWVNvUXhDVHJCSjZNdEpQQVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmEyNGRkZmEtNzFmYS00YjgxLThmZDQtMzU2YmZhODEwYmU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDE1OSxcbiAgICAgIDEyOSxcbiAgICAgIDI3LFxuICAgICAgMjEwLFxuICAgICAgNzYsXG4gICAgICAyMjUsXG4gICAgICAwLFxuICAgICAgNTAsXG4gICAgICAyMzgsXG4gICAgICAxNDUsXG4gICAgICAyNCxcbiAgICAgIDIwNCxcbiAgICAgIDkyLFxuICAgICAgMzcsXG4gICAgICAxMTUsXG4gICAgICA4MCxcbiAgICAgIDEyOSxcbiAgICAgIDcsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICA3MixcbiAgICAgIDE1MSxcbiAgICAgIDY3LFxuICAgICAgMTc5LFxuICAgICAgMTk0LFxuICAgICAgMjQzLFxuICAgICAgMTkzLFxuICAgICAgNjEsXG4gICAgICA4NSxcbiAgICAgIDE4NSxcbiAgICAgIDI0NyxcbiAgICAgIDY2LFxuICAgICAgMjMwLFxuICAgICAgNDcsXG4gICAgICAxNDYsXG4gICAgICA1MixcbiAgICAgIDg1LFxuICAgICAgMjQ4LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVNIQjE0UFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEg1K2RVQ0VKYTV4cjRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhyV0hPQWgrSW5FNmQxMlhvWm5sSnFqVHo5WG4vZk00NmdYWUNWdUNjd3pRa0JMWGZoamxvR21YZElYL1BGUGFYamFYemhwd0tJdEY0bit4UjFQR0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJZZGo3OE5XS0dVbnZrWFZEZlE1ZkZHbUZjVGVEc1doVGU0M1dzTVU2SW0xQ05HaEh4YzFsb1pTZHVsQ2JCOWJtbGh2ZU9ocElOeDBzTGZCa09ycmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDE3OTAzNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmZi5qc29uIjogIntcImtleURhdGFcIjpcIktGaDJBajIreWZIcHRGNy8yanpKT3NFK3MvMkdlSVpXMi9sdWhaMmtyQms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
