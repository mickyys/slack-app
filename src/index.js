const SlackBots = require('slackbots');
const request = require('request');

const token = 'xoxb-381560488659-855427695477-jXIfAzl6T0sXlm3r9ujj0exp';
const appName = 'Hampapp';
const channel = 'general';

const bot = new SlackBots({
    token : token,
    name : appName
});

bot.on('open', ()=> {
    console.log('bot inciado');
});

bot.on('start', ()=>{
    bot.postMessageToChannel(channel, 'Holaaa!')
});

bot.on('message', async (data)=>{
    
    if(data.type !== 'message' || data.subtype == 'bot_message' || !data.text){
        return;
    }

    const args = data.text.split(" ");
    const cmd = args.splice(1,1)[0];
    const user = args.splice(0,1)[0];
    const params = args.join('');

    console.log(cmd, params);

    bot.postMessageToChannel(channel, 'generando propuesta');    
    bot.postMessageToChannel(channel, 'propuesta ok'); 
    bot.postMessageToChannel(channel, 'https://www.uv.mx/personal/llopez/files/2013/05/Exam-excel-2l.docx');
            
});