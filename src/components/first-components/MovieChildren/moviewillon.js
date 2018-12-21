import React,{Component} from "react";
import { 	 Route, NavLink, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
import {
	getDate_it,
	will_action
}
from "../../../action/actionCreateor";
import Aimg from '../../../common/img/c.jpg'
class MovieWillon extends Component{
    render(){
    	let {WillList,bannerlist}=this.props
    	console.log(bannerlist)
        return (
        	<div>
        	<div className="bannerall">
        	                <p>近期最受期待</p>
             				<div className="swiper-container"  ref="navBar_banner1">
                  			<div className="swiper-wrapper ww" >
                  			 
                       		{	
                       			WillList.length>0?WillList.map((item, index) => {
                                    return <div className="swiper-slide banner" key={index}>
                                   
                                        <p><img src={item.img} /></p>
                                        <div className="banner-wish">{item.wish}想看</div>
                                        <div className="banner-nm">{item.nm}</div>
                                        <div className="banner-title">{item.comingTitle}</div>
                                        
                                    </div>
                                
                            }):"正在加载"
                       			
                       		}	
                       		
                  			</div>
                  			<div className="swiper-pagination"></div>   
              				</div>
      						
                            
                    
           					 </div>
            				<div className="moviemain">
					{
                      bannerlist.length>0?bannerlist.map((item, index) => {
                      		
                            return <div className="nav_item" key={index}>   
                            
                            <div className="avatar">
                            	<img src={item.img} />
                            </div>
                            
                            <div className="content">
                            	<div className="box-flex">
                            		<p>{item.nm}</p>
                            		{item.version!=""?
                            		<div className="it">
                            		<i className="oneit">{item.version.replace("v","").slice(0,2)}</i>
                            		<span className="twoit">{item.version.substr(4,6)}</span>
                            		</div>
   
                            		:""}
                            	</div>
                            	
                                <div className="detail">
                                {item.sc>1?<span>观众评:{item.sc}</span>:<span>{item.wish}想看</span>}<br/>
                                
                                
                                </div>
                                <div className="actor">主演:{item.star}</div>
                                <div className="show-info">{item.showInfo}</div>
                            </div>
                            
                            <div className="button">
                            	{item.globalReleased?<span className="sold">购票</span>:<span className="will">预售</span>}
                            </div>
                            
                             </div>
                            
                      }):"正在加载"
                           
				}
				</div>
            </div>
        )
    }
componentDidMount(){
	 	
    	setTimeout(()=>{
    	 new Swiper(this.refs.navBar_banner1,{
		 slidesPerView : 4
		 })
    	},300)
    	this.props.getData()
		}
}
const mapStateToProps = (state) =>({
	WillList:state.movie.WillList,
	bannerlist:state.movie.bannerList
})

const mapDispatchToProps = (dispatch) => ({
	getData() {
		dispatch(getDate_it());
		dispatch(will_action())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieWillon)