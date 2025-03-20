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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_26_03_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2UlNrMk9OT3JlR1RnU0VBOVNjNG0yaVRURDVPeHNMaWNjLzh1dE1mQVRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1RFFmMUh0OVQxR0c1Zy11Zm5fZ1hBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyMmU4NTVmLTRhMTItNDk5YS04YmY1LTk5MmE1Mjg1NmU0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMjYsXG4gICAgICA1MCxcbiAgICAgIDEzOCxcbiAgICAgIDM3LFxuICAgICAgMjE4LFxuICAgICAgMzQsXG4gICAgICAxNTksXG4gICAgICA5MixcbiAgICAgIDg1LFxuICAgICAgMjM5LFxuICAgICAgMjQsXG4gICAgICAyNTIsXG4gICAgICA4MixcbiAgICAgIDM2LFxuICAgICAgMTQzLFxuICAgICAgNTEsXG4gICAgICAxNTksXG4gICAgICA0OSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgOTcsXG4gICAgICAyMTYsXG4gICAgICAyMzMsXG4gICAgICA4NCxcbiAgICAgIDE5OCxcbiAgICAgIDE1MCxcbiAgICAgIDIwNCxcbiAgICAgIDE5NyxcbiAgICAgIDQyLFxuICAgICAgMTMsXG4gICAgICAxOTUsXG4gICAgICAzMCxcbiAgICAgIDQzLFxuICAgICAgMTc0LFxuICAgICAgNSxcbiAgICAgIDE1MSxcbiAgICAgIDE2LFxuICAgICAgMTAxLFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYxUjY3SDc0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lmNitkVUNFTk9mOGI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUejFMUURGSmdERVhRQnBwSk01U3dKblovZzlYWHJoNzMzVTd3UEFmRUtQeFNKNXhMb1NrZ1JETkVJdHFJT2dobW9BTnlCV2RHZDRKN3k0OUpGczVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1ckU1cFlZZ2RqMXhwOFREeTFlczdxVVVsLzFnOHdGL08vSWFNUDdncktEOURRVFJCVEhEYTcyMEJzcWphZ0JwQzJHOU9yZzZGTE1RbU1xaTlwdUxBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyNDkxNjA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGdRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZ1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZTkdCbkU2d0hudit2L3Q3blpjb2phMkpFTjhqMmpRNFZOeDJ2RmJLRVZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjkxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MjQ2MDQxNjg1MFwifSIKfQ=="  // PUT your SESSION_ID 


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
