let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'NEXT', '.cecansantuy', m)
}

handler.help = ['cecansantuy']
handler.tags = ['cecan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler
