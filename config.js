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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_43_04_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWtVR1g0a25Bb091ZC9GSkpOcTdIZjdORUp1NXNxWUdTaUR5WXFWSHkycz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic1lXQWswQkRRM3VreTJINHF5SFZ0QVwiLFxuICBcInBob25lSWRcIjogXCJmMzlmMjNhMi0yNGM0LTRkMTktYWUxYi0yM2QzMTExMTY0MjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMjQ4LFxuICAgICAgMTYsXG4gICAgICAxOSxcbiAgICAgIDEsXG4gICAgICAyOSxcbiAgICAgIDcyLFxuICAgICAgMTA0LFxuICAgICAgMTg1LFxuICAgICAgMTk2LFxuICAgICAgMjM1LFxuICAgICAgMTI4LFxuICAgICAgNTAsXG4gICAgICAyMTUsXG4gICAgICAyMzEsXG4gICAgICAyMyxcbiAgICAgIDEwOCxcbiAgICAgIDE5NyxcbiAgICAgIDQyLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgNTksXG4gICAgICAyMTgsXG4gICAgICA5OCxcbiAgICAgIDQyLFxuICAgICAgMTA0LFxuICAgICAgMjI5LFxuICAgICAgMjMyLFxuICAgICAgMTM3LFxuICAgICAgMTg5LFxuICAgICAgMTgzLFxuICAgICAgNDIsXG4gICAgICA0NSxcbiAgICAgIDE3NixcbiAgICAgIDE3NixcbiAgICAgIDI1MyxcbiAgICAgIDEzNSxcbiAgICAgIDQwLFxuICAgICAgMjI0LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktIV00zUFBEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xENitkVUNFSy9Xdkw4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQL1hUVjdRcTFWZnFhcURmaXAraERCcm5sa1E5d3Q5ZXZEU3dGMnFYUDV0K2RkNy9pQm91NTBLNTYzMXRxN1VpVnhBeEF1dGo1SmhIdWtjNHpoOUhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkU0J6WGZrRThkdzJYWFRRa3FuYUNnM0tqUi90ZGdHT0c2T29GYU9ycGJWdUF0MGphUVp4aUgvRlQxWGVHdWE5dUpRTzBLNDBwSy9xMVV2bmZBL1JDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzNzI3NDEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk5LXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTksuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5SUdYdDlXek5DRzE0MWk1NDI1dFI2UjM3RUZ1ZmdpeSt1K3ZiTG5SUEFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk1OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MzcwMDMzOTQ0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
