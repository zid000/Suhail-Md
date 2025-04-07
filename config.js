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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_01_04_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGpJZXRSakkyb1ZpNmJVRTBpV3FPaDAwRmh6aTNGY3BKbWY2dlppT3ZKRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3ZoRUhlUzhUTHk2amE5enBWMjJhZ1wiLFxuICBcInBob25lSWRcIjogXCI3MWMwNmUyOC0wYTgzLTRmNmMtYWMwNS1lNGRjNDY3ZjYzNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNzIsXG4gICAgICAxLFxuICAgICAgMTM4LFxuICAgICAgMTkwLFxuICAgICAgMTg5LFxuICAgICAgNjIsXG4gICAgICA4NyxcbiAgICAgIDgxLFxuICAgICAgMjksXG4gICAgICA3MCxcbiAgICAgIDE0MyxcbiAgICAgIDUzLFxuICAgICAgMzMsXG4gICAgICA2MCxcbiAgICAgIDY2LFxuICAgICAgMzMsXG4gICAgICAxMjYsXG4gICAgICAxODUsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICA4NCxcbiAgICAgIDEzMSxcbiAgICAgIDIyNCxcbiAgICAgIDMzLFxuICAgICAgMTg0LFxuICAgICAgMTU4LFxuICAgICAgMTY4LFxuICAgICAgMjU1LFxuICAgICAgMTY2LFxuICAgICAgNTUsXG4gICAgICAyNTAsXG4gICAgICAyNDIsXG4gICAgICAxNixcbiAgICAgIDEwOCxcbiAgICAgIDI0MCxcbiAgICAgIDcxLFxuICAgICAgMjEzLFxuICAgICAgMjE4LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpXWFlRN0ZZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xuNitkVUNFTmlKMEw4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxeDdnQVJvcW03eGkyUE5TZWpDUVpwbmJIWjNZeTRhaG1OSmJxSjY5Szhzd0w2QURONHhnUVJzNXlXck5mdGF4aHBRbElzK0ZnS1JPWVg3amdOTVREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxYndqRzU0a0N0TUpwMWZ1YmVuUEZRd2E5ZG51ZXRpcWk3UzRPaE5zNmlRby81eC8zR0lxYnJvYXdMcUh5UDZMbXpuRVlsbm4xdEdITlo0dDYvMDJpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0MDQ1Mjc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk5MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSQXVCT3lEWDI4MjNndGdVMzFpSFpiUUMxZEVkU3RlaXFqOXU4VEt5Wm8wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
