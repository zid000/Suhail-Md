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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_03_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGb2t1UmRVNmMwSHZzbEwwTGVtWFhrYURuLzE1N3dLci9rNzcyWUo4dmlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxN0trZGNrX1RHQ2tUdUo4dEU1QUp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVkZjhkYTMyLTE2YmYtNGZiYS1iZDViLWVlNjc4MmE5NzZiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxNSxcbiAgICAgIDY5LFxuICAgICAgMjEwLFxuICAgICAgNzEsXG4gICAgICAyMDYsXG4gICAgICAxOCxcbiAgICAgIDUwLFxuICAgICAgMjU0LFxuICAgICAgMTAyLFxuICAgICAgMTEsXG4gICAgICA1LFxuICAgICAgNDEsXG4gICAgICAxNjMsXG4gICAgICA0LFxuICAgICAgNzcsXG4gICAgICAxNjksXG4gICAgICA1LFxuICAgICAgMTAxLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTUsXG4gICAgICA5NixcbiAgICAgIDExMCxcbiAgICAgIDEzMSxcbiAgICAgIDEzNSxcbiAgICAgIDkzLFxuICAgICAgMTAxLFxuICAgICAgMTI5LFxuICAgICAgMTU1LFxuICAgICAgMjQ0LFxuICAgICAgMTA1LFxuICAgICAgOTcsXG4gICAgICAyMDQsXG4gICAgICAxNjgsXG4gICAgICAxNjcsXG4gICAgICA0LFxuICAgICAgMTg1LFxuICAgICAgMjM2LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQzRktBNjFBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjYxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUNitkVUNFTHVnbTc4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpQUE0Z2ZLSVloNG5ubkNuQ2ZneXFHaDQxbHYxN1A0MnZ5TG42OUV5YUI5b0pyNUtrV2NZbjQrell0Q1RXZUxndDNSN2lTai9SUHVIaGNDc01OTzlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSOWd2QjVzYy9DNFVERm1tNzY5T0lCTjlaSi8xQitzK3o1SUQzNjFqZEJLeTk4QXNnV2FXWGJvS0NSdkpDOHppRFhMeW5jcXVBamw4SE04bER1aFNDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMTc5ODM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1Q4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJeWJjSTlxeU93NkgxeCtWbDUyNGQrNFJ5ZWJoSHlkc3RLVjJSMzFUNXpnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
