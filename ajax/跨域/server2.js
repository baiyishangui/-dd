
const express = require('express');
const app = express();
app.get('/home',(request,response)=>{
    // 响应一个界面
    response.sendFile(___dirname + '/index.html');
});
app.get('/data',(resquest,response)=>{
    response.send('用户数据');
})

app.listen(9000,()=>{
    console.log("监听已经开始");
})