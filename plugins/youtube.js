const _0x3b62cb=_0x1a1e;(function(_0x59948c,_0xfb8a83){const _0x430b85=_0x1a1e,_0x5e23ce=_0x59948c();while(!![]){try{const _0x393b11=parseInt(_0x430b85(0x196))/0x1+parseInt(_0x430b85(0x18a))/0x2+parseInt(_0x430b85(0x186))/0x3+parseInt(_0x430b85(0x19a))/0x4+parseInt(_0x430b85(0x185))/0x5+-parseInt(_0x430b85(0x189))/0x6+-parseInt(_0x430b85(0x19c))/0x7*(parseInt(_0x430b85(0x188))/0x8);if(_0x393b11===_0xfb8a83)break;else _0x5e23ce['push'](_0x5e23ce['shift']());}catch(_0x14821b){_0x5e23ce['push'](_0x5e23ce['shift']());}}}(_0x345a,0xd88f4));const {cmd,commands}=require(_0x3b62cb(0x18d)),fg=require('api-dylux'),yts=require(_0x3b62cb(0x18e));function extractYouTubeId(_0x26f091){const _0x5e6010=_0x3b62cb,_0x542236=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,_0x1dcfee=_0x26f091[_0x5e6010(0x192)](_0x542236);return _0x1dcfee?_0x1dcfee[0x1]:null;}function _0x345a(){const _0x4cccd7=['\x0a|\x0a|-📉\x20*𝚅𝚒𝚎𝚠𝚜*\x20:\x20','\x0a|__________________________\x0a\x0a>\x20*POWERED\x20by\x20ASITHA-MD*\x0a\x0a','\x0a|\x0a|-📌\x20*𝙰𝚐𝚘*\x20:\x20','log','sendMessage','\x0a*📽️ASITHA-MD\x20VIDEO-DOWNLOADER📽️*\x0a|__________________________\x0a|-ℹ️\x20*𝚃𝚒𝚝𝚕𝚎*\x20:\x20','yta','video/mp4','.mp4','\x0a🎶𝗔𝗦𝗜𝗧𝗛𝗔-𝗠𝗗\x20𝗔𝗨𝗗𝗜𝗢-𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥🎶\x20\x20\x0a|__________________________\x0a|-ℹ️\x20*𝚃𝚒𝚝𝚕𝚎*\x20:\x20','ytv','4503430BsUYdh','3785625XvhbjB','ago','24jtDZQG','10466202XxBOVq','3393214XwqoRZ','audio/mpeg','https://www.youtube.com/watch?v=','../command','yt-search','title','Download\x20YouTube\x20videos\x20as\x20MP3.','views','match','>\x20POWERED\x20by\x20ASITHA-MD','description','url','1380901WBPWUP','videos','Please\x20provide\x20a\x20YouTube\x20URL\x20or\x20title.','timestamp','78420ChdCvF','\x0a|\x0a|-🕘\x20*𝚃𝚒𝚖𝚎*\x20:\x20','6132651PyUqgH'];_0x345a=function(){return _0x4cccd7;};return _0x345a();}function _0x1a1e(_0x2272a1,_0x453e38){const _0x345aed=_0x345a();return _0x1a1e=function(_0x1a1edc,_0x3ac236){_0x1a1edc=_0x1a1edc-0x17e;let _0x3d052f=_0x345aed[_0x1a1edc];return _0x3d052f;},_0x1a1e(_0x2272a1,_0x453e38);}function convertYouTubeLink(_0x52097f){const _0x56d33a=_0x3b62cb,_0x13c874=extractYouTubeId(_0x52097f);if(_0x13c874)return _0x56d33a(0x18c)+_0x13c874;return _0x52097f;}cmd({'pattern':'ytmp3','desc':_0x3b62cb(0x190),'react':'🎵','category':'download','filename':__filename},async(_0x891e95,_0x47fef1,_0x1d0f4f,{from:_0x64329d,quoted:_0x5bb6c7,body:_0x4ece15,isCmd:_0x5f42eb,command:_0x2be891,args:_0x4ae747,q:_0x30f63e,isGroup:_0x3a779e,sender:_0x6decda,senderNumber:_0x45dc6a,botNumber2:_0x1f7370,botNumber:_0xb6656d,pushname:_0x1bde21,isMe:_0x1595b7,isOwner:_0x543444,groupMetadata:_0x3597ab,groupName:_0x5a709b,participants:_0x1ffa76,groupAdmins:_0x3318d8,isBotAdmins:_0x38e2d6,isAdmins:_0x387341,reply:_0x51d27e})=>{const _0x1da376=_0x3b62cb;try{if(!_0x30f63e)return _0x51d27e(_0x1da376(0x198));_0x30f63e=convertYouTubeLink(_0x30f63e);const _0x140da6=await yts(_0x30f63e),_0x19b428=_0x140da6[_0x1da376(0x197)][0x0],_0x3b115c=_0x19b428[_0x1da376(0x195)];let _0x56f4d8=_0x1da376(0x183)+_0x19b428[_0x1da376(0x18f)]+'\x0a|\x0a|-🗒️\x20*Description*\x20:\x20'+_0x19b428['description']+_0x1da376(0x19b)+_0x19b428[_0x1da376(0x199)]+'\x0a|\x0a|-📌\x20*𝙰𝚐𝚘*\x20:\x20'+_0x19b428[_0x1da376(0x187)]+_0x1da376(0x19d)+_0x19b428['views']+_0x1da376(0x19e);await _0x891e95[_0x1da376(0x17e)](_0x64329d,{'image':{'url':_0x19b428['thumbnail']},'caption':_0x56f4d8},{'quoted':_0x47fef1});let _0x38545c=await fg[_0x1da376(0x180)](_0x3b115c),_0x1c6a25=_0x38545c['dl_url'];await _0x891e95[_0x1da376(0x17e)](_0x64329d,{'audio':{'url':_0x1c6a25},'mimetype':_0x1da376(0x18b)},{'quoted':_0x47fef1}),await _0x891e95[_0x1da376(0x17e)](_0x64329d,{'document':{'url':_0x1c6a25},'mimetype':'audio/mpeg','fileName':_0x19b428[_0x1da376(0x18f)]+'.mp3','caption':_0x1da376(0x193)},{'quoted':_0x47fef1});}catch(_0x158c2b){console[_0x1da376(0x1a0)](_0x158c2b),_0x51d27e(''+_0x158c2b);}}),cmd({'pattern':'ytmp4','desc':'Download\x20YouTube\x20videos\x20as\x20MP4.','react':'🎥','category':'download','filename':__filename},async(_0x584d76,_0x5cb4e5,_0x1136b9,{from:_0x3cd97e,quoted:_0x159642,body:_0x265c9e,isCmd:_0x2ce8c5,command:_0x55c642,args:_0x41b33d,q:_0x337b18,isGroup:_0x2dbe71,sender:_0x52412d,senderNumber:_0x460d48,botNumber2:_0x49645c,botNumber:_0x252880,pushname:_0x3c7edc,isMe:_0x226657,isOwner:_0x146615,groupMetadata:_0x28a9d1,groupName:_0x23e063,participants:_0xbd0384,groupAdmins:_0x314d97,isBotAdmins:_0x5e2c4c,isAdmins:_0x4f7a84,reply:_0x2b9cb2})=>{const _0x29880e=_0x3b62cb;try{if(!_0x337b18)return _0x2b9cb2(_0x29880e(0x198));_0x337b18=convertYouTubeLink(_0x337b18);const _0x874ae3=await yts(_0x337b18),_0x10eef4=_0x874ae3['videos'][0x0],_0x24a685=_0x10eef4[_0x29880e(0x195)];let _0x363b9a=_0x29880e(0x17f)+_0x10eef4[_0x29880e(0x18f)]+'\x0a|\x0a|-🗒️\x20*Description*\x20:\x20'+_0x10eef4[_0x29880e(0x194)]+_0x29880e(0x19b)+_0x10eef4[_0x29880e(0x199)]+_0x29880e(0x19f)+_0x10eef4[_0x29880e(0x187)]+'\x0a|\x0a|-📉\x20*𝚅𝚒𝚎𝚠𝚜*\x20:\x20'+_0x10eef4[_0x29880e(0x191)]+_0x29880e(0x19e);await _0x584d76[_0x29880e(0x17e)](_0x3cd97e,{'image':{'url':_0x10eef4['thumbnail']},'caption':_0x363b9a},{'quoted':_0x5cb4e5});let _0xb96fb2=await fg[_0x29880e(0x184)](_0x24a685),_0x181602=_0xb96fb2['dl_url'];await _0x584d76[_0x29880e(0x17e)](_0x3cd97e,{'video':{'url':_0x181602},'mimetype':_0x29880e(0x181)},{'quoted':_0x5cb4e5}),await _0x584d76[_0x29880e(0x17e)](_0x3cd97e,{'document':{'url':_0x181602},'mimetype':'video/mp4','fileName':_0x10eef4[_0x29880e(0x18f)]+_0x29880e(0x182),'caption':_0x29880e(0x193)},{'quoted':_0x5cb4e5});}catch(_0x16a9e4){console[_0x29880e(0x1a0)](_0x16a9e4),_0x2b9cb2(''+_0x16a9e4);}});