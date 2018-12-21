import React, {Component,Fragment} from 'react';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import MovieLoading from './movieloading'
import MovieMain from '../first-components/MovieChildren/movie-main'
import BScroll from 'better-scroll'
export default class MyMovie extends Component{
	render(){
		return(
		  <div>	
		   <MovieLoading/>
		  <div className="wrapper" ref="wrapper">
		  <div className="content">
			
		 <MovieMain/>
		 <div className="bl"></div>
		 </div>
		 
		 </div>
          <div id="movie-footer">
              <ul>
                <li>
                  <NavLink to="/movie/mymovie">
                	<i className="iconfont">&#xe65b;</i>
                    <span>电影</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movie/mycinema">
					<i className="iconfont">&#xe61d;</i>
                    <span>影院</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movie/my">
                   	<i className="iconfont">&#xe614;</i>
                    <span>我的</span>
                  </NavLink>
                </li>
            
              </ul>
            </div>
            
		</div>
           
        
		)
	}
	componentDidMount(){
		
		  
		  this.scroll=new BScroll(this.refs.wrapper)
		
		console.log(this.scroll)
	}
}
