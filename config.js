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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_37_03_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1Kzg2TnZtNnZwTmNjbWIwYnRFRENVOTJ1WktVNFoyMWJKOXJ5SitXaG13PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSNFR6UkhsclJiNjJSMjdDSzM0dk1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImJiZTI4YjlkLWQ0NDAtNDgzZi1iMDRjLTU2NTA3ZDgwODkzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxMyxcbiAgICAgIDU4LFxuICAgICAgODMsXG4gICAgICAxODIsXG4gICAgICAxOTYsXG4gICAgICAyNixcbiAgICAgIDM0LFxuICAgICAgMTI2LFxuICAgICAgMjUxLFxuICAgICAgMjU1LFxuICAgICAgNyxcbiAgICAgIDI3LFxuICAgICAgMTYwLFxuICAgICAgOTAsXG4gICAgICAyMjQsXG4gICAgICA0OSxcbiAgICAgIDI1MSxcbiAgICAgIDg5LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDIzMixcbiAgICAgIDE0OSxcbiAgICAgIDI1MyxcbiAgICAgIDEzMyxcbiAgICAgIDE3NSxcbiAgICAgIDE3OSxcbiAgICAgIDc0LFxuICAgICAgMTc4LFxuICAgICAgMTA1LFxuICAgICAgMjQwLFxuICAgICAgMTcxLFxuICAgICAgMTc3LFxuICAgICAgMTksXG4gICAgICAxMixcbiAgICAgIDE1NyxcbiAgICAgIDEsXG4gICAgICAxMDAsXG4gICAgICAxMzcsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRQTVE4NjdEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbjUrZFVDRU5ldDE3NEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianhkQ3RrSnVCMnhqN3U0QStOb0pVTUFtSTNDYzBSbytqRHRUNHltbU9LM0pIOGFUUUk1RjNNbUlKNnhIUnpnYWwrUU9sWUlEbjlBS0RRNzB0cURnQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHMyYzVmVnp3bjZxbk44cklvZzNBeTRVazNlQTFGOVBJTkZxTlFFcTZwNkVMTXR1SHFPY3ViQTNuR3VKc1RsYXVKcng2d3BYSjMvaWpEVXdQWVU1QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyMDY3NDE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqNi9ZUGhPK29RK2ZWbmtRMTVUeU9mWWVUMjNxY0N0TWxETjZxWHpOZEZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
