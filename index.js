const Telegraf = require('telegraf')
const Telegram = require ('telegraf/telegram')

const telegraf = new Telegraf('653606680:AAGA8aIdM-TlnkaEZzhjwurWa63p6H8e89o')
const telegram = new Telegram('653606680:AAGA8aIdM-TlnkaEZzhjwurWa63p6H8e89o')
ptime = ('NULL')
		telegraf.use(async (ctx, next) =>{
			const start = new Date()
			await next()
			ptime = new Date() - start
		})
telegraf.command('hello', (ctx) => ctx.reply('Hello, how are you?'))
telegraf.command('ping', (ctx) => ctx.reply(`Ping time is ${ptime} ms.`))
telegraf.start((ctx) => ctx.reply('Hello there.'))
telegraf.help((ctx) => ctx.reply('Send me msg like - Hi'))
msg_id = telegraf.hears('Hi',(ctx) => ctx.reply('Welcome!'))

telegraf.hears('forward', (ctx) => {
	var forward = ctx.forwardMessage(-1001434305703,653606680,msg_id)
})
telegraf.launch()
console.log('bot is runing')