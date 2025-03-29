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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_11_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4LFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid09JdU9VVXVzN3o4L1l2Z281YkV6THNkbk1wV1NhdURtTjZnMzdXVEJSND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDcxMTY2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGODQwMEMzRkJEREJCMEFDOTY1MjlBNzdGQkNFODBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzIwNzA3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6emxVc08xN1JHaXB2UXRSSVpZNlRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlOTZkNGFjLTY5YWItNGY0OS1hYmZiLWU3YzViNTdkYzg2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyMzEsXG4gICAgICAxNTAsXG4gICAgICAzNCxcbiAgICAgIDE0NyxcbiAgICAgIDI4LFxuICAgICAgMjM3LFxuICAgICAgMTQ2LFxuICAgICAgMjAzLFxuICAgICAgNTQsXG4gICAgICA0NyxcbiAgICAgIDI0MixcbiAgICAgIDYyLFxuICAgICAgMjQ3LFxuICAgICAgMTMwLFxuICAgICAgMTI4LFxuICAgICAgMTE3LFxuICAgICAgMTA0LFxuICAgICAgMjAsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxNDMsXG4gICAgICAxNzEsXG4gICAgICA2NixcbiAgICAgIDcxLFxuICAgICAgMzYsXG4gICAgICAxNTcsXG4gICAgICAzNCxcbiAgICAgIDIyMixcbiAgICAgIDY0LFxuICAgICAgMjksXG4gICAgICAxOTcsXG4gICAgICAxNDAsXG4gICAgICA5OSxcbiAgICAgIDE4NSxcbiAgICAgIDI0MyxcbiAgICAgIDE3NixcbiAgICAgIDI3LFxuICAgICAgMjUzLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo0RVFUOTg0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjYzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiNitkVUNFSjMxbkw4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIcnJSdHJoQ21ZRDNrQmRncEZWakhMYXQ1SzB6TENINldpTzV1ZDJ6SVpMZEpGUFBTS3M3SWFiL1hxZzl5a1FoTlVza3lpYzgxVk5kcnF2UmR6YlhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhMWp5K3dGam44WDhna0ZsNFc4SHlBbTdmcVpxRktDS0pJbVZHV2E4S0RiYk1DSmhyeTVJS25pK1R6UytwbW1EeFFEV1dDNjNuRE1Wd0tnVVlnWG1pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMjA3MDcyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
