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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_02_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZeEx2QnFqRWZKK2Riamx1eGptWnhxZGtyTkJZQTAwb0h5bmFuVE82SmtrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyZWRmYmpMbFFEU1MwUHVzN19fTUlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2NGI3MDY4LWMzNDMtNGYxZC1hMTg2LWJkYjdlM2M2OWE3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDE4MCxcbiAgICAgIDE0MSxcbiAgICAgIDEwMSxcbiAgICAgIDE2OSxcbiAgICAgIDIzLFxuICAgICAgMjI2LFxuICAgICAgMTgsXG4gICAgICAxOTQsXG4gICAgICAzMixcbiAgICAgIDI1MyxcbiAgICAgIDExNixcbiAgICAgIDEwNixcbiAgICAgIDY1LFxuICAgICAgODUsXG4gICAgICAxMTAsXG4gICAgICAxMTgsXG4gICAgICAyNTAsXG4gICAgICAxMjcsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEwMSxcbiAgICAgIDIwNyxcbiAgICAgIDIwNyxcbiAgICAgIDczLFxuICAgICAgMjQyLFxuICAgICAgMTg4LFxuICAgICAgMTc3LFxuICAgICAgMTI2LFxuICAgICAgMjA3LFxuICAgICAgMjIzLFxuICAgICAgMTMyLFxuICAgICAgMjMxLFxuICAgICAgMjUxLFxuICAgICAgMjIyLFxuICAgICAgMTU3LFxuICAgICAgMjAsXG4gICAgICAxMTEsXG4gICAgICAxMjEsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQ1BHQUNTN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcjUrZFVDRUtEcTU3MEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid1F1WDUyR3VvNjY2TFN6VmlXVXo5OWRtL08xdnk3L2FRekU5enVmVlRyL3o2UXNEL3VtdEFRM0phZXgvOXN3WkpwQjhKV0RmL3BwS2dDU29kaHVkQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1VOUHhaaHNDazgzc2RyTXpOOG5mamF0QTQxV004NlM3OTg4Ui9ac09DOU1UN2xRNFlwZmZTeGZpbFJlNWdlZkszRDFXaUd6OVBhanJCc1JscWxJQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDI0MDE2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhLYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEthLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzNOTkdsL0hWSlJ2UG9VWlZDS1hDM3BXb0NESUw1OGt3TG5ad25RY01HQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
