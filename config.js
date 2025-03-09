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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_10_03_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXOE90Y2VtSndkaTJOOVp2L3cwMldCNjJjcHNNenFiMndOTUF3K1plUkZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItbG5vekkxX1Q4Q3pPbWxFclhhaVdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3MzUyZTI2LTI3OWMtNDk3Mi1hOWExLTY1OGYxMzY0ZmJjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAyMSxcbiAgICAgIDE0NCxcbiAgICAgIDY5LFxuICAgICAgMjUwLFxuICAgICAgMzYsXG4gICAgICA4NCxcbiAgICAgIDk5LFxuICAgICAgNDcsXG4gICAgICAxNzQsXG4gICAgICA1NSxcbiAgICAgIDE3MCxcbiAgICAgIDE1NixcbiAgICAgIDEwNSxcbiAgICAgIDE3LFxuICAgICAgMTU5LFxuICAgICAgMTcsXG4gICAgICAxNjYsXG4gICAgICA3MixcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICA3MSxcbiAgICAgIDY3LFxuICAgICAgNDMsXG4gICAgICA0OCxcbiAgICAgIDk3LFxuICAgICAgMSxcbiAgICAgIDIwNCxcbiAgICAgIDE2OSxcbiAgICAgIDYsXG4gICAgICAxMCxcbiAgICAgIDUxLFxuICAgICAgMTQyLFxuICAgICAgMjEzLFxuICAgICAgMTcxLFxuICAgICAgMTIzLFxuICAgICAgMTc0LFxuICAgICAgMTM2LFxuICAgICAgMTI5LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5SQ1AzODlLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojg4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092NStkVUNFT0xDdHI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuNTFHaWFSVFZIc1B1RWNqdjM5QVRSOTNJLzcwM2IyMUU1QTYvbnNTcEFFbXBWa0krRGF5dXkzYzJyNEcyWVFPeXhZeVUzMnUvM2pHNmxEeEJlZkxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaL2V3bEVyUkJBZ01aMnlkM2FpZ3o3VUpjeG53WUVwRVZHTmhFZElBL2s2NjFNT1c5OXVGQnl1dFlzV2N5cTJtNnNaZER6VHpSOVh4dUpmVzdCd09pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxNTI5NDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLc1FsMjR0ZUJuNVlxWEpCUUFJcmN6YnM1NzRXYzBHb3lnUGFWQjZMckNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
