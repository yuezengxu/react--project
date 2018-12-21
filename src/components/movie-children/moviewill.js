import React,{Component} from "react";
import { 	 Route, NavLink, Switch, Redirect } from "react-router-dom";
import MovieLoading from './movieloading'
import MovieWillon from '../first-components/MovieChildren/moviewillon'
export default class MovieWill extends Component{
    render(){
        return (
            <div id="MovieWill">
            <MovieLoading/>
          	<MovieWillon/>
          	
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