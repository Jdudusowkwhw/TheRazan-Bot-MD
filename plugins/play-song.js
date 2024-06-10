import fg from 'api-dylux';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import yts from 'yt-search';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ];
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ");
    if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`,  m, null, false, {contextInfo: {mentionedJid: conn.parseMention(text)}});

    if (command == "اغنيه" || command == "play2") {
        if (!text) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`,  m);
        await m.react('🕓');
        var res = await yts(text);
        var vid = res.videos[0];
        var q = '128kbps';
        const texto1 = `اغــنيــهة 乂 يـوتـيـوب\n
✩ *العنوان ∙* ${vid.title}\n
✩ *المده ∙* ${vid.timestamp}\n
✩ *المشاهده ∙* ${vid.views}\n
✩ *الفنان ∙* ${vid.author.name}\n
✩ *مده النشر ∙* ${vid.ago}\n
✩ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`.trim();
        
        await conn.sendButton(m.chat, texto1, null, res.videos[0].thumbnail, [
            { buttonId: 'الصوت', buttonText: 'الصوت 📀', type: 1, rowId: `${usedPrefix}mp3 ${text}` },
            { buttonId: 'الفيديو', buttonText: 'الفيديو 🎥', type: 1, rowId: `${usedPrefix}mp4 ${text}` }
        ], null, [
            { buttonId: 'قناتي', buttonText: 'قناتي ⚡', type: 5, url: 'https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x' }
        ], m);
    }
    
    // باقي الكود...
};

handler.help = ["play"].map(v => v + " <formato> <búsqueda>");
handler.tags = ["downloader"];
handler.command = ["اغنيه", "play2", "mp3", "mp4", "mp3doc", "mp4doc"];
handler.star = 2;
export default handler;
