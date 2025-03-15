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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_44_03_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBSEJjU3Zhc2RiZkk2QXkxMTFiOEtOMHl0QUZhMnA5NVBwYXdUb2RJSXpFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnbXl1QWVJUFNxdWZxYTgwOWR4b2Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiODgzYTBiLTdhYzAtNGZiNi1iMWJhLTM3MDEwZGY5NzM3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICA2NixcbiAgICAgIDE5NyxcbiAgICAgIDIwLFxuICAgICAgMzYsXG4gICAgICAxMixcbiAgICAgIDk5LFxuICAgICAgMjMsXG4gICAgICAzNyxcbiAgICAgIDEyNyxcbiAgICAgIDgxLFxuICAgICAgMTY3LFxuICAgICAgMTE2LFxuICAgICAgOTgsXG4gICAgICAxNjksXG4gICAgICAxNTksXG4gICAgICAyMTQsXG4gICAgICAyOSxcbiAgICAgIDE3MCxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE5NixcbiAgICAgIDExOSxcbiAgICAgIDY1LFxuICAgICAgMjIzLFxuICAgICAgMjI2LFxuICAgICAgMTgwLFxuICAgICAgMTUwLFxuICAgICAgMzAsXG4gICAgICAxODQsXG4gICAgICAxNDMsXG4gICAgICAxNTksXG4gICAgICA1NyxcbiAgICAgIDE4MyxcbiAgICAgIDI3LFxuICAgICAgMTkwLFxuICAgICAgODAsXG4gICAgICA3NixcbiAgICAgIDM0LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV01WNUc0QlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmNStkVUNFSUR2MDc0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjb3QwdEluaUtqLzkvcStJMkg4WGRsTDR0bm1CQTk1WjZLQnVMd1RpM2dDSEhmNTljV05wSTJiVDliQWk3ZmFESjdjMlBIaE9LTjh0N0FKbWZkcUJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKbXVaKyszUFVacVNMenJCOWhZaWw1bzZpVmlGTnhkOWsyU1dwd3NBN0pqMVA3QXhNU0Y1Tnl0QjlUL2NZSTd4QS9pNzBaZ1EzZEdpQ0ZZOWw0ZHNBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDIwMTAyNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmUC5qc29uIjogIntcImtleURhdGFcIjpcImo2L1lQaE8rb1ErZlZua1ExNVR5T2ZZZVQyM3FjQ3RNbERONnFYek5kRk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
