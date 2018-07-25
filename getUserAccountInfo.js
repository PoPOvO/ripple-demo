const RippleAPI = require('ripple-lib').RippleAPI;    //从外部导入模块

export const api = new RippleAPI({
  server: 'wss://s1.ripple.com'   // 公共的Ripple服务器
});

api.connect().then(() => {
  /* 自定义代码开始 ------------------------------------ */
  const myAddress = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';

  console.log('我的账户信息：', myAddress);
  return api.getAccountInfo(myAddress);     //获取到Promise对象

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');

  /* 自定义代码结束 -------------------------------------- */
}).then(() => {
  return api.disconnect();
}).then(() => {
  console.log('done and disconnected.');
}).catch(console.error);