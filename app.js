/**
 * Created by xinyuan6009 on 17-1-15.
 *
 * 启动项目后台服务  支付
 */
var express = require("express");
var app = express();
var jade = require("jade");
var path = require("path");
var bodyParser = require('body-parser');
var gamePay = require("modules/pay/gamePay.js");


app.set('view engine', 'jade');//设置默认的模板引擎
app.set('views',path.join(__dirname,'view'));//3 设置视图的对应目录  view先被渲染
app.use(express.static(path.join(__dirname,'static/images')));//图片
app.use(express.static(path.join(__dirname,'static/css')));
app.use(express.static(path.join(__dirname,'static/js')));
app.engine('jade', jade.__express);


//res.render('视图的路径', { 返回的数据名称：返回的数据内容}); //4 向特定路径的视图返回数据

// respond with "hello world" when a GET request is made to the homepage
app.get('/index', function(req, res) {
    console.info("我收到了一个消息...");
    //res.send('hello world');
    res.render('index.jade');  //http://localhost:8081/index
});

app.post('/pay', function(req, res) {
    gamePay.toGamePayPage(req,res);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})