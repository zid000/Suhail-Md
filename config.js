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

 
global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIncwQjM3TjZYNW04djYxRm1PZFJpTzR1cWVtdXpNWGlGLzdma20yeWR4azA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklsN0I2dzE3VFMtM215ZFp4UjlKWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmVkZDQwOTAtOWFlZS00NmE5LWI4YjUtMmIyNGNkN2FhMWUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDEzNixcbiAgICAgIDI1MSxcbiAgICAgIDIwLFxuICAgICAgMjAwLFxuICAgICAgMTgxLFxuICAgICAgOTAsXG4gICAgICAyNTMsXG4gICAgICAxOSxcbiAgICAgIDIyMixcbiAgICAgIDg5LFxuICAgICAgNCxcbiAgICAgIDIyNyxcbiAgICAgIDU0LFxuICAgICAgOTksXG4gICAgICAyMTAsXG4gICAgICAxOTQsXG4gICAgICAyMDAsXG4gICAgICAxMjgsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgNjUsXG4gICAgICA1MSxcbiAgICAgIDE4OSxcbiAgICAgIDIzNyxcbiAgICAgIDEwNSxcbiAgICAgIDExNCxcbiAgICAgIDE4MCxcbiAgICAgIDE0MCxcbiAgICAgIDEwNCxcbiAgICAgIDE3MixcbiAgICAgIDI0MSxcbiAgICAgIDEyOCxcbiAgICAgIDE4NixcbiAgICAgIDk5LFxuICAgICAgOTEsXG4gICAgICAyMjgsXG4gICAgICA3OCxcbiAgICAgIDEsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYTk5ZRFBXNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHY1K2RVQ0VKSzAyNzRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVwYUllTUdzS3gwYnNwM0h4dDdTUk15Z1JueHJEb2RnUlphc0VTUUd4Y2c0UkRQdTliWjVNV2F4dXY5NHFIeUNUTlQ1WWRuUHFJdzM0QUdybWV2Z0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpPVGxuVDlkdUlpd2p1cWtoZE8rMUtrVkZ6ZmpaWXZnM0RlY1lCV2tHVnZIckZKbVBqQXlVWkpqL1htNzJMbGlNSXY3UnRLWXN5T0JlY3JZcU82dmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjEzMzc4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajYvWVBoTytvUStmVm5rUTE1VHlPZlllVDIzcWNDdE1sRE42cVh6TmRGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4ODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
