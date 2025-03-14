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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_18_03_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICA4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRVbGZlYjI5Ty9Kc1Ztd0lndXN0N2Z2S0VodXd0ZVdUN2lFdC8zK1Rmem89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJObHRuek5qUjVTMmNGRldIakNWYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWI1OWRhYmEtNWQ2YS00MzY2LWE1NTgtZGQ2NWMzNGEyNDU5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMzQsXG4gICAgICAxNDMsXG4gICAgICAxOTUsXG4gICAgICAyMixcbiAgICAgIDMsXG4gICAgICAxNjgsXG4gICAgICAxMSxcbiAgICAgIDEyNCxcbiAgICAgIDE3MixcbiAgICAgIDMsXG4gICAgICAxNjMsXG4gICAgICAyMTAsXG4gICAgICAxODYsXG4gICAgICAxMDEsXG4gICAgICA2MSxcbiAgICAgIDE3MSxcbiAgICAgIDE2MSxcbiAgICAgIDIzMSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgNDYsXG4gICAgICAxNjUsXG4gICAgICAxOTIsXG4gICAgICAyNTUsXG4gICAgICAxNjksXG4gICAgICA1NixcbiAgICAgIDU2LFxuICAgICAgMTE0LFxuICAgICAgMTQzLFxuICAgICAgMTExLFxuICAgICAgMjUxLFxuICAgICAgMTAzLFxuICAgICAgMTkzLFxuICAgICAgMTM0LFxuICAgICAgMixcbiAgICAgIDEzOCxcbiAgICAgIDExMCxcbiAgICAgIDE5MSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNUcxNE5HQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVDUrZFVDRU1IcnpiNEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWUwd2xqR0FlR2N6aTNhMnNsZ0llQjlXaDEyMTNsb1dsNHFERlRCZjdrdXJ3dXlKMzB0VVhKT3FOMng0dEZ0ZU91dDJCaEo2Q2FkNzlBblFtU3RNQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemRsZVRPaW5QMHdGSHhycytuQ1EvOVlDazYzZk81b3Q0aEdMVzRjd3ZaQ25XZWEwSitQcDVtdGwvc1RDUkJGQ211SmpXMVFuSWhvNlEvelpvLzdNaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTkxMTQ5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajYvWVBoTytvUStmVm5rUTE1VHlPZlllVDIzcWNDdE1sRE42cVh6TmRGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
