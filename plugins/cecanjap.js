let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), 'NEXT', '.cecanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['cecan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler
