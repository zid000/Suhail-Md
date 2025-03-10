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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_57_03_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKWFVoQy9zVnBrVEtzT0U1NnZ1dkNSMjhJaWxCbno5bFYybWxDT1F5WlZVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJNGRpRXhLR1M3LWhVNnVlYS15VGlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkZmQwZGYwLWRmNmItNDIyNC1hYWQ1LTk3MTc0MTQyZTNkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICA4OSxcbiAgICAgIDY5LFxuICAgICAgMTQxLFxuICAgICAgODcsXG4gICAgICA0OCxcbiAgICAgIDUyLFxuICAgICAgMTIxLFxuICAgICAgNDAsXG4gICAgICAyNDksXG4gICAgICAxODYsXG4gICAgICAxODQsXG4gICAgICAyMDEsXG4gICAgICAyMDksXG4gICAgICAxMzAsXG4gICAgICAwLFxuICAgICAgMTAxLFxuICAgICAgMTQ0LFxuICAgICAgMTc3LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDY4LFxuICAgICAgNjMsXG4gICAgICAzMCxcbiAgICAgIDIyMyxcbiAgICAgIDk1LFxuICAgICAgMjAxLFxuICAgICAgMTU2LFxuICAgICAgMTc0LFxuICAgICAgMTE2LFxuICAgICAgMjQxLFxuICAgICAgMjQ4LFxuICAgICAgMTA4LFxuICAgICAgMjA5LFxuICAgICAgMzIsXG4gICAgICA2OSxcbiAgICAgIDgyLFxuICAgICAgMzAsXG4gICAgICAyMCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVlFOFZUWDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzM1K2RVQ0VMemZ1NzRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBKdXY5TzNZMXZXVGsrVU9IYW4rTFQ2RjFJeVJqNjRSRkZhNGRvVVZEZXk1R2xWMTBMS2hlVlhJOTRxeEhHbDJjVGdRUlVIY1ViOXd4TytYNXNmN0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitBZTYyYUM3d1lqSFI3OUI3S1h0Y29UamVFekJCaG5uSjZxQXRtZkowL2xIWDhKcFNwZnlFMmcyd0ZWcGxXTzA5TkxkQXlTMmZVcll3V1NSUC9pTEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDE2MTUwNDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZlhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmWC5qc29uIjogIntcImtleURhdGFcIjpcIktzUWwyNHRlQm41WXFYSkJRQUlyY3piczU3NFdjMEdveWdQYVZCNkxyQ3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
