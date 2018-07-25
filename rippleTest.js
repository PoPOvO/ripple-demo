//直接使用WS和节点通信

const WebSocket = require('ws');
const ws = new WebSocket('wss://s1.ripple.com');	//连接远程节点

//查询节点服务器信息
var jsonStr = JSON.stringify({
  "id": 2,
  "command": "server_info",
});

function request(data) {
	ws.on('open', function open() {
  		ws.send(data);
	});
}

function response() {
	ws.on('message', function incoming(data) {
  		console.log("Response Data:" + data);
	});
}
request(jsonStr);
response();