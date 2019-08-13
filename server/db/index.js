var mysql = require('mysql');
//npm install mysql 
var conn = mysql.createConnection({
  host     : 'localhost',  //ip,不需要修改
  user     : 'root',	   //数据库用户名
  password : '123321',  //数据库的密码
  database : 'swiperlist'  // 新建数据库 名称
});

conn.connect();

module.exports = conn;