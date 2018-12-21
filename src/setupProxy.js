const proxy=require("http-proxy-middleware")
//https://m.maoyan.com/ajax/movieOnInfoList?token=
//https://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=0&token=
module.exports=(app)=>{
	app.use("/ajax",proxy({
		target:"https://m.maoyan.com",
		changeOrigin:true
	}))
}
