import {fetch} from "whatwg-fetch"
export const get_async_action=()=>({
		type:"GET_ASYNC_ACTION",
		payload:new Promise(resolve=>{
			let url="/otahotel/hotelm/search?cityid=2&locatecityid=&mylng=&mylat=&lng=&lat=&hotelstarids=&pricerange=&sortid=&limitresult=20&limitpageno=0&searchtype=0&groupable=&filterids=72-100%248&versionName=&utm_medium=touch"
			fetch(url)
			.then(res=>res.json())
			.then((data)=>{
				// console.log(data)
				resolve(data)
			})
		})
})

