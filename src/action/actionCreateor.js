import common from '../utils/common'
import {fetch} from "whatwg-fetch";
export const getDate_action=()=>({
		type:"GET_DATA",
		payload:new Promise(resolve=>{
			let url="/ajax/movieOnInfoList?token"
			fetch(url)
			.then(res=>res.json())
			.then((data)=>{
				data.movieList.map((item)=>{
						
					item.img=common.getPic(item.img)
					
				})
				
				resolve(data.movieList)
			})
		})
})
//https://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=0&token=
export const getDate_it=()=>({
		type:"GET_DATA1",
		payload:new Promise(resolve=>{
			let url="/ajax/mostExpected?ci=1&limit=10&offset=0&token="
			fetch(url)
			.then(res=>res.json())
			.then((data)=>{
				data.coming.map((item)=>{
					
				item.img=common.getPic(item.img)
					
				})
				
				resolve(data.coming)
			})
		})
})
//https://m.maoyan.com/ajax/comingList?ci=1&token=&limit=10
export const will_action=()=>({
		type:"GET_DATA2",
		payload:new Promise(resolve=>{
			let url="/ajax/comingList?ci=1&token=&limit=10"
			fetch(url)
			.then(res=>res.json())
			.then((data)=>{
				data.coming.map((item)=>{
					
				item.img=common.getPic(item.img)
					
				})
				resolve(data.coming)
			})
		})
})