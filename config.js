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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_27_03_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9FRHF5OUNPMmNMRTBheitaQ3UwdzAxM0F2bno1V3RYQ1dWRkJGcjhPQUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklCSHFBVDZsUjdPc2tGSzB0dUV3M0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjQ2NGY2NDktZTg0MS00ZDdkLWJkMzEtMzFmODJjMjc2OGUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDE2MSxcbiAgICAgIDM5LFxuICAgICAgOTUsXG4gICAgICAxODUsXG4gICAgICA4OSxcbiAgICAgIDI0MCxcbiAgICAgIDIxMCxcbiAgICAgIDY0LFxuICAgICAgMTI0LFxuICAgICAgMTI2LFxuICAgICAgNixcbiAgICAgIDE4MixcbiAgICAgIDY3LFxuICAgICAgMjExLFxuICAgICAgMTQsXG4gICAgICAxOTYsXG4gICAgICAxLFxuICAgICAgMjEsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMjExLFxuICAgICAgNDMsXG4gICAgICA4NixcbiAgICAgIDE1OSxcbiAgICAgIDY4LFxuICAgICAgNTgsXG4gICAgICA3MSxcbiAgICAgIDcsXG4gICAgICA4NyxcbiAgICAgIDMxLFxuICAgICAgMjAzLFxuICAgICAgOTAsXG4gICAgICAxMTMsXG4gICAgICAyNTAsXG4gICAgICAxNzQsXG4gICAgICAxNjksXG4gICAgICAxMTMsXG4gICAgICA1LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjRYN045V0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1A2K2RVQ0VKdkhtcjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5VZDBKd1ZOMXo2Y0FxdzV0Z0ZBWTRLYUdoblRlcjgwWWtya2diQm1XeTN2cVBNZ0tRRVMvMGR6Y0pTTHRNaG02ajU5eFVMUktDVyt1SDNndjYwRENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImticGk4ZDZVbS9raUF3QVYreXg5eXl5TzRwQ3pncnFrcEZyOTFUSEJwc0lRTHNDWFhVNUdwUWJQRHc1MnBPSHdFZGIvcHBJVFQ0QXlYSDQ2TGFLSWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMxNjg0MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLVDdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtUNy5qc29uIjogIntcImtleURhdGFcIjpcIkNSeVNzVnRpNjZXVWN2RCs4M0F0RlcyQm9vMmpZVzU4MktvaVVSMk5OV009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQzMTY4MzgxNDkyXCJ9Igp9"  // PUT your SESSION_ID 


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
