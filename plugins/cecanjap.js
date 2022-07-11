let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), '𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝐒𝐢𝐨𝐧', wm, 'NEXT', '.cecanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['cecan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler