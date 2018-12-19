const proxy=require("http-proxy-middleware")
//https://m.maoyan.com/ajax/movieOnInfoList?token=
module.exports=(app)=>{
	app.use("/ajax",proxy({
		target:"https://m.maoyan.com",
		changeOrigin:true
	}))
}
