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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_02_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTU3LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVYM3NUR1NFbEhYTmdEM2tiZFI2NkMyVm1KN0lsejU4cE5QMEtOcmNvc3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9xY1FlZTFwVHlPY1JfN2lxY2dMNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTc4YjQ1YjMtOWY1My00ZmM4LTk4MGYtYTc4MmE5ZDdmZDY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDQ0LFxuICAgICAgNCxcbiAgICAgIDQwLFxuICAgICAgMTgzLFxuICAgICAgMjEyLFxuICAgICAgODIsXG4gICAgICA2NSxcbiAgICAgIDE4MixcbiAgICAgIDEyOCxcbiAgICAgIDE4LFxuICAgICAgMjUxLFxuICAgICAgMTA4LFxuICAgICAgMjEyLFxuICAgICAgNjgsXG4gICAgICA3OCxcbiAgICAgIDE2MCxcbiAgICAgIDI4LFxuICAgICAgODYsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICA3OSxcbiAgICAgIDkzLFxuICAgICAgMTg5LFxuICAgICAgMSxcbiAgICAgIDIyLFxuICAgICAgOTMsXG4gICAgICAxOTAsXG4gICAgICAyNTQsXG4gICAgICAyNDMsXG4gICAgICAxOTQsXG4gICAgICAxNTAsXG4gICAgICAxMzYsXG4gICAgICA4NixcbiAgICAgIDg3LFxuICAgICAgMTc1LFxuICAgICAgMjQ4LFxuICAgICAgMTE0LFxuICAgICAgODEsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjIzRVhRUFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTM1K2RVQ0VNakY3TDBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlgrTDVpZnJSbFJsaFREbERDQ3FVUXdOTVdZMHd1b2FRT1U5VStrWWF1Y1kvWjlqWkhWQWpCZUZKOWlCK280dXlBamFKbXROVVdRRkVRNHB2ZGJjY0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkN2N0NzK2Z5TTU5RUE3UUZNVTdHanE1K3o2TE9vZDh4REYxMk43eHF2dVRqZ2xYK2I3MHBWMHhiaWU0RUxObjRidExPMmc3dllwRkpvMXV0SWlCK2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDAzMTczODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIS2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhLaS5qc29uIjogIntcImtleURhdGFcIjpcInFuWnB5a3QwekZyeEJOaDhEdUE1aytLcUxrNVI3REswZTdHYWhsbWhpbTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
