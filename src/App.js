import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Food from './components/first-components/food'
import Movie from './components/first-components/movie'
import { Provider } from 'react-redux'
import store from './store'
import Hotel from './components/first-components/hotel'
/*import Play from './components/first-components/play'
import TakeOut from './components/first-components/takeout'
import HotPot from './components/first-components/hotpot'
import Beauty from './components/first-components/beauty'
import Shop from './components/first-components/shop'
import Travel from './components/first-components/travel'
import Sing from './components/first-components/sing'
import PhotoGraphy from './components/first-components/photography'
import Life from './components/first-components/life'
import Car from './components/first-components/car'
import Sport from './components/first-components/sport'
import Family from './components/first-components/family'

import homedecoration from './components/first-components/HomeDecoration'
import learn from './components/first-components/Learn'
import healthy from './components/first-components/Healthy'
import tohome from './components/first-components/ToHome'
import snack from './components/first-components/Snack'
import medical from './components/first-components/Medical'

import buffet from './components/first-components/Buffet'
import japanese from './components/first-components/Japanese'
import hairdressing from './components/first-components/HairDressing'
import homede from './components/first-components/HomeDe'
import manicure from './components/first-components/Manicure'
import spa from './components/first-components/Spa'
import PhotoGraphy from './components/first-components/Slimming'
import slimming from './components/first-components/life'
import parenting from './components/first-components/Parenting'
import all from './components/first-components/All'
*/
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>

							<Route path="/food" exact component={Food} />

							<Route path="/movie" component={Movie} />

							<Route path="/hotel" component={Hotel} />
							{/*<Route path="/play" component={Play} />
						<Route path="/takeout" component={TakeOut} />
						<Route path="/hotpot" component={HotPot} />
						<Route path="/beauty" exact component={Beauty} />
						<Route path="/shop" component={Shop} />
						<Route path="/travel" component={Travel} />
						<Route path="/sing" component={Sing} />
						<Route path="/photography" component={PhotoGraphy} />
						<Route path="/life" component={Life} />
						<Route path="/car" exact component={Car} />
						<Route path="/sport" component={Sport} />
						<Route path="/family" component={Family} />
						<Route path="/homedecoration" component={HomeDecoration} />
						<Route path="/learn" component={Learn} />
						<Route path="/healthy" component={Healthy} />
						<Route path="/tohome" component={ToHome} />
						<Route path="/snack" component={Snack} />
						<Route path="/medical" component={Medical} />
						<Route path="/buffet" exact component={Buffet} />
						<Route path="/japanese" component={Japanese} />
						<Route path="/hairdressing" component={HairDressing} />
						<Route path="/homede" component={HomeDe} />
						<Route path="/manicure" component={Manicure} />
						<Route path="/spa" component={Spa} />
						<Route path="/slimming" component={Slimming} />
						<Route path="/parenting" component={Parenting} />
						<Route path="/all" component={All} />
           */}




							{/* <Redirect path="/" to="/hotel" /> */}
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
