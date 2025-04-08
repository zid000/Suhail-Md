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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_06_04_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJMHI3NEZidEc4c1cxWS81V0JVNjlQSm1mcmZzd3kwRjRlZWQwc3B2SVVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5MTQwODc1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUY5QTIwRTcwRkMyMDdFQjUyQTdDMkRBRTMwOTBEMjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ0MDAyMzk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjkxNDA4NzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMzA1MUJDOTRCQTY5N0NBN0JENEVEQkNBQTVFQUE3N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQwMDIzOTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRVgzdGl6d3RScXFKejlIR0JYWVdqUVwiLFxuICBcInBob25lSWRcIjogXCI3MzZiMmVlYS03YzdlLTRhN2ItYjg4MS0zN2JmMDZiZTNiOWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAyMjEsXG4gICAgICAxMDEsXG4gICAgICAxOTMsXG4gICAgICAyNCxcbiAgICAgIDE0NyxcbiAgICAgIDI0NSxcbiAgICAgIDI0OCxcbiAgICAgIDc1LFxuICAgICAgMzMsXG4gICAgICA1MCxcbiAgICAgIDEzMyxcbiAgICAgIDI1NCxcbiAgICAgIDgzLFxuICAgICAgMTQ1LFxuICAgICAgMTkzLFxuICAgICAgMzcsXG4gICAgICAxMjMsXG4gICAgICAzOCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMzQsXG4gICAgICA2MixcbiAgICAgIDEyMyxcbiAgICAgIDEyOCxcbiAgICAgIDk5LFxuICAgICAgMTY2LFxuICAgICAgMjQ3LFxuICAgICAgMTQyLFxuICAgICAgNzYsXG4gICAgICAyMDksXG4gICAgICA0NSxcbiAgICAgIDkzLFxuICAgICAgOTgsXG4gICAgICAxNjAsXG4gICAgICA3LFxuICAgICAgNzIsXG4gICAgICAxNDMsXG4gICAgICAxMTMsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU4RlBUTTNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTE0MDg3NTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzODgyNzAxNTQ1NzAwOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiyZXJvMmRzZzNocqRyaPMrCDPu8yIzJDGsvCdkI3Jls2gyozhr60gX/CfjpfvuI/wn6m28J+qvfCfjI7inIjvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTDA4TjBCRU5XNnpiOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9YQjJJR211c3MzSGNsdGxndkU0LzNyNHpmM01nbllncjV1dzdiQndybjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemtaK2REN2dEWW03N0V0aklYNlprZlFZYWhyV3gxczBWalhMQ0tZY3dzOUJEWmY3R3hmR3pZQlRTSCtuMHBuWjdlY1krYXJnNXFLSEhIWlF2YUlzQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEt0N0lXMENucHhUMU9HSG1peDh1RDBtQXpDbnd6V2VJY3lwZGx6YnlaMEx2TmlsSEtHcGJEWEdvb043R0Zyc0ovZllzRWJDM3ZxZEtXNFJGc1oyaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkxNDA4NzUwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0MDAyMzkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT09xXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPT3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKb2RXRStHZWNnNjZVNEk1dWNRMEYwT2FLS1h2clV4TGl3VG1LeG1PMXNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ0MDAyMzk0MDkyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🎗️ضــــٓــدی مــلــٓـک✨➪03247116683👨🏻‍💻",
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
