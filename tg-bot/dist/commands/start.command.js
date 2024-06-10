"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const telegraf_1 = require("telegraf");
const command_class_1 = require("./command.class");
class StartCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.start((ctx) => ctx.reply('Просмотр заявок с сайта', telegraf_1.Markup.inlineKeyboard([
            telegraf_1.Markup.button.callback('Посмотреть все заявки', 'list_applications'),
            telegraf_1.Markup.button.callback('Посмотреть заявки за неделю', 'list_applications_week'),
        ])));
        this.bot.action('list_applications', (ctx) => {
            ctx.session.application;
        });
    }
}
exports.StartCommand = StartCommand;
