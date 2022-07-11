let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), '𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝐒𝐢𝐨𝐧', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['cecan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

