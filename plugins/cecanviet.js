let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), '𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝐒𝐢𝐨𝐧', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['cecan']
handler.command = /^(cecanvietnam)$/i
handler.limit = 3

module.exports = handler