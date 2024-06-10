import { Markup, Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Command } from './command.class';

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) =>
      ctx.reply(
        'Просмотр заявок с сайта',
        Markup.inlineKeyboard([
          Markup.button.callback('Посмотреть все заявки', 'list_applications'),
          Markup.button.callback(
            'Посмотреть заявки за неделю',
            'list_applications_week'
          ),
        ])
      )
    );

    this.bot.action('list_applications', (ctx) => {
      ctx.session.application
    });
  }
}
