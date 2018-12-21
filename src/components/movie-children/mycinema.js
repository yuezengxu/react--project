import React, {Component} from 'react';

import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom"
export default class MyCinema extends Component{
	render(){
		return(
			<div>
			<h1>影院</h1>
			
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
}
