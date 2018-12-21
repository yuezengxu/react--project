import React, {Component,Fragment} from 'react'
import {connect} from 'react-redux'
import "../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
import '../../common/css/movieheader.css'
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import MyMovie from '../movie-children/mymovie'
import MyCinema from '../movie-children/mycinema'
import MovieLoading from '../movie-children/moviewill'
import My from '../movie-children/my'
class Food extends Component{
	render(){
		return(
			<Router>
			<div>
			 <Switch>
              <Route path="/movie/mymovie" component={MyMovie} />
              <Route path="/movie/mycinema" component={MyCinema} />
              <Route path="/movie/my" component={My} />
              <Route path="/movie/movieloading" component={MovieLoading} />
              <Redirect path="/" to="/movie/mymovie" />
               </Switch>
              </div>
            </Router>
		)
	}
}
const mapStateToProps = (state)=>({
    
})

const mapDispatchToProps = (dispatch)=>({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Food)
