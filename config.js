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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_59_02_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVdaSjdPSnRNRU5Vckhra3QvcVlTUjlmQkJUQytLendvZ3JPS1QrdGpiUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHFzdV9ScFZRNENmQ1A3RlpJMFIwZ1wiLFxuICBcInBob25lSWRcIjogXCI1ZTFlMWZkMS1iNzgzLTQ4ZjAtYjg0MS04MGNkM2VjYThmMGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAyMjUsXG4gICAgICAyMjcsXG4gICAgICAxMTksXG4gICAgICAxOSxcbiAgICAgIDIzOCxcbiAgICAgIDE2NCxcbiAgICAgIDY4LFxuICAgICAgMTA0LFxuICAgICAgNixcbiAgICAgIDEzMixcbiAgICAgIDE2NyxcbiAgICAgIDE0NSxcbiAgICAgIDE1MixcbiAgICAgIDE2NixcbiAgICAgIDExMixcbiAgICAgIDM1LFxuICAgICAgMTAwLFxuICAgICAgMTQ2LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDIwNCxcbiAgICAgIDE1MyxcbiAgICAgIDIxNixcbiAgICAgIDcxLFxuICAgICAgNzUsXG4gICAgICAyNDIsXG4gICAgICAxOTUsXG4gICAgICAyNDQsXG4gICAgICAxMzQsXG4gICAgICA1MyxcbiAgICAgIDE0NSxcbiAgICAgIDE0LFxuICAgICAgMTk2LFxuICAgICAgMjI0LFxuICAgICAgNCxcbiAgICAgIDEwOCxcbiAgICAgIDIxNyxcbiAgICAgIDE3LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJTODFFQTJBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcblxcbvCdka3wnZC08J2RgDDwnZGI8J2RhiBcXG7wnZKB8J2RlvCdkLfwnZGWIPCdkbTwnZGO8J2RmfCdkZbwnZC+XFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vNStkVUNFTG0xOTcwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrcDRyd003NlBYaFRnVnB6SnBqajJMbjR3dUpEbFhKSmdzSWZrY3hDSXZSbU5aL1JoYjI5b0hJbnRvSDNFMFdoUWs1VEh0Y0gwTmVlSStTRVdZZUlEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2ejZHMTE3a0luS1JRcjZMeGNJdXZtVmRXV09SQkEwbzVzVkMzM2Z5dWw2OU92V1ZucjJqZEkxaEtjT2xjSUNrTUZLSjJPcHU4WHJ3a3RoYnJsTzhoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwNDk1NTQ5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
