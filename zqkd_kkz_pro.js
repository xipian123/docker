/*
安卓：中青看点看看赚
请勿外传，发现立马失效

不需要捉看看赚body，只需要用到zqkdCookie
目前只能在青龙上使用，需要依赖crypto-js，报错找不到依赖的自行安装
docker exec -it qinglong bash -c "npm install -g crypto-js"
本脚本没有设置重写，请自己复制zq_cookie到青龙环境下使用，多账号用@隔开
例子： export zqkdCookie='uid=xxx&zqkey=yyy&zqkey_id=zzz@uid=aaa&zqkey=bbb&zqkey_id=ccc@uid=qqq&zqkey=sss&zqkey_id=ttt'
*/

const _0x51cfea=_0x2445;(function(_0x56a317,_0x115948){const _0x4e8cbe=_0x2445,_0x2d57d3=_0x56a317();while(!![]){try{const _0x482821=-parseInt(_0x4e8cbe(0x228))/0x1*(-parseInt(_0x4e8cbe(0x1c5))/0x2)+-parseInt(_0x4e8cbe(0x1fd))/0x3+parseInt(_0x4e8cbe(0x1bb))/0x4+-parseInt(_0x4e8cbe(0x207))/0x5+parseInt(_0x4e8cbe(0x246))/0x6*(-parseInt(_0x4e8cbe(0x21c))/0x7)+parseInt(_0x4e8cbe(0x23e))/0x8*(parseInt(_0x4e8cbe(0x1bf))/0x9)+parseInt(_0x4e8cbe(0x1db))/0xa;if(_0x482821===_0x115948)break;else _0x2d57d3['push'](_0x2d57d3['shift']());}catch(_0x50925f){_0x2d57d3['push'](_0x2d57d3['shift']());}}}(_0x3d72,0xdcfec));const jsname=_0x51cfea(0x1fe),$=Env(jsname),notifyFlag=0x1,logDebug=0x0;let notifyStr='',rndtime='',httpResult,CryptoJS=require(_0x51cfea(0x176)),userCookie=($[_0x51cfea(0x1e4)]()?process[_0x51cfea(0x21b)][_0x51cfea(0x1da)]:$[_0x51cfea(0x232)](_0x51cfea(0x1da)))||'',userCookieArr=[],bodyArr=[],userIdx=0x0,allCompFlag=0x0,restNum=0x0,codeName=_0x51cfea(0x186),validCode=![],idStart=0xb54,idEnd=0x1388,idRunList=[],extraList=[0x49e,0x83f],validList=[],validStr='',rewardCount=[],preBody=_0x51cfea(0x23d),bodyTemplate=_0x51cfea(0x1b9),fakeSign=_0x51cfea(0x194),a=_0x51cfea(0x20e),b='jS',c=_0x51cfea(0x187),key=a+b+c;function _0x2445(_0x4cf8b8,_0x587f36){const _0x3d72db=_0x3d72();return _0x2445=function(_0x244527,_0x2974bf){_0x244527=_0x244527-0x176;let _0x45c332=_0x3d72db[_0x244527];return _0x45c332;},_0x2445(_0x4cf8b8,_0x587f36);}!(async()=>{const _0x485d30=_0x51cfea;if(typeof $request!==_0x485d30(0x1a4))$[_0x485d30(0x1b4)](jsname+_0x485d30(0x253));else{await isValidCode();if(validCode==![])return;if(!await checkEnv())return;await initAccountInfo(),await runLookStart(),await getBox(),await getStat();}})()[_0x51cfea(0x206)](_0x5aed09=>$[_0x51cfea(0x22c)](_0x5aed09))[_0x51cfea(0x229)](()=>$[_0x51cfea(0x1fa)]());async function showmsg(){const _0x5ce8e6=_0x51cfea;notifyBody=jsname+_0x5ce8e6(0x1e6)+notifyStr,notifyFlag!=0x1&&console[_0x5ce8e6(0x1c8)](notifyBody),notifyFlag==0x1&&$[_0x5ce8e6(0x1b4)](notifyBody);}async function checkEnv(){const _0x164d39=_0x51cfea;if(userCookie){if(userCookie[_0x164d39(0x1e5)]('@')>-0x1){let _0x12a8c5=userCookie[_0x164d39(0x1c6)]('@');for(let _0x3b51af=0x0;_0x3b51af<_0x12a8c5[_0x164d39(0x1f8)];_0x3b51af++){userCookieArr[_0x164d39(0x1a6)](replaceCookie(_0x12a8c5[_0x3b51af]));}}else userCookieArr[_0x164d39(0x1a6)](replaceCookie(userCookie));}else return console[_0x164d39(0x1c8)](_0x164d39(0x1a0)),![];if(userCookieArr[_0x164d39(0x1f8)]==0x0)return console[_0x164d39(0x1c8)](_0x164d39(0x1bd)),![];for(let _0x4e6bf2=0x0;_0x4e6bf2<extraList[_0x164d39(0x1f8)];_0x4e6bf2++){idRunList[_0x164d39(0x1a6)](extraList[_0x4e6bf2]);}for(let _0x4a7d83=idStart;_0x4a7d83<idEnd;_0x4a7d83++){idRunList[_0x164d39(0x1a6)](_0x4a7d83);}return console[_0x164d39(0x1c8)](_0x164d39(0x1cd)+userCookieArr[_0x164d39(0x1f8)]+_0x164d39(0x1f2)+idRunList[_0x164d39(0x1f8)]+_0x164d39(0x1d8)),!![];}async function initAccountInfo(){const _0x5d7f72=_0x51cfea;for(userIdx=0x0;userIdx<userCookieArr[_0x5d7f72(0x1f8)];userIdx++){rewardCount[_0x5d7f72(0x1a6)](0x0);}}function replaceCookie(_0x52a11d){const _0xadd229=_0x51cfea;let _0x4ca935='',_0x4f0b7e='',_0x2cb3ac='';if(_0x52a11d[_0xadd229(0x1e5)](_0xadd229(0x224))>-0x1)_0x4f0b7e=_0x52a11d[_0xadd229(0x23a)](/zqkey=([\w-]+)/)[0x1];else _0x52a11d[_0xadd229(0x1e5)](_0xadd229(0x24e))>-0x1&&(_0x4f0b7e=_0x52a11d[_0xadd229(0x23a)](/cookie=([\w-]+)/)[0x1]);if(_0x52a11d[_0xadd229(0x1e5)](_0xadd229(0x240))>-0x1)_0x2cb3ac=_0x52a11d[_0xadd229(0x23a)](/zqkey_id=([\w-]+)/)[0x1];else _0x52a11d[_0xadd229(0x1e5)](_0xadd229(0x211))>-0x1&&(_0x2cb3ac=_0x52a11d[_0xadd229(0x23a)](/cookie_id=([\w-]+)/)[0x1]);return _0x52a11d[_0xadd229(0x1e5)](_0xadd229(0x251))>-0x1&&(uid=_0x52a11d[_0xadd229(0x23a)](/uid=([\w-]+)/)[0x1]),_0x4ca935=_0xadd229(0x251)+uid+_0xadd229(0x245)+_0x4f0b7e+_0xadd229(0x1c0)+_0x2cb3ac,_0x4ca935;}function _0x3d72(){const _0x56653b=['getDate','http://','getTime','msg','lodash_set','startTime','status','已完成看看赚[id:','app_name=zqkd_app&app_version=3.6.0&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1031&device_brand=OPPO&device_id=56805603&device_model=OPPO+R9tm&device_platform=android&device_type=android&dpi=480&inner_version=202108181534&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=8cd3b52d8fd6dd9b&os_api=22&os_version=R9tm_11_A.53_191217&request_time=1637250670&resolution=1080x1920&rom_version=R9tm_11_A.53_191217&s_ad=O2JgR8oZr6IU%3DC_rQb0PVGILJXAXRqCK-8mMH6bi0gkt_&s_im=BYFg4QJ5A6eY%3DNy7jQqHtxpkJHJ7qLLev8g%3D%3D&sm_device_id=202111182157042fe759e829fd55d80ca5b5be0858ba1001d4f22d5ae158d7&storage=54.84&','loaddata','3901136EoNwCR',':\x20get请求失败','未找到有效的userCookie','dataFile','7191dyOYAP','&zqkey_id=','null','setval','test','mode','4KySBTW','split','time','log','charAt','setValueForKey','string','isNeedRewrite','共找到','tough-cookie','DES','read_num','lodash_get','call','valueForKey','writeFileSync','replace','join','fetch','个看看赚任务ID','initGotEnv','zqkdCookie','18754470fOZUUI','getSeconds','decrypt','VOG-AL10','cwd','body',':\x20未知错误','打开第','.$1','isNode','indexOf','运行通知\x0a\x0a','--用户','name','abs','cron','CookieJar','readFileSync',',\x20错误!','list','toStr','https://kandian.wkandian.com/v5/nameless/adlickstart.json','所有用户开始一起做看看赚任务[id:','个用户，本次运行将查询','个有效看看赚任务','media-url','map','toObj','https://leafxcy.coding.net/p/validcode/d/validCode/git/raw/master/code.json','length','substr','done','set-cookie','setCookieSync','3743418wWmLVT','中青看点看看赚','error_code','getHours','floor','Utf8','http://kandian.wkandian.com/WebApi/Nameless/getBoxReward?id=','assign','opts','catch','7914615QsUYsl','openUrl',',\x20结束!\x20🕛\x20','Content-Length','非法请求，请检查用户','isMute','的ck','6HP','method','resolve','cookie_id=','logSeparator','==============📣系统通知📣==============','http://kandian.wkandian.com/h5/20190527watchMoney/?','getMinutes','keep-alive','errorMsg','--完成最后一轮阅读','cookieJar','runScript','env','581eenewY','logs','GET',']任务，获得','write','Pkcs7','&task_id=','message','zqkey=','Hex','data','see_num','335143nzLegE','finally','send','获取看看赚宝箱状态失败：','logErr','existsSync','exports','mediaUrl','read','path','getdata','Referer','slice','trim','timeout','getjson','encrypt','isQuanX','match','writedata','Cookie','p=ecTMBiVxDAfc%3D','2672KAdgJC','/v1/scripting/evaluate','zqkey_id=','轮阅读，随机等待','isLoon','redirect','exec','&version_code=63&zqkey=','3756thdyHF','个看看赚宝箱获得：','got','getval','get','Content-Type',',\x20开始!','https://kandian.wkandian.com/v5/nameless/bannerstatus.json','cookie=','http','device_type=android&','uid=','ckjar',':\x20此脚本不做重写，请检查重写设置','isArray','*/*','查询看看赚宝箱状态中...','cktough','getScript','getFullYear','score','url','POST','random','crypto-js',':\x20post请求失败','then','完成看看赚[id:','http://kandian.wkandian.com/WebApi/Nameless/getBoxRewardConf?','statusCode','getMilliseconds','comtele_state','open-url','--完成第','stringify','object','阅读看看赚文章失败：','success','concat','isSurge','zqkd_kkz_pro','ZFH','ciphertext','kandian.wkandian.com','CBC','banner_id',':\x20服务器访问数据为空，请检查自身设备网络情况','本轮共获得了','setjson','Function\x20','application/x-www-form-urlencoded','setdata','qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM','Base64','&sign=53e45deadd5cb9b037dbb7dab097405c','pad','stack','正在查询任务，请耐心等待...','wait','getMonth','post','============================','toString',']，还需阅读','未完成看看赚[id:','https://kandian.wkandian.com/v5/nameless/adlickend.json','未找到userCookie',']，阅读','headers','enc','undefined','android','push','@chavy_boxjs_userCfgs.httpapi_timeout','reduce','@chavy_boxjs_userCfgs.httpapi','领取看看赚宝箱失败：','========================================================','parse','box.dat','items','查询到','完成看看赚任务失败：'];_0x3d72=function(){return _0x56653b;};return _0x3d72();}async function isValidCode(){const _0xe594af=_0x51cfea;let _0x5b43fb=printCaller(),_0x3f43cd={'url':_0xe594af(0x1f7),'headers':''};return new Promise(_0x21b4cc=>{const _0xf968c4=_0xe594af;$[_0xf968c4(0x24a)](_0x3f43cd,async(_0x4cad6a,_0x826d33,_0xb99dd8)=>{const _0x27eb8f=_0xf968c4;try{if(_0x4cad6a)console[_0x27eb8f(0x1c8)](_0x5b43fb+_0x27eb8f(0x177)),console[_0x27eb8f(0x1c8)](JSON[_0x27eb8f(0x180)](_0x4cad6a)),$[_0x27eb8f(0x22c)](_0x4cad6a);else try{let _0x5740da=JSON[_0x27eb8f(0x1ac)](_0xb99dd8);if(logDebug)console[_0x27eb8f(0x1c8)](_0x5740da);_0x5740da[''+codeName]&&_0x5740da[''+codeName]==0x1?(validCode=!![],console[_0x27eb8f(0x1c8)](_0x5740da[_0x27eb8f(0x1b4)])):console[_0x27eb8f(0x1c8)](_0x5740da[_0x27eb8f(0x217)]);}catch(_0x2a8750){$[_0x27eb8f(0x22c)](_0x2a8750,_0x826d33);}finally{_0x21b4cc();}}catch(_0x341072){$[_0x27eb8f(0x22c)](_0x341072,_0x826d33);}finally{_0x21b4cc();}});});}async function encodeUserBody(_0xd9b04b,_0x479536){const _0x46ce1a=_0x51cfea;return replacedStr=bodyTemplate+(_0x46ce1a(0x222)+_0x479536+'&')+userCookieArr[_0xd9b04b]+fakeSign,encodeBody=EncFunc(replacedStr),hexBody=CryptoJS[_0x46ce1a(0x1a3)][_0x46ce1a(0x225)][_0x46ce1a(0x1ac)](encodeBody),base64Body=CryptoJS[_0x46ce1a(0x1a3)][_0x46ce1a(0x193)][_0x46ce1a(0x180)](hexBody),replaceBody3=base64Body[_0x46ce1a(0x1d5)](/\+/g,'-'),replaceBody4=replaceBody3[_0x46ce1a(0x1d5)](/\//g,'_'),finalBody=encodeURIComponent(replaceBody4),finalBody=preBody+finalBody+randomString(0x1),finalBody;}async function runLookStart(){const _0x13d10d=_0x51cfea;for(let _0x342896=0x0;_0x342896<idRunList[_0x13d10d(0x1f8)];_0x342896++){let _0x163527=idRunList[_0x342896];if(_0x342896%0x14==0x0)console[_0x13d10d(0x1c8)](_0x13d10d(0x197));allCompFlag=0x1,restNum=0x0,bodyArr=[],compArr=[];for(userIdx=0x0;userIdx<userCookieArr[_0x13d10d(0x1f8)];userIdx++){let _0x58acff=await encodeUserBody(userIdx,_0x163527),_0x12ef59=await adlickstart(_0x58acff,_0x163527);if(userIdx==0x0&&_0x12ef59)validList[_0x13d10d(0x1a6)](_0x163527);if(userIdx==0x0&&!_0x12ef59)allCompFlag=0x1;bodyArr[_0x13d10d(0x1a6)](_0x58acff);}if(allCompFlag==0x1)continue;console[_0x13d10d(0x1c8)](_0x13d10d(0x1f1)+_0x163527+_0x13d10d(0x1a1)+restNum+'次');for(let _0x5f3b5c=0x0;_0x5f3b5c<restNum;_0x5f3b5c++){for(userIdx=0x0;userIdx<userCookieArr[_0x13d10d(0x1f8)];userIdx++){if(compArr[userIdx]==0x1)await readLookStartArt(bodyArr[userIdx],_0x5f3b5c);}if(_0x5f3b5c==restNum-0x1)console[_0x13d10d(0x1c8)](_0x13d10d(0x218));else{let _0x1c229b=Math[_0x13d10d(0x201)](Math[_0x13d10d(0x25d)]()*0x7d0)+0x1770;console[_0x13d10d(0x1c8)](_0x13d10d(0x17f)+(_0x5f3b5c+0x1)+_0x13d10d(0x241)+_0x1c229b+'ms'),await $[_0x13d10d(0x198)](_0x1c229b);}}for(userIdx=0x0;userIdx<userCookieArr[_0x13d10d(0x1f8)];userIdx++){if(compArr[userIdx]==0x1)await adlickend(bodyArr[userIdx]);}}}async function getStat(){const _0x25d911=_0x51cfea;console[_0x25d911(0x1c8)](_0x25d911(0x19b));for(userIdx=0x0;userIdx<userCookieArr[_0x25d911(0x1f8)];userIdx++){console[_0x25d911(0x1c8)]('账号'+(userIdx+0x1)+_0x25d911(0x18d)+rewardCount[userIdx]+'金币');}console[_0x25d911(0x1c8)](_0x25d911(0x19b));for(let _0x207fdd=0x0;_0x207fdd<validList[_0x25d911(0x1f8)];_0x207fdd++){validStr+=validList[_0x207fdd]+'\x20';}console[_0x25d911(0x1c8)](_0x25d911(0x1af)+validList[_0x25d911(0x1f8)]+_0x25d911(0x1f3)),console[_0x25d911(0x1c8)](validStr);}async function adlickstart(_0x1a0dff,_0x41472e){const _0x477b60=_0x51cfea;let _0x52266c=printCaller(),_0x5abef2=_0x477b60(0x1f0),_0x1fb8d1=populatePostUrl(_0x5abef2,_0x1a0dff);await httpPost(_0x1fb8d1,_0x52266c);let _0x37b218=httpResult;if(!_0x37b218)return compArr[_0x477b60(0x1a6)](0x0),![];if(_0x37b218[_0x477b60(0x183)]==!![]){if(_0x37b218[_0x477b60(0x1ae)][_0x477b60(0x17d)]==0x0){allCompFlag=0x0,compArr[_0x477b60(0x1a6)](0x1);let _0x42ca13=_0x37b218[_0x477b60(0x1ae)][_0x477b60(0x227)]-_0x37b218[_0x477b60(0x1ae)][_0x477b60(0x1d0)];if(_0x42ca13==0x0)_0x42ca13=0x1;restNum=_0x42ca13>restNum?_0x42ca13:restNum,console[_0x477b60(0x1c8)]('用户'+(userIdx+0x1)+_0x477b60(0x19e)+_0x41472e+_0x477b60(0x19d)+_0x42ca13+'次');}else compArr[_0x477b60(0x1a6)](0x0),console[_0x477b60(0x1c8)]('用户'+(userIdx+0x1)+_0x477b60(0x1b8)+_0x41472e+']');}else{compArr[_0x477b60(0x1a6)](0x0);if(_0x37b218[_0x477b60(0x1ff)]==0x30d41)console[_0x477b60(0x1c8)](_0x477b60(0x20b)+(userIdx+0x1)+_0x477b60(0x20d));return![];}return!![];}async function readLookStartArt(_0x526993){const _0x19aa76=_0x51cfea;let _0x3c4715=printCaller(),_0xeb3970=_0x19aa76(0x24d),_0x280f13=populatePostUrl(_0xeb3970,_0x526993);await httpPost(_0x280f13,_0x3c4715);let _0x230c10=httpResult;if(!_0x230c10)return;_0x230c10[_0x19aa76(0x183)]!=!![]&&console[_0x19aa76(0x1c8)](_0x19aa76(0x1e7)+(userIdx+0x1)+_0x19aa76(0x182)+_0x230c10[_0x19aa76(0x223)]);}async function adlickend(_0x25a548){const _0x2ab9b1=_0x51cfea;let _0x4bf2a7=printCaller(),_0x73f874=_0x2ab9b1(0x19f),_0x4aac87=populatePostUrl(_0x73f874,_0x25a548);await httpPost(_0x4aac87,_0x4bf2a7);let _0x53babc=httpResult;if(!_0x53babc)return;_0x53babc[_0x2ab9b1(0x183)]==!![]?(console[_0x2ab9b1(0x1c8)]('用户'+(userIdx+0x1)+_0x2ab9b1(0x179)+_0x53babc[_0x2ab9b1(0x1ae)][_0x2ab9b1(0x18b)]+_0x2ab9b1(0x21f)+_0x53babc[_0x2ab9b1(0x1ae)][_0x2ab9b1(0x25a)]+'金币'),rewardCount[userIdx]+=parseInt(_0x53babc[_0x2ab9b1(0x1ae)][_0x2ab9b1(0x25a)])):console[_0x2ab9b1(0x1c8)]('用户'+(userIdx+0x1)+_0x2ab9b1(0x1b0)+_0x53babc[_0x2ab9b1(0x223)]);}async function getBox(){const _0x8eaa44=_0x51cfea;console[_0x8eaa44(0x1c8)](_0x8eaa44(0x1ab));for(userIdx=0x0;userIdx<userCookieArr[_0x8eaa44(0x1f8)];userIdx++){console[_0x8eaa44(0x1c8)]('账号'+(userIdx+0x1)+_0x8eaa44(0x256)),await getBoxRewardConf();}}async function getBoxRewardConf(){const _0xda9acd=_0x51cfea;let _0xa4936a=printCaller(),_0x8166a=_0xda9acd(0x250)+userCookieArr[userIdx],_0x26a6c4=_0xda9acd(0x17a)+_0x8166a,_0x458be9=populateGetUrl(_0x26a6c4);_0x458be9[_0xda9acd(0x1a2)][_0xda9acd(0x233)]=_0xda9acd(0x214)+_0x8166a,await httpGet(_0x458be9,_0xa4936a);let _0x44e02d=httpResult;if(!_0x44e02d)return;if(_0x44e02d[_0xda9acd(0x1b7)]==0x1){if(_0x44e02d[_0xda9acd(0x226)]&&_0x44e02d[_0xda9acd(0x226)][_0xda9acd(0x1ee)]&&Array[_0xda9acd(0x254)](_0x44e02d[_0xda9acd(0x226)][_0xda9acd(0x1ee)]))for(let _0x347874=0x0;_0x347874<_0x44e02d[_0xda9acd(0x226)][_0xda9acd(0x1ee)][_0xda9acd(0x1f8)];_0x347874++){let _0x1fceb0=_0x44e02d[_0xda9acd(0x226)][_0xda9acd(0x1ee)][_0x347874];_0x1fceb0[_0xda9acd(0x1b7)]==0x1&&(await $[_0xda9acd(0x198)](Math[_0xda9acd(0x201)](Math[_0xda9acd(0x25d)]()*0x7d0)+0x7d00),await getBoxReward(_0x1fceb0['id']));}}else console[_0xda9acd(0x1c8)](_0xda9acd(0x22b)+_0x44e02d[_0xda9acd(0x223)]);}async function getBoxReward(_0x5536b4){const _0x36459b=_0x51cfea;let _0x5088d6=printCaller(),_0x347254=_0x36459b(0x250)+userCookieArr[userIdx],_0x139a0b=_0x36459b(0x203)+_0x5536b4+'&'+_0x347254,_0x475567=populateGetUrl(_0x139a0b);_0x475567[_0x36459b(0x1a2)][_0x36459b(0x233)]=_0x36459b(0x214)+_0x347254,await httpGet(_0x475567,_0x5088d6);let _0x4820fe=httpResult;if(!_0x4820fe)return;_0x4820fe[_0x36459b(0x1b7)]==0x1?(console[_0x36459b(0x1c8)](_0x36459b(0x1e2)+(_0x5536b4+0x1)+_0x36459b(0x247)+_0x4820fe[_0x36459b(0x226)]+'金币'),rewardCount[userIdx]+=parseInt(_0x4820fe[_0x36459b(0x226)])):console[_0x36459b(0x1c8)](_0x36459b(0x1aa)+_0x4820fe[_0x36459b(0x223)]);}function populatePostUrl(_0x31c96a,_0x3124c0){const _0x565569=_0x51cfea;let _0xfd0a45=Math[_0x565569(0x201)](new Date()[_0x565569(0x1b3)]()/0x3e8),_0x3484f7={'url':_0x31c96a,'headers':{'request_time':_0xfd0a45,'Host':_0x565569(0x189),'device-model':_0x565569(0x1de),'device-platform':_0x565569(0x1a5),'Connection':_0x565569(0x216)},'body':_0x3124c0};return _0x3484f7;}function populateGetUrl(_0x3ee03c){const _0x585f2a=_0x51cfea;let _0x1213c4=Math[_0x585f2a(0x201)](new Date()[_0x585f2a(0x1b3)]()/0x3e8),_0x5c1813={'url':_0x3ee03c,'headers':{'request_time':_0x1213c4,'Host':_0x585f2a(0x189),'device-model':_0x585f2a(0x1de),'device-platform':_0x585f2a(0x1a5),'Connection':_0x585f2a(0x216)}};return _0x5c1813;}async function httpPost(_0xc1def7,_0x5361a8){return httpResult=null,new Promise(_0x16cfd2=>{const _0x5009b8=_0x2445;$[_0x5009b8(0x19a)](_0xc1def7,async(_0xee5d09,_0x4af325,_0x40e315)=>{const _0x1bfbee=_0x5009b8;try{if(_0xee5d09)console[_0x1bfbee(0x1c8)](_0x5361a8+_0x1bfbee(0x177)),console[_0x1bfbee(0x1c8)](JSON[_0x1bfbee(0x180)](_0xee5d09)),$[_0x1bfbee(0x22c)](_0xee5d09);else{if(safeGet(_0x40e315)){httpResult=JSON[_0x1bfbee(0x1ac)](_0x40e315);if(logDebug)console[_0x1bfbee(0x1c8)](httpResult);}}}catch(_0xa81006){$[_0x1bfbee(0x22c)](_0xa81006,_0x4af325);}finally{_0x16cfd2();}});});}async function httpGet(_0x2b8c53,_0x5cfb5c){return httpResult=null,new Promise(_0x2928aa=>{const _0x33abe3=_0x2445;$[_0x33abe3(0x24a)](_0x2b8c53,async(_0x382d96,_0x32097e,_0x13d8d7)=>{const _0x361623=_0x33abe3;try{if(_0x382d96)console[_0x361623(0x1c8)](_0x5cfb5c+_0x361623(0x1bc)),console[_0x361623(0x1c8)](JSON[_0x361623(0x180)](_0x382d96)),$[_0x361623(0x22c)](_0x382d96);else{if(safeGet(_0x13d8d7,_0x5cfb5c)){httpResult=JSON[_0x361623(0x1ac)](_0x13d8d7);if(logDebug)console[_0x361623(0x1c8)](httpResult);}}}catch(_0x1938c1){$[_0x361623(0x22c)](_0x1938c1,_0x32097e);}finally{_0x2928aa();}});});}function safeGet(_0x46d2a0,_0x1c3061){const _0xd07de2=_0x51cfea;try{if(typeof JSON[_0xd07de2(0x1ac)](_0x46d2a0)==_0xd07de2(0x181))return!![];else console[_0xd07de2(0x1c8)](_0xd07de2(0x18f)+_0x1c3061+_0xd07de2(0x1e1)),console[_0xd07de2(0x1c8)](_0x46d2a0);}catch(_0x3f6791){return console[_0xd07de2(0x1c8)](_0x3f6791),console[_0xd07de2(0x1c8)](_0xd07de2(0x18f)+_0x1c3061+_0xd07de2(0x18c)),![];}}function printCaller(){const _0x48b008=_0x51cfea;return new Error()[_0x48b008(0x196)][_0x48b008(0x1c6)]('\x0a')[0x2][_0x48b008(0x235)]()[_0x48b008(0x1c6)]('\x20')[0x1];}function EncFunc(_0x264be8){const _0x4bb398=_0x51cfea;var _0x33dc31=CryptoJS[_0x4bb398(0x1a3)][_0x4bb398(0x202)][_0x4bb398(0x1ac)](key),_0x5a3129=CryptoJS[_0x4bb398(0x1a3)][_0x4bb398(0x202)][_0x4bb398(0x1ac)](key),_0x50b2af=CryptoJS[_0x4bb398(0x1a3)][_0x4bb398(0x202)][_0x4bb398(0x1ac)](_0x264be8);return encrypted=CryptoJS[_0x4bb398(0x1cf)][_0x4bb398(0x238)](_0x50b2af,_0x33dc31,{'iv':_0x5a3129,'mode':CryptoJS[_0x4bb398(0x1c4)][_0x4bb398(0x18a)],'padding':CryptoJS[_0x4bb398(0x195)][_0x4bb398(0x221)]}),encrypted[_0x4bb398(0x188)][_0x4bb398(0x19c)]();}function DecFunc(_0x31b3f1){const _0x28930a=_0x51cfea;var _0x2c2ce1=CryptoJS[_0x28930a(0x1a3)][_0x28930a(0x202)][_0x28930a(0x1ac)](key),_0x10e22a=CryptoJS[_0x28930a(0x1a3)][_0x28930a(0x202)][_0x28930a(0x1ac)](key),_0x5926b9=CryptoJS[_0x28930a(0x1cf)][_0x28930a(0x1dd)]({'ciphertext':CryptoJS[_0x28930a(0x1a3)][_0x28930a(0x193)][_0x28930a(0x1ac)](_0x31b3f1)},_0x2c2ce1,{'iv':_0x10e22a,'mode':CryptoJS[_0x28930a(0x1c4)][_0x28930a(0x18a)],'padding':CryptoJS[_0x28930a(0x195)][_0x28930a(0x221)]});return _0x5926b9[_0x28930a(0x19c)](CryptoJS[_0x28930a(0x1a3)][_0x28930a(0x202)]);}function randomString(_0x46b85d=0xc){const _0x25ac0a=_0x51cfea;let _0x44e1b8=_0x25ac0a(0x192),_0x5b6414=_0x44e1b8[_0x25ac0a(0x1f8)],_0xb27675='';for(i=0x0;i<_0x46b85d;i++){_0xb27675+=_0x44e1b8[_0x25ac0a(0x1c9)](Math[_0x25ac0a(0x201)](Math[_0x25ac0a(0x25d)]()*_0x5b6414));}return _0xb27675;}function Env(_0x4917c4,_0x500aed){const _0x223a78=_0x51cfea;class _0x144427{constructor(_0x2331a4){const _0x29e917=_0x2445;this[_0x29e917(0x21b)]=_0x2331a4;}[_0x223a78(0x22a)](_0x4f994c,_0x72152b=_0x223a78(0x21e)){const _0x11b1d4=_0x223a78;_0x4f994c=_0x11b1d4(0x1cb)==typeof _0x4f994c?{'url':_0x4f994c}:_0x4f994c;let _0xef44e8=this[_0x11b1d4(0x24a)];return _0x11b1d4(0x25c)===_0x72152b&&(_0xef44e8=this[_0x11b1d4(0x19a)]),new Promise((_0xdfd812,_0x3ab220)=>{const _0x1ea191=_0x11b1d4;_0xef44e8[_0x1ea191(0x1d2)](this,_0x4f994c,(_0x1e23ce,_0x5ebf24,_0x597347)=>{_0x1e23ce?_0x3ab220(_0x1e23ce):_0xdfd812(_0x5ebf24);});});}[_0x223a78(0x24a)](_0xb9923e){const _0x32e52e=_0x223a78;return this[_0x32e52e(0x22a)][_0x32e52e(0x1d2)](this[_0x32e52e(0x21b)],_0xb9923e);}[_0x223a78(0x19a)](_0xffa5a2){const _0x3c63d9=_0x223a78;return this[_0x3c63d9(0x22a)][_0x3c63d9(0x1d2)](this[_0x3c63d9(0x21b)],_0xffa5a2,_0x3c63d9(0x25c));}}return new class{constructor(_0x4c0eae,_0x553a3f){const _0x281c74=_0x223a78;this[_0x281c74(0x1e8)]=_0x4c0eae,this[_0x281c74(0x24f)]=new _0x144427(this),this[_0x281c74(0x226)]=null,this[_0x281c74(0x1be)]=_0x281c74(0x1ad),this[_0x281c74(0x21d)]=[],this[_0x281c74(0x20c)]=!0x1,this[_0x281c74(0x1cc)]=!0x1,this[_0x281c74(0x212)]='\x0a',this[_0x281c74(0x1b6)]=new Date()[_0x281c74(0x1b3)](),Object[_0x281c74(0x204)](this,_0x553a3f),this[_0x281c74(0x1c8)]('','🔔'+this[_0x281c74(0x1e8)]+_0x281c74(0x24c));}[_0x223a78(0x1e4)](){const _0x46603c=_0x223a78;return _0x46603c(0x1a4)!=typeof module&&!!module[_0x46603c(0x22e)];}[_0x223a78(0x239)](){const _0x3a3285=_0x223a78;return _0x3a3285(0x1a4)!=typeof $task;}[_0x223a78(0x185)](){const _0x266e52=_0x223a78;return _0x266e52(0x1a4)!=typeof $httpClient&&_0x266e52(0x1a4)==typeof $loon;}[_0x223a78(0x242)](){const _0x5d557b=_0x223a78;return _0x5d557b(0x1a4)!=typeof $loon;}[_0x223a78(0x1f6)](_0x4a969b,_0x2906a8=null){const _0x36cde4=_0x223a78;try{return JSON[_0x36cde4(0x1ac)](_0x4a969b);}catch{return _0x2906a8;}}[_0x223a78(0x1ef)](_0xfd5288,_0x1a54bd=null){const _0x532eb4=_0x223a78;try{return JSON[_0x532eb4(0x180)](_0xfd5288);}catch{return _0x1a54bd;}}[_0x223a78(0x237)](_0x23efba,_0x12e2f3){const _0x18bedd=_0x223a78;let _0xc0d7cd=_0x12e2f3;const _0x3060de=this[_0x18bedd(0x232)](_0x23efba);if(_0x3060de)try{_0xc0d7cd=JSON[_0x18bedd(0x1ac)](this[_0x18bedd(0x232)](_0x23efba));}catch{}return _0xc0d7cd;}[_0x223a78(0x18e)](_0x59987a,_0x1f4c1f){const _0x1d2fe0=_0x223a78;try{return this[_0x1d2fe0(0x191)](JSON[_0x1d2fe0(0x180)](_0x59987a),_0x1f4c1f);}catch{return!0x1;}}[_0x223a78(0x258)](_0x3161b2){return new Promise(_0x4da45b=>{const _0x2b3916=_0x2445;this[_0x2b3916(0x24a)]({'url':_0x3161b2},(_0x1a611c,_0x26a634,_0x212166)=>_0x4da45b(_0x212166));});}[_0x223a78(0x21a)](_0x5a0fe6,_0x3437fa){const _0x47f66f=_0x223a78;return new Promise(_0x39a0a5=>{const _0x3d0a63=_0x2445;let _0x36fce7=this[_0x3d0a63(0x232)](_0x3d0a63(0x1a9));_0x36fce7=_0x36fce7?_0x36fce7[_0x3d0a63(0x1d5)](/\n/g,'')[_0x3d0a63(0x235)]():_0x36fce7;let _0x82077b=this[_0x3d0a63(0x232)](_0x3d0a63(0x1a7));_0x82077b=_0x82077b?0x1*_0x82077b:0x14,_0x82077b=_0x3437fa&&_0x3437fa[_0x3d0a63(0x236)]?_0x3437fa[_0x3d0a63(0x236)]:_0x82077b;const [_0x3a427e,_0x398cf7]=_0x36fce7[_0x3d0a63(0x1c6)]('@'),_0x51de82={'url':_0x3d0a63(0x1b2)+_0x398cf7+_0x3d0a63(0x23f),'body':{'script_text':_0x5a0fe6,'mock_type':_0x3d0a63(0x1ea),'timeout':_0x82077b},'headers':{'X-Key':_0x3a427e,'Accept':_0x3d0a63(0x255)}};this[_0x3d0a63(0x19a)](_0x51de82,(_0x1669ac,_0x43a050,_0x33b1da)=>_0x39a0a5(_0x33b1da));})[_0x47f66f(0x206)](_0x49326d=>this[_0x47f66f(0x22c)](_0x49326d));}[_0x223a78(0x1ba)](){const _0x4d12ad=_0x223a78;if(!this[_0x4d12ad(0x1e4)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x4d12ad(0x231)]=this[_0x4d12ad(0x231)]?this[_0x4d12ad(0x231)]:require(_0x4d12ad(0x231));const _0xf5d19=this[_0x4d12ad(0x231)][_0x4d12ad(0x210)](this[_0x4d12ad(0x1be)]),_0x205181=this[_0x4d12ad(0x231)][_0x4d12ad(0x210)](process[_0x4d12ad(0x1df)](),this[_0x4d12ad(0x1be)]),_0x96836a=this['fs'][_0x4d12ad(0x22d)](_0xf5d19),_0x4cb0e5=!_0x96836a&&this['fs'][_0x4d12ad(0x22d)](_0x205181);if(!_0x96836a&&!_0x4cb0e5)return{};{const _0x2cb3de=_0x96836a?_0xf5d19:_0x205181;try{return JSON[_0x4d12ad(0x1ac)](this['fs'][_0x4d12ad(0x1ec)](_0x2cb3de));}catch(_0xa5e99){return{};}}}}[_0x223a78(0x23b)](){const _0x51d750=_0x223a78;if(this[_0x51d750(0x1e4)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x51d750(0x231)]=this[_0x51d750(0x231)]?this[_0x51d750(0x231)]:require(_0x51d750(0x231));const _0x1c441f=this[_0x51d750(0x231)][_0x51d750(0x210)](this[_0x51d750(0x1be)]),_0x2b14eb=this[_0x51d750(0x231)][_0x51d750(0x210)](process[_0x51d750(0x1df)](),this[_0x51d750(0x1be)]),_0x5e7d66=this['fs'][_0x51d750(0x22d)](_0x1c441f),_0x15d66d=!_0x5e7d66&&this['fs'][_0x51d750(0x22d)](_0x2b14eb),_0x258ea9=JSON[_0x51d750(0x180)](this[_0x51d750(0x226)]);_0x5e7d66?this['fs'][_0x51d750(0x1d4)](_0x1c441f,_0x258ea9):_0x15d66d?this['fs'][_0x51d750(0x1d4)](_0x2b14eb,_0x258ea9):this['fs'][_0x51d750(0x1d4)](_0x1c441f,_0x258ea9);}}[_0x223a78(0x1d1)](_0x3e7bf7,_0x195cf1,_0x8576d8){const _0x431d4b=_0x223a78,_0x256186=_0x195cf1[_0x431d4b(0x1d5)](/\[(\d+)\]/g,_0x431d4b(0x1e3))[_0x431d4b(0x1c6)]('.');let _0x39cbfc=_0x3e7bf7;for(const _0xc66a85 of _0x256186)if(_0x39cbfc=Object(_0x39cbfc)[_0xc66a85],void 0x0===_0x39cbfc)return _0x8576d8;return _0x39cbfc;}[_0x223a78(0x1b5)](_0x3ccff0,_0x2a8e66,_0x466fe1){const _0x34ca87=_0x223a78;return Object(_0x3ccff0)!==_0x3ccff0?_0x3ccff0:(Array[_0x34ca87(0x254)](_0x2a8e66)||(_0x2a8e66=_0x2a8e66[_0x34ca87(0x19c)]()[_0x34ca87(0x23a)](/[^.[\]]+/g)||[]),_0x2a8e66[_0x34ca87(0x234)](0x0,-0x1)[_0x34ca87(0x1a8)]((_0xe760d,_0x2458a3,_0x598d98)=>Object(_0xe760d[_0x2458a3])===_0xe760d[_0x2458a3]?_0xe760d[_0x2458a3]:_0xe760d[_0x2458a3]=Math[_0x34ca87(0x1e9)](_0x2a8e66[_0x598d98+0x1])>>0x0==+_0x2a8e66[_0x598d98+0x1]?[]:{},_0x3ccff0)[_0x2a8e66[_0x2a8e66[_0x34ca87(0x1f8)]-0x1]]=_0x466fe1,_0x3ccff0);}[_0x223a78(0x232)](_0x42e848){const _0x4d6fb6=_0x223a78;let _0x51ea85=this[_0x4d6fb6(0x249)](_0x42e848);if(/^@/[_0x4d6fb6(0x1c3)](_0x42e848)){const [,_0x7a8811,_0x407e4d]=/^@(.*?)\.(.*?)$/[_0x4d6fb6(0x244)](_0x42e848),_0x57ead4=_0x7a8811?this[_0x4d6fb6(0x249)](_0x7a8811):'';if(_0x57ead4)try{const _0x33e94b=JSON[_0x4d6fb6(0x1ac)](_0x57ead4);_0x51ea85=_0x33e94b?this[_0x4d6fb6(0x1d1)](_0x33e94b,_0x407e4d,''):_0x51ea85;}catch(_0x1a5987){_0x51ea85='';}}return _0x51ea85;}[_0x223a78(0x191)](_0x240aab,_0x4ce9b4){const _0x2d83b2=_0x223a78;let _0x45085e=!0x1;if(/^@/[_0x2d83b2(0x1c3)](_0x4ce9b4)){const [,_0x2ef30a,_0x95385c]=/^@(.*?)\.(.*?)$/[_0x2d83b2(0x244)](_0x4ce9b4),_0x2ff1d1=this[_0x2d83b2(0x249)](_0x2ef30a),_0x28df25=_0x2ef30a?_0x2d83b2(0x1c1)===_0x2ff1d1?null:_0x2ff1d1||'{}':'{}';try{const _0x1fd01f=JSON[_0x2d83b2(0x1ac)](_0x28df25);this[_0x2d83b2(0x1b5)](_0x1fd01f,_0x95385c,_0x240aab),_0x45085e=this[_0x2d83b2(0x1c2)](JSON[_0x2d83b2(0x180)](_0x1fd01f),_0x2ef30a);}catch(_0x52f6ce){const _0x410569={};this[_0x2d83b2(0x1b5)](_0x410569,_0x95385c,_0x240aab),_0x45085e=this[_0x2d83b2(0x1c2)](JSON[_0x2d83b2(0x180)](_0x410569),_0x2ef30a);}}else _0x45085e=this[_0x2d83b2(0x1c2)](_0x240aab,_0x4ce9b4);return _0x45085e;}[_0x223a78(0x249)](_0x57f072){const _0x16ab5f=_0x223a78;return this[_0x16ab5f(0x185)]()||this[_0x16ab5f(0x242)]()?$persistentStore[_0x16ab5f(0x230)](_0x57f072):this[_0x16ab5f(0x239)]()?$prefs[_0x16ab5f(0x1d3)](_0x57f072):this[_0x16ab5f(0x1e4)]()?(this[_0x16ab5f(0x226)]=this[_0x16ab5f(0x1ba)](),this[_0x16ab5f(0x226)][_0x57f072]):this[_0x16ab5f(0x226)]&&this[_0x16ab5f(0x226)][_0x57f072]||null;}[_0x223a78(0x1c2)](_0x3eaae9,_0x443aac){const _0x27d70c=_0x223a78;return this[_0x27d70c(0x185)]()||this[_0x27d70c(0x242)]()?$persistentStore[_0x27d70c(0x220)](_0x3eaae9,_0x443aac):this[_0x27d70c(0x239)]()?$prefs[_0x27d70c(0x1ca)](_0x3eaae9,_0x443aac):this[_0x27d70c(0x1e4)]()?(this[_0x27d70c(0x226)]=this[_0x27d70c(0x1ba)](),this[_0x27d70c(0x226)][_0x443aac]=_0x3eaae9,this[_0x27d70c(0x23b)](),!0x0):this[_0x27d70c(0x226)]&&this[_0x27d70c(0x226)][_0x443aac]||null;}[_0x223a78(0x1d9)](_0x1dca64){const _0x446753=_0x223a78;this[_0x446753(0x248)]=this[_0x446753(0x248)]?this[_0x446753(0x248)]:require(_0x446753(0x248)),this[_0x446753(0x257)]=this[_0x446753(0x257)]?this[_0x446753(0x257)]:require(_0x446753(0x1ce)),this[_0x446753(0x252)]=this[_0x446753(0x252)]?this[_0x446753(0x252)]:new this[(_0x446753(0x257))][(_0x446753(0x1eb))](),_0x1dca64&&(_0x1dca64[_0x446753(0x1a2)]=_0x1dca64[_0x446753(0x1a2)]?_0x1dca64[_0x446753(0x1a2)]:{},void 0x0===_0x1dca64[_0x446753(0x1a2)][_0x446753(0x23c)]&&void 0x0===_0x1dca64[_0x446753(0x219)]&&(_0x1dca64[_0x446753(0x219)]=this[_0x446753(0x252)]));}[_0x223a78(0x24a)](_0x4ed287,_0x52ac8d=()=>{}){const _0x5ef9f5=_0x223a78;_0x4ed287[_0x5ef9f5(0x1a2)]&&(delete _0x4ed287[_0x5ef9f5(0x1a2)][_0x5ef9f5(0x24b)],delete _0x4ed287[_0x5ef9f5(0x1a2)][_0x5ef9f5(0x20a)]),this[_0x5ef9f5(0x185)]()||this[_0x5ef9f5(0x242)]()?(this[_0x5ef9f5(0x185)]()&&this[_0x5ef9f5(0x1cc)]&&(_0x4ed287[_0x5ef9f5(0x1a2)]=_0x4ed287[_0x5ef9f5(0x1a2)]||{},Object[_0x5ef9f5(0x204)](_0x4ed287[_0x5ef9f5(0x1a2)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5ef9f5(0x24a)](_0x4ed287,(_0xf1dead,_0x5247bb,_0x2602b5)=>{const _0x5654eb=_0x5ef9f5;!_0xf1dead&&_0x5247bb&&(_0x5247bb[_0x5654eb(0x1e0)]=_0x2602b5,_0x5247bb[_0x5654eb(0x17b)]=_0x5247bb[_0x5654eb(0x1b7)]),_0x52ac8d(_0xf1dead,_0x5247bb,_0x2602b5);})):this[_0x5ef9f5(0x239)]()?(this[_0x5ef9f5(0x1cc)]&&(_0x4ed287[_0x5ef9f5(0x205)]=_0x4ed287[_0x5ef9f5(0x205)]||{},Object[_0x5ef9f5(0x204)](_0x4ed287[_0x5ef9f5(0x205)],{'hints':!0x1})),$task[_0x5ef9f5(0x1d7)](_0x4ed287)[_0x5ef9f5(0x178)](_0x14bb95=>{const {statusCode:_0x1c17d6,statusCode:_0x3ca3c8,headers:_0x2bf3c8,body:_0x2149b7}=_0x14bb95;_0x52ac8d(null,{'status':_0x1c17d6,'statusCode':_0x3ca3c8,'headers':_0x2bf3c8,'body':_0x2149b7},_0x2149b7);},_0x3c0bf5=>_0x52ac8d(_0x3c0bf5))):this[_0x5ef9f5(0x1e4)]()&&(this[_0x5ef9f5(0x1d9)](_0x4ed287),this[_0x5ef9f5(0x248)](_0x4ed287)['on'](_0x5ef9f5(0x243),(_0x4b1fca,_0x1036cc)=>{const _0x147d00=_0x5ef9f5;try{if(_0x4b1fca[_0x147d00(0x1a2)][_0x147d00(0x1fb)]){const _0x435ea5=_0x4b1fca[_0x147d00(0x1a2)][_0x147d00(0x1fb)][_0x147d00(0x1f5)](this[_0x147d00(0x257)][_0x147d00(0x23c)][_0x147d00(0x1ac)])[_0x147d00(0x19c)]();this[_0x147d00(0x252)][_0x147d00(0x1fc)](_0x435ea5,null),_0x1036cc[_0x147d00(0x219)]=this[_0x147d00(0x252)];}}catch(_0x42c11e){this[_0x147d00(0x22c)](_0x42c11e);}})[_0x5ef9f5(0x178)](_0x3e1a85=>{const {statusCode:_0x3c0ad0,statusCode:_0x15d44c,headers:_0xd73a8e,body:_0x4b5a09}=_0x3e1a85;_0x52ac8d(null,{'status':_0x3c0ad0,'statusCode':_0x15d44c,'headers':_0xd73a8e,'body':_0x4b5a09},_0x4b5a09);},_0x10d150=>{const _0x481f4f=_0x5ef9f5,{message:_0x2ebc9f,response:_0x204405}=_0x10d150;_0x52ac8d(_0x2ebc9f,_0x204405,_0x204405&&_0x204405[_0x481f4f(0x1e0)]);}));}[_0x223a78(0x19a)](_0x1b8ddf,_0x239682=()=>{}){const _0x2bedd0=_0x223a78;if(_0x1b8ddf[_0x2bedd0(0x1e0)]&&_0x1b8ddf[_0x2bedd0(0x1a2)]&&!_0x1b8ddf[_0x2bedd0(0x1a2)][_0x2bedd0(0x24b)]&&(_0x1b8ddf[_0x2bedd0(0x1a2)][_0x2bedd0(0x24b)]=_0x2bedd0(0x190)),_0x1b8ddf[_0x2bedd0(0x1a2)]&&delete _0x1b8ddf[_0x2bedd0(0x1a2)][_0x2bedd0(0x20a)],this[_0x2bedd0(0x185)]()||this[_0x2bedd0(0x242)]())this[_0x2bedd0(0x185)]()&&this[_0x2bedd0(0x1cc)]&&(_0x1b8ddf[_0x2bedd0(0x1a2)]=_0x1b8ddf[_0x2bedd0(0x1a2)]||{},Object[_0x2bedd0(0x204)](_0x1b8ddf[_0x2bedd0(0x1a2)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x2bedd0(0x19a)](_0x1b8ddf,(_0x3a23e3,_0x228597,_0x46c672)=>{const _0x42cbe0=_0x2bedd0;!_0x3a23e3&&_0x228597&&(_0x228597[_0x42cbe0(0x1e0)]=_0x46c672,_0x228597[_0x42cbe0(0x17b)]=_0x228597[_0x42cbe0(0x1b7)]),_0x239682(_0x3a23e3,_0x228597,_0x46c672);});else{if(this[_0x2bedd0(0x239)]())_0x1b8ddf[_0x2bedd0(0x20f)]=_0x2bedd0(0x25c),this[_0x2bedd0(0x1cc)]&&(_0x1b8ddf[_0x2bedd0(0x205)]=_0x1b8ddf[_0x2bedd0(0x205)]||{},Object[_0x2bedd0(0x204)](_0x1b8ddf[_0x2bedd0(0x205)],{'hints':!0x1})),$task[_0x2bedd0(0x1d7)](_0x1b8ddf)[_0x2bedd0(0x178)](_0x414349=>{const {statusCode:_0x4e7fbf,statusCode:_0x532d5f,headers:_0xc84f60,body:_0x158dfc}=_0x414349;_0x239682(null,{'status':_0x4e7fbf,'statusCode':_0x532d5f,'headers':_0xc84f60,'body':_0x158dfc},_0x158dfc);},_0x52f91b=>_0x239682(_0x52f91b));else{if(this[_0x2bedd0(0x1e4)]()){this[_0x2bedd0(0x1d9)](_0x1b8ddf);const {url:_0x58e25f,..._0x1b7421}=_0x1b8ddf;this[_0x2bedd0(0x248)][_0x2bedd0(0x19a)](_0x58e25f,_0x1b7421)[_0x2bedd0(0x178)](_0x1cfb31=>{const {statusCode:_0x57151e,statusCode:_0x68710d,headers:_0xdddb8b,body:_0x4cbf2f}=_0x1cfb31;_0x239682(null,{'status':_0x57151e,'statusCode':_0x68710d,'headers':_0xdddb8b,'body':_0x4cbf2f},_0x4cbf2f);},_0x4a4c95=>{const _0x5caa64=_0x2bedd0,{message:_0x24a7cb,response:_0x3df11f}=_0x4a4c95;_0x239682(_0x24a7cb,_0x3df11f,_0x3df11f&&_0x3df11f[_0x5caa64(0x1e0)]);});}}}}[_0x223a78(0x1c7)](_0x57acd2){const _0x57bd43=_0x223a78;let _0x465eeb={'M+':new Date()[_0x57bd43(0x199)]()+0x1,'d+':new Date()[_0x57bd43(0x1b1)](),'H+':new Date()[_0x57bd43(0x200)](),'m+':new Date()[_0x57bd43(0x215)](),'s+':new Date()[_0x57bd43(0x1dc)](),'q+':Math[_0x57bd43(0x201)]((new Date()[_0x57bd43(0x199)]()+0x3)/0x3),'S':new Date()[_0x57bd43(0x17c)]()};/(y+)/[_0x57bd43(0x1c3)](_0x57acd2)&&(_0x57acd2=_0x57acd2[_0x57bd43(0x1d5)](RegExp['$1'],(new Date()[_0x57bd43(0x259)]()+'')[_0x57bd43(0x1f9)](0x4-RegExp['$1'][_0x57bd43(0x1f8)])));for(let _0x58c90c in _0x465eeb)new RegExp('('+_0x58c90c+')')[_0x57bd43(0x1c3)](_0x57acd2)&&(_0x57acd2=_0x57acd2[_0x57bd43(0x1d5)](RegExp['$1'],0x1==RegExp['$1'][_0x57bd43(0x1f8)]?_0x465eeb[_0x58c90c]:('00'+_0x465eeb[_0x58c90c])[_0x57bd43(0x1f9)]((''+_0x465eeb[_0x58c90c])[_0x57bd43(0x1f8)])));return _0x57acd2;}[_0x223a78(0x1b4)](_0x173f2a=_0x4917c4,_0x538eab='',_0x16e74c='',_0x2b26ba){const _0x2118e3=_0x223a78,_0x480cf5=_0x2b3259=>{const _0x41dc18=_0x2445;if(!_0x2b3259)return _0x2b3259;if(_0x41dc18(0x1cb)==typeof _0x2b3259)return this[_0x41dc18(0x242)]()?_0x2b3259:this[_0x41dc18(0x239)]()?{'open-url':_0x2b3259}:this[_0x41dc18(0x185)]()?{'url':_0x2b3259}:void 0x0;if(_0x41dc18(0x181)==typeof _0x2b3259){if(this[_0x41dc18(0x242)]()){let _0x1633c8=_0x2b3259[_0x41dc18(0x208)]||_0x2b3259[_0x41dc18(0x25b)]||_0x2b3259[_0x41dc18(0x17e)],_0x25e522=_0x2b3259[_0x41dc18(0x22f)]||_0x2b3259[_0x41dc18(0x1f4)];return{'openUrl':_0x1633c8,'mediaUrl':_0x25e522};}if(this[_0x41dc18(0x239)]()){let _0x28ba2b=_0x2b3259[_0x41dc18(0x17e)]||_0x2b3259[_0x41dc18(0x25b)]||_0x2b3259[_0x41dc18(0x208)],_0x2f82c3=_0x2b3259[_0x41dc18(0x1f4)]||_0x2b3259[_0x41dc18(0x22f)];return{'open-url':_0x28ba2b,'media-url':_0x2f82c3};}if(this[_0x41dc18(0x185)]()){let _0x542644=_0x2b3259[_0x41dc18(0x25b)]||_0x2b3259[_0x41dc18(0x208)]||_0x2b3259[_0x41dc18(0x17e)];return{'url':_0x542644};}}};this[_0x2118e3(0x20c)]||(this[_0x2118e3(0x185)]()||this[_0x2118e3(0x242)]()?$notification[_0x2118e3(0x19a)](_0x173f2a,_0x538eab,_0x16e74c,_0x480cf5(_0x2b26ba)):this[_0x2118e3(0x239)]()&&$notify(_0x173f2a,_0x538eab,_0x16e74c,_0x480cf5(_0x2b26ba)));let _0x1185a9=['',_0x2118e3(0x213)];_0x1185a9[_0x2118e3(0x1a6)](_0x173f2a),_0x538eab&&_0x1185a9[_0x2118e3(0x1a6)](_0x538eab),_0x16e74c&&_0x1185a9[_0x2118e3(0x1a6)](_0x16e74c),console[_0x2118e3(0x1c8)](_0x1185a9[_0x2118e3(0x1d6)]('\x0a')),this[_0x2118e3(0x21d)]=this[_0x2118e3(0x21d)][_0x2118e3(0x184)](_0x1185a9);}[_0x223a78(0x1c8)](..._0x933fc1){const _0x47efd1=_0x223a78;_0x933fc1[_0x47efd1(0x1f8)]>0x0&&(this[_0x47efd1(0x21d)]=[...this[_0x47efd1(0x21d)],..._0x933fc1]),console[_0x47efd1(0x1c8)](_0x933fc1[_0x47efd1(0x1d6)](this[_0x47efd1(0x212)]));}[_0x223a78(0x22c)](_0x2cd6bb,_0x133fe5){const _0x2ee493=_0x223a78,_0x354c6b=!this[_0x2ee493(0x185)]()&&!this[_0x2ee493(0x239)]()&&!this[_0x2ee493(0x242)]();_0x354c6b?this[_0x2ee493(0x1c8)]('','❗️'+this[_0x2ee493(0x1e8)]+_0x2ee493(0x1ed),_0x2cd6bb[_0x2ee493(0x196)]):this[_0x2ee493(0x1c8)]('','❗️'+this[_0x2ee493(0x1e8)]+_0x2ee493(0x1ed),_0x2cd6bb);}[_0x223a78(0x198)](_0x5255db){return new Promise(_0x25496e=>setTimeout(_0x25496e,_0x5255db));}[_0x223a78(0x1fa)](_0x115985={}){const _0x53e513=_0x223a78,_0xc6d024=new Date()[_0x53e513(0x1b3)](),_0x4ba2fe=(_0xc6d024-this[_0x53e513(0x1b6)])/0x3e8;this[_0x53e513(0x1c8)]('','🔔'+this[_0x53e513(0x1e8)]+_0x53e513(0x209)+_0x4ba2fe+'\x20秒'),this[_0x53e513(0x1c8)](),(this[_0x53e513(0x185)]()||this[_0x53e513(0x239)]()||this[_0x53e513(0x242)]())&&$done(_0x115985);}}(_0x4917c4,_0x500aed);}