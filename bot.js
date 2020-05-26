const Telegraf = require('telegraf')

const bot = new Telegraf ('1228328347:AAGJYHleUVCl6Yx_Sm6hNWbR77xrzxzDozk')

// Bienvenida
bot.start( (ctx) => {
    ctx.reply('Ola k ase')
})

// Ayuda

bot.help((ctx) => {
    ctx.reply('No hay ayudas')
})

bot.launch()