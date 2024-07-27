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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349118181352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_28_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBjcFFsNzJaaVgvamNxTko5RS9uNFN6SHRiZHg3VVpoK04vY1dmRTNydU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9NcUkxOXM4UUo2aXg4Y3BUd2E3N0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmMxMjQ4ZWQtODMwOC00NDZlLTkyMTMtNWQzN2VmZWI2Yzk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgOCxcbiAgICAgIDk1LFxuICAgICAgMTg2LFxuICAgICAgNDcsXG4gICAgICAyMjgsXG4gICAgICAxOTMsXG4gICAgICAyMzQsXG4gICAgICAxOTIsXG4gICAgICAyMTcsXG4gICAgICAxMzYsXG4gICAgICAxODYsXG4gICAgICAzOSxcbiAgICAgIDI2LFxuICAgICAgNDAsXG4gICAgICAxMzQsXG4gICAgICAyNyxcbiAgICAgIDEwNCxcbiAgICAgIDEzNixcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgODEsXG4gICAgICAxNTcsXG4gICAgICAxLFxuICAgICAgMjM1LFxuICAgICAgMTIwLFxuICAgICAgMjEyLFxuICAgICAgMjQzLFxuICAgICAgMTU2LFxuICAgICAgMTU2LFxuICAgICAgMjE1LFxuICAgICAgOTAsXG4gICAgICA3MCxcbiAgICAgIDIxMyxcbiAgICAgIDExNixcbiAgICAgIDcwLFxuICAgICAgMTMzLFxuICAgICAgODQsXG4gICAgICAxMTEsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5Tkg4UFNNUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExODE4MTM1MjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5NjA2MzkyMjc5MjM4OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtMzUvc0dFSnlGbHJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWTJjbEhNWHp6NzJ4bmgwNjE0eUlxNjJlR3BsRy95OTN2L3hveS9lby9rcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4cUZ1Nk9OdkxyeS8yd1Vud1hlU1VnVHp1ZVdSM0Y1ajZVeXRtbzFJclJIa3NCc1E3VGU1WDFIVUVGSDBvbGoxcXY1SHM2cnZDNmJQYlhzeXRpeWFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrRXdrdlU2TTVNTjNDWFgvZml1QWRGNFc2cWpNZkFGdEh5WG04QU1lMzFpR0l3c1dkM0tvU0dOYmtVTEtuNkFORjBaUUdVenhXZjVxcTFPTkNKVFVpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE4MTgxMzUyOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTIyOTExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2k2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUQ08rQXBqOWFTYVJ4S2JmcmpqZy92L0krMXF6R1didFpzWTBKNXhjUVFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzAyNTcwODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
