import React, {
	Component
} from 'react';
import { connect } from "react-redux";
import {
	getDate_action
}
from "../../../action/actionCreateor";
import Aimg from '../../../common/img/b.jpg'
class MovieMain extends Component {
	render() {
		let {MovieList} = this.props
		return(
			<div className="moviemain">
				{
                      MovieList.length>0?MovieList.map((item, index) => {
                      		
                            return <div className="nav_item" key={index}>   
                            
                            <div className="avatar">
                            	<img src={item.img} />
                            </div>
                            
                            <div className="content">
                            	<div className="box-flex">
                            		<p>{item.nm}</p>
                            		{item.version!=""?
                            		<div className="it">
                            		<i className="oneit">{item.version.replace("v","").slice(0,2).toUpperCase()}</i>
                            		<span className="twoit">{item.version.substr(4,6).toUpperCase()}</span>
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
		)
	}
	componentDidMount() {
		this.props.getData();
	}
}
const mapStateToProps = (state) => ({
	MovieList: state.movie.MovieList
})

const mapDispatchToProps = (dispatch) => ({
	getData() {
		dispatch(getDate_action());
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieMain)