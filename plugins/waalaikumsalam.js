let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloarie = fs.readFileSync('./mp3/waalaikumsalam.opus') 
conn.sendFile(m.chat, helloarie, '', '', m, true)
//conn.sendMessage(m.chat, helloarie, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloarie }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler