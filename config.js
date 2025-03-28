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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_46_03_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk0LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiYjNWV0lETEN2UVR6Wi9QaEJyaU5oa2FTUGVKNXFNZVVHUGlNN0FKSTJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmV1BRNGp5N1JObVhSRF9kNFFiakJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4MDBjM2FiLWIyOGEtNDYxMS1iNWM3LWNkMzc5MWM0YmZiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyMDIsXG4gICAgICAxMzUsXG4gICAgICA2NyxcbiAgICAgIDE1LFxuICAgICAgMTQ2LFxuICAgICAgMTE4LFxuICAgICAgMTQyLFxuICAgICAgMjAzLFxuICAgICAgMTAyLFxuICAgICAgMTYxLFxuICAgICAgMTk0LFxuICAgICAgMTAzLFxuICAgICAgNSxcbiAgICAgIDIwMSxcbiAgICAgIDYxLFxuICAgICAgMjQ4LFxuICAgICAgNjgsXG4gICAgICAxOSxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxMDcsXG4gICAgICA1LFxuICAgICAgOTUsXG4gICAgICAyMjQsXG4gICAgICAyLFxuICAgICAgNDQsXG4gICAgICAyMDEsXG4gICAgICAxODQsXG4gICAgICAyNTMsXG4gICAgICAzNixcbiAgICAgIDg3LFxuICAgICAgMTc4LFxuICAgICAgNzIsXG4gICAgICA0OCxcbiAgICAgIDIyNyxcbiAgICAgIDgxLFxuICAgICAgNDMsXG4gICAgICAxOTMsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWjE3QTRLQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTDYrZFVDRU1xbm1iOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic2YvaWFGMHNaS1pZYUxDcTEvWmErR2JSSWpJQWhweHR5Y1FPb08rcWQ3Z2ZOajB4T2lMcUdzRHdzUDZJY0lqLzlxR2J4UVVNWGRISncvWlQyaEFDQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXRqRDIwL2NrKytxc0U0d1lWSk1EdUhCNVNwcWxCVlJVWkphTkIwNzIrRlJ0b1hTVDg0VktMajRrY3JhV2FsVStJRUxwWlR6S3JHTmM1MnpKRi9tQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzE0Nzk4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtUMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1QwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFFycTljWitoMkUra21SN3RuZjYzUmMvaGtLZUYwL2hBTjJtbUMzQ1hhYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
