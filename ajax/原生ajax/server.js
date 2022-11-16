// 1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
// 3.创建路由规则（request是对请求报文的封装，response是对响应报文的封装）
app.get('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    //  设置相应体
    response.send('hello,ajax');

});
app.post('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    //  设置相应体
    response.send('hello,ajax post');

});
app.all('/json-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'tjl'
    };
    let str = JSON.stringify(data);

    //  设置相应体  
    response.send(str);

});
// 针对ie缓存
app.get('/ie', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    //  设置相应体
    response.send('hello,ie');

});
// 延时问题
app.get('/delay', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    setTimeout(() => {
        response.send('延时响应');
    }, 3000)

});
// jQuery-ajax
app.all('/jquery-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    // //  设置相应体
    // response.send('hello,jquery-ajax');
    const data = { name: 'tjl' };
    response.send(JSON.stringify(data));

});
// axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    response.setHeader('Access-control-allow-headers', '*');
    const data = { name: 'tjl' };
    response.send(JSON.stringify(data));

});
// fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    response.setHeader('Access-control-allow-headers', '*');
    const data = { name: 'tjl' };
    response.send(JSON.stringify(data));

});
// jsonp服务
app.all('/check-username', (request, response) => {
   
    const data = {
        exist:1,
        msg:'用户名已经存在'
    };
    let str = JSON.stringify(data);

//    返回结果
    response.end(`handle(${str})`);

});
// cors跨域
app.all('/cors-server', (request, response) => {
    response.setHeader('Access-control-allow-origin', '*');
    
    response.send('hello,cors');

});


// 4.设置端口监听服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中");
})