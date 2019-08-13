var express = require('express');
var router = express.Router();
var conn=require('../db')
var QcloudSms = require("qcloudsms_js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/swiper',function(req,res,next){
  let sql = "select * from swiper";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})

router.get('/icon',function(req,res,next){
  let sql = "select * from icon";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})
router.get('/homeShopList',function(req,res,next){
  let sql = "select * from ShopList";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})
router.get('/recommendedList',function(req,res,next){

	let pages=req.query.page
	let count=req.query.num
  let sql = `select * from recommendedList limit ${pages},${count}`;
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
})
router.get('/searchList',function(req,res,next){
	let searchList=require('../mock/sever.json')
		res.send({
			code:1,
			searchList
		})
  
})
router.get('/chatList',function(req,res,next){

	let sql = "select * from chatList";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
  
})
router.get('/search',function(req,res,next){
 let cName=req.query.q
 console.log(cName)
	let sql = `select * from search where name like '%${cName}%'`;
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
  
})

router.get('/login',function(req,res,next){
let telVal=	req.query.tel
	var appid = 1400241540;  // SDK AppID 以1400开头
	// 短信应用 SDK AppKey
	var appkey = "e6a8f70c6b13de54e198205543f47449";
	// 需要发送短信的手机号码
	var phoneNumbers = [telVal];
	// 短信模板 ID，需要在短信控制台中申请
	var templateId = 7839;  // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
	// 签名
	var smsSign = "腾讯云";  // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
	// 实例化 QcloudSms
	var qcloudsms = QcloudSms(appid, appkey);
	// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
	function callback(err, res, resData) {
		if (err) {
				console.log("err: ", err);
		} else {
				console.log("request data: ", res.req);
				console.log("response data: ", resData);
		}
	}

	
	var ssender = qcloudsms.SmsSingleSender();
var params = ["5678"];
ssender.sendWithParam(86, phoneNumbers[0], templateId,
params, smsSign, "", "", callback);
 })


 router.get('/shopCar',function(req,res,next){
	let {shop_id,title,imgUrl,price,shop_count} =req.query
	 let sql = `select * from shopcar where shop_id=${shop_id}`;
	 conn.query(sql,function(error, results, fields){
				if(results[0]){ //有
					let Insql = `update shopcar set shop_count=${shop_count} where shop_id=${shop_id}`;
					conn.query(Insql,function(error, results, fields){
						res.send({
							code:1,
							results
						})
					})
				}else{ //没有
					let inoutsql=`insert into shopcar (shop_id,title,imgUrl,price,shop_count) values ("${shop_id}","${title}","${imgUrl}","${price}","${shop_count}")`
					conn.query(inoutsql,function(error, results, fields){
							res.send({
								code:200,
								results
							})

					})
				}
		})
 })

 router.get('/shopCarData',function(req,res,next){

	let sql = "select * from shopcar";
  conn.query(sql,function(error, results, fields){
      if(error) throw error;
	
			res.json({
				code:1,
		  	results
			})
	})
  
})

module.exports = router;
