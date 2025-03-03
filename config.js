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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_51_03_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUEZwWFVDSEtvYkhQUHF1QjZ6Yzl3Vzg5aHludTVWcmZ0YmlLN2NoUngrWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekkzVTIwWlZUMGVoLTkzck1Ibl9HQVwiLFxuICBcInBob25lSWRcIjogXCI4MDQ4OTViOC1iYzkxLTQ5NDEtYjRiZi0xNmMyZDVlOTA1MDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDE4MSxcbiAgICAgIDExLFxuICAgICAgMjIyLFxuICAgICAgMTY2LFxuICAgICAgMTk1LFxuICAgICAgMTgzLFxuICAgICAgMjUwLFxuICAgICAgMjIxLFxuICAgICAgMjEsXG4gICAgICAyMDgsXG4gICAgICAxNjksXG4gICAgICA4MSxcbiAgICAgIDIwMyxcbiAgICAgIDc2LFxuICAgICAgMTI5LFxuICAgICAgMTIxLFxuICAgICAgNDQsXG4gICAgICAyMCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDE3MCxcbiAgICAgIDMzLFxuICAgICAgMjA2LFxuICAgICAgMjM1LFxuICAgICAgMjM1LFxuICAgICAgMTI5LFxuICAgICAgMTAxLFxuICAgICAgMTA4LFxuICAgICAgMTk3LFxuICAgICAgNzUsXG4gICAgICA0MixcbiAgICAgIDQ1LFxuICAgICAgMjE4LFxuICAgICAgMTk0LFxuICAgICAgNjUsXG4gICAgICAyLFxuICAgICAgMjI2LFxuICAgICAgMjI4LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAySEVNTTZXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043NStkVUNFTjJEbDc0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNNURRTEtJc2RwVyszVHdXQWFoY0FiMit2VWxrMHBOdnhFK0hWK01KSWJXd1lSWFVmZW9FTGtLZ1h5amphOEQxakJtZVRVMU9Gdnhkb1VzYk9PcGhDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyVzFsUzN3YWEra3BLQ0pmR2JaYUYxT1Y1aTdhRDZOemh6b3AzRUN2MVJHNjkzelc1QWc3Q1lmUmpIa0h4L0JLMEs0YTNsRkRNMXM5MW5TMHJlNEFDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxMDEzNDc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGUrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZSsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqVmdUbHZOS0tZcUJNb3pBdW8wNDc1WHhGblJlS0hOZnB5YzNxWXQ4UFB3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDk5MTE3ODI0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
