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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_35_03_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZENzUDB4elFhdmN6cmsvY1lmQlVCRS91ZlppVTM1c1dCY1REc0liS2swND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDBiYUNlTnBTNWFJTVVnc2hEU0tzd1wiLFxuICBcInBob25lSWRcIjogXCIwOGZhZTI0Ny0wMGY4LTQxMjYtOWY3YS1lOGE1NDgxNjNlYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgNSxcbiAgICAgIDI0MSxcbiAgICAgIDk0LFxuICAgICAgNjksXG4gICAgICAyMjUsXG4gICAgICA3MyxcbiAgICAgIDEsXG4gICAgICA4MixcbiAgICAgIDIyNCxcbiAgICAgIDEwOCxcbiAgICAgIDIwMSxcbiAgICAgIDg0LFxuICAgICAgMTkyLFxuICAgICAgMTE0LFxuICAgICAgMjIxLFxuICAgICAgMTg1LFxuICAgICAgMTM3LFxuICAgICAgOTYsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMjA3LFxuICAgICAgMTg2LFxuICAgICAgMjQ4LFxuICAgICAgMTEwLFxuICAgICAgMjA1LFxuICAgICAgNTIsXG4gICAgICA0NixcbiAgICAgIDE0LFxuICAgICAgNjUsXG4gICAgICA1NCxcbiAgICAgIDI0NyxcbiAgICAgIDM0LFxuICAgICAgMTMxLFxuICAgICAgODQsXG4gICAgICA0NixcbiAgICAgIDI0MCxcbiAgICAgIDg0LFxuICAgICAgMjU1LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjEyRjZXMUZWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojk3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQNStkVUNFTG5heTc0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2NjluVU5EOFJVWWwyMExuZ3IwRWw4Vmp2dERCYk4wOWVQWkF4d2crbFJIMGhpNllDY0lEUHBXZ2p3bi94dmNjNStLUE5PeFZMdmZHRlM2L1g3VFREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrU24wZWxuZE9HUE5MblorOTBTU3BZZ05rc0JzTUg4RGRiZG9SVlp5Y01WSkozZGVzaVowbisxcDdMdTk3Q28yR0NwNEZsT3FVK0ZyNHNmdnBvNnhDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxODc2NTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZnEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDRFBlVjdtZ2R0aDFDaWdoL2kzc1VjM3JVVmtmbzU4aVBGdXlOZDlCd1EwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQxODc2NTQ1NTI0XCJ9Igp9"  // PUT your SESSION_ID 


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
