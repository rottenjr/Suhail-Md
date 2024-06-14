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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9362599250";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_25_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGclVaSXpQbDVwbkNkZVpoYi9ocFZvQWtTS2FWR3hBdWhxb0JyRmE5SnNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM2MjU5OTI1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEY0NTJDNkNFQzIzQ0RFNTI3RjBCMEUxRTA2RjI1MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzYwNjk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzYyNTk5MjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRUNGRkVGMTU2M0JDMzgyNDk5MjU4N0E4NEQyNzVFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNjA3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid0hLU3M1amxSV1czQnRtVkh3LUxxd1wiLFxuICBcInBob25lSWRcIjogXCJlNTYwZmY2ZC05OTNhLTRkMDQtYWMzMS0yNzZjMTM1MDk1ZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyNDgsXG4gICAgICAxODgsXG4gICAgICAyMTMsXG4gICAgICAxMDMsXG4gICAgICA3NSxcbiAgICAgIDc1LFxuICAgICAgMTg4LFxuICAgICAgMTcwLFxuICAgICAgMTg4LFxuICAgICAgMjQ5LFxuICAgICAgMTExLFxuICAgICAgMTkxLFxuICAgICAgMTgsXG4gICAgICAzMixcbiAgICAgIDU4LFxuICAgICAgMTk4LFxuICAgICAgNixcbiAgICAgIDcxLFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDg0LFxuICAgICAgMTUzLFxuICAgICAgOTAsXG4gICAgICA1NixcbiAgICAgIDk3LFxuICAgICAgMzcsXG4gICAgICAxMTEsXG4gICAgICAyNDAsXG4gICAgICAxNjksXG4gICAgICAxNDUsXG4gICAgICAyNTMsXG4gICAgICAzNSxcbiAgICAgIDkyLFxuICAgICAgMTY2LFxuICAgICAgMTgxLFxuICAgICAgMTM3LFxuICAgICAgMTMsXG4gICAgICAxMDQsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkhWVkEyM0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTM2MjU5OTI1MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc2OTEzOTA1OTk5OTQ2OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJvdHRlbj9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZlBqN2NERVBTMHNMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQxN2VMVFpFbThSaCtxT3gycENUQWVYSDZ6K1o1aUZZZHQwVDlNb01QVjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVc5WlplNXo5N3BEVWpQN1RlWXlyckFZZzJGQ1c5UlFoWmF4clkreFpPblpTOVFvZmtFRklDT1pma2JqdlE5cTFwanlaaXV3OUxKQllBQ3F0SUhZQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEFWVk10c2RoRm92VEQyc1VrZno1ZG9XY2V0c215bTBicjBqRy9XT0dsZDdRMlBlQzFMTUZiVVIyMW5ZWmtXU1dCZjBLQmJnN0s1OGE4N2pNTDJSQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzYyNTk5MjUwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM2MDY5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx4WVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHhZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUdJYmw2N29RRytKV2tzTTBRNXZ2NFRDTjBrUGdLQzBQVnp6UmZZVEE5ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjA5MDU2MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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
