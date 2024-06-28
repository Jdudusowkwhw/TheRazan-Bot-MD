import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*༺═━━═⊱╊⊰⏣⊱╉⊰═━━═༻*
*۞║مرحباً ${taguse}║۞*
*༺═━━═⊱╊⊰⏣⊱╉⊰═━━═༻*
*«⋅⋄⌊{date}$ ⌉⋅⋄»*
*«⋅⋄⌊ وقت التشغيل ${uptime}⌉⋅⋄»*
*«⋅⋄⌊المستخدمين ${rtotalreg}⌉⋅⋄»*
*༺═━━═⊱╊⊰⏣⊱╉⊰═━━═༻*
*۞║معلوماتك║۞*
*«⋅⋄⌊المستوى ${level}⌉⋅⋄»*
*«⋅⋄⌊خبرتك ${exp}⌉⋅⋄»*
*«⋅⋄⌊رتبتك $ {role}⌉⋅⋄»*
*«⋅⋄⌊الماسك ${limit}⌉⋅⋄»*
*«⋅⋄⌊عملات ${money}⌉⋅⋄»*
*«⋅⋄⌊الرموز ${joincount}⌉⋅⋄»*
*«⋅⋄⌊بريم ${user.premiumTime > 0 ?  ✅  : (isPrems ?  ✅  :  ❌ ) ||   }⌉⋅⋄»*
`.trim()
function _0x14f709(_0xf1e135,_0x157cb6,_0x533a2f,_0x4ce622,_0x300fba){return _0x1d3d(_0x300fba- -0x377,_0xf1e135);}(function(_0x4984ed,_0x414aad){const _0x50cf6c=_0x4984ed();function _0x559247(_0x41f2b8,_0x176ccf,_0x53bc89,_0x4ca161,_0x344b95){return _0x1d3d(_0x41f2b8-0x324,_0x344b95);}function _0x40ceb9(_0x372ce5,_0x2c2ac6,_0x1ec2cc,_0x2f529c,_0x7103f8){return _0x1d3d(_0x2c2ac6-0x3ae,_0x372ce5);}function _0x4c4ef9(_0x41f11f,_0x2bf4b8,_0x412893,_0x323af1,_0x13bf93){return _0x1d3d(_0x2bf4b8-0xe0,_0x13bf93);}function _0x17f194(_0x5aef0d,_0x1e3dde,_0x1d0393,_0x3104d6,_0x40d5c4){return _0x1d3d(_0x3104d6- -0x14d,_0x1d0393);}function _0x524aa4(_0x40b4d1,_0x388102,_0x13ff7c,_0x27439a,_0x3cd5e6){return _0x1d3d(_0x40b4d1- -0x7,_0x388102);}while(!![]){try{const _0x12b37c=-parseInt(_0x559247(0x519,0x4d3,0x4f6,0x510,'KPLB'))/(0x1c9c+0x47*0x73+-0x58*0xb0)*(parseInt(_0x4c4ef9(0x313,0x2aa,0x36e,0x1d0,'x5TB'))/(-0xa0*-0x28+0x3*0xcff+0x5d1*-0xb))+-parseInt(_0x559247(0x62e,0x6e6,0x5db,0x52e,'1tOp'))/(-0x1*0x118f+0x3*0x469+0x65*0xb)+-parseInt(_0x17f194(0x334,0x31c,'Axcn',0x22b,0x271))/(-0xb53*0x3+0x2*0x7c6+0x1*0x1271)+parseInt(_0x17f194(0x15a,-0x4a,'D&O(',0x7a,0x10))/(0x22c5+-0x4*0x577+-0x339*0x4)*(parseInt(_0x4c4ef9(0x461,0x355,0x2bb,0x29d,'wVk$'))/(-0x59*-0x32+-0x23b*0xc+0x968))+parseInt(_0x559247(0x584,0x5b6,0x68c,0x554,'(DKy'))/(-0xd*0x1b2+-0x1008+0x2619)*(-parseInt(_0x40ceb9('W@u#',0x616,0x5b6,0x65c,0x53a))/(0x118+0x2085+-0x2195))+-parseInt(_0x40ceb9('21W@',0x744,0x73d,0x623,0x640))/(-0x1f*-0xc7+0x35*0x80+-0x3290)*(parseInt(_0x524aa4(0x2bc,'EwrY',0x1b1,0x240,0x2b8))/(0x14+-0x3*0x1a5+0x￼￼
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗خطاء❗]', m)
}}
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i
handler.exp = 20
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
