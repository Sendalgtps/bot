let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝐒𝐢𝐨𝐧', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecansantuy']
handler.tags = ['cecan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler