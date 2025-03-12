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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_43_03_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpoQm14d1Y4WTFLSHlXN0tnUkJlQU14Q25HU2V0SGtuZDRrRkJXajdEQ2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFjWDZ0U202U2NhMmNvSHBKX3BNUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjE4MjMxOTUtZjIyNC00NmJlLWEyYzAtMjU1YzgyM2NlNTllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDQzLFxuICAgICAgMTQ5LFxuICAgICAgMTgzLFxuICAgICAgMTE1LFxuICAgICAgMTQwLFxuICAgICAgMTkzLFxuICAgICAgMCxcbiAgICAgIDY1LFxuICAgICAgMTM2LFxuICAgICAgNTAsXG4gICAgICAxNTgsXG4gICAgICAyMixcbiAgICAgIDEwNSxcbiAgICAgIDE5OSxcbiAgICAgIDE2MixcbiAgICAgIDE2MCxcbiAgICAgIDcxLFxuICAgICAgMTg5LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxNDIsXG4gICAgICAyMDAsXG4gICAgICAyMTUsXG4gICAgICAxMCxcbiAgICAgIDE1NixcbiAgICAgIDI0MCxcbiAgICAgIDc4LFxuICAgICAgMjQwLFxuICAgICAgNTEsXG4gICAgICAxNDMsXG4gICAgICAxOTksXG4gICAgICA1NyxcbiAgICAgIDI0NixcbiAgICAgIDcxLFxuICAgICAgNzYsXG4gICAgICA5MCxcbiAgICAgIDEwOCxcbiAgICAgIDUyLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhKNzlYR1NEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BENStkVUNFSk94dzc0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwaUN3RXJ6RVhzWUpaU1Q0YVV6Uzh4Z1hNY0prMlAwOGRpeHJJMkxJQmFmczJUaGtybjB0UDdBSzdKWkJYT0tOb3A3dmdvNzNsVXdiUjdVeitObUJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvRkNmbk1tRDhncmJKcjFQdVhUaGpyanRxSFMrRm5FTEdsK1Y3OWhkMkpKWkF2ZzRzTXlrOUF5NGYwMWFMOXAyWmFnVWpmZWtGczh5OEFwQURINTRoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxNzQwMTgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZmYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLRmgyQWoyK3lmSHB0RjcvMmp6Sk9zRStzLzJHZUlaVzIvbHVoWjJrckJrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
