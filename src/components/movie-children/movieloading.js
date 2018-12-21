import React,{Component} from "react";
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
export default class MovieLoading extends Component{
    render(){
        return (
           <div className="headermovie">
           <div id="movieheader">
              <p>猫眼电影</p>
           </div>
           
           <div className="white_bg">
           <div className="city-entry">
           		<span className="city-name">北京</span>
           		<i className="fa fa-angle-down"></i>
           </div>
           <div className="switch-hot">
           		<div className="hot-item">
           		<NavLink to="/movie/mymovie">
            		<span>正在热映</span>	
            	</NavLink>
            	</div>
            	
            	<div className="hot-item">
            	<NavLink to="/movie/movieloading">
                    <span>即将上映</span>
            	</NavLink>
            	</div>
           </div>
            
            <div className="searchall">
            	<i className="iconfont searchit">&#xe643;</i>
            </div>
          
	           
            </div>
            
            
            </div>
        )
    }
}