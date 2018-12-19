export const getDate_action=()=>({
		type:"GET_DATA",
		payload:new Promise(resolve=>{
			let url="/ajax/movieOnInfoList?token"
			fetch(url)
			.then(res=>res.json())
			.then((data)=>{
			//	console.log(data)
				resolve(data)
			})
		})
})

