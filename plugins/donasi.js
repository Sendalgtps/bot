let handler = async m => m.reply(`
            .✵.Donasi LeaftBot.✵.
        Saweria.co/loxion
         ありがとう 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler