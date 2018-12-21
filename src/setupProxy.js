const proxy=require("http-proxy-middleware")
//https://m.dianping.com/otahotel/hotelm/search?cityid=2&locatecityid=&mylng=&mylat=&lng=&lat=&hotelstarids=&pricerange=&sortid=&limitresult=20&limitpageno=0&searchtype=0&groupable=&filterids=&versionName=&utm_medium=touch
//https://m.dianping.com/otahotel/hotelm/search?cityid=2&locatecityid=&mylng=&mylat=&lng=&lat=&hotelstarids=&pricerange=&sortid=&limitresult=20&limitpageno=0&searchtype=0&groupable=&filterids=72-100%248&versionName=&utm_medium=touch
module.exports=(app)=>{
	app.use("/otahotel",proxy({
		target:"https://m.dianping.com",
		changeOrigin:true
	}))
}
