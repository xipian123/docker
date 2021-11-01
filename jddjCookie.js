/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [

  'deviceid_pdj_jd=H5_DEV_636466E1-0A5C-46BF-8CF0-9790A6218DD2;o2o_m_h5_sid=62f27351-4614-4e4c-a6ed-aa3d58c36628;','deviceid_pdj_jd=H5_DEV_D0FF236D-E034-4A89-A92F-5BB789A5DE01;o2o_m_h5_sid=8ebb49f3-90c0-44a7-aa99-3dcc0bc7bde8;','deviceid_pdj_jd=H5_DEV_C09C2770-C65E-455B-8992-CFAB607CB013;o2o_m_h5_sid=7d4c22ed-285a-40d3-8cfa-bcd9932499e5;','deviceid_pdj_jd=H5_DEV_8ED8FD87-1022-4D50-84E8-D008DE30DC0D;o2o_m_h5_sid=bd2b26ec-8429-40de-9fe4-fb9d57899290;','deviceid_pdj_jd=H5_DEV_E4ADEC12-2EF3-4525-90B9-CE5B371D74B0;o2o_m_h5_sid=efdc1770-23a6-4dc5-8854-2c8e343a669d;','deviceid_pdj_jd=H5_DEV_E579FBF5-ED6C-459E-A90C-0C838F8B5F56;o2o_m_h5_sid=c8396484-a510-4dda-ac26-fb16ddc72ea0;'
 
]
// 判断环境变量里面是否有京东到家ck
if (process.env.JDDJ_COOKIE) {
  if (process.env.JDDJ_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JDDJ_COOKIE.split('&');
  } else if (process.env.JDDJ_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JDDJ_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JDDJ_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB') > -1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
//exports['CookieJDs'] = CookieJDs;
