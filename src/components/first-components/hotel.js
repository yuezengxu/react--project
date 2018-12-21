import React, { Component, Fragment } from 'react'

import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Search from "../first-components/hotelChildren/search"
import Filter from "../first-components/hotelChildren/filter"
import List from "../first-components/hotelChildren/list"
import Footer from "../first-components/hotelChildren/footer"

import LoversHotel from "./hotelChildren/filterChildren/loversHotel";
import Economic from "./hotelChildren/filterChildren/economic";
import HourRoom from "./hotelChildren/filterChildren/hourRoom";
import PraiseHotel from "./hotelChildren/filterChildren/praiseHotel";
import "../../common/css/hotel.css"
import BScroll from "better-scroll"
import { get_async_action } from '../../action/actionCreateor';

class Hotel extends Component {
      render() {
            let { dataList } = this.props
            return (
                  <Fragment>
                        <div className="wrapper" ref="wrapper">
                              <div className="content">
                                    <div id="box">
                                          <div id="center">
                                                <span id="search-left">
                                                      <i className="iconfont left">&#xe6a5;</i>
                                                </span>
                                                <div id="search-right">
                                                      <div id="search-city">
                                                            <div>
                                                                  <a className="city-name">北京</a>
                                                                  <i className="iconfont down">&#xe6aa;</i>
                                                            </div>
                                                      </div>
                                                      <div id="search-date">
                                                            <div id="time">
                                                                  <p>住 12-19</p>
                                                                  <p>退 12-20</p>
                                                            </div>
                                                            <i className="iconfont down">&#xe6aa;</i>
                                                      </div>
                                                      <div id="search-wrapper">
                                                            <div id="adress">
                                                                  <i className="iconfont find">&#xe614;</i>
                                                                  <input type="text" className="inp" placeholder="商圈/酒店/地址" />
                                                            </div>

                                                      </div>
                                                </div>
                                          </div>

                                    </div>
                                    <section>
                                          <div className="one">
                                                <a>
                                                      <span>位置区域</span>
                                                      <i className="iconfont">&#xe60c;</i>
                                                </a>
                                                <a>
                                                      <span>星级/价格</span>
                                                      <i className="iconfont">&#xe60c;</i>
                                                </a>
                                                <a>
                                                      <span>智能推荐</span>
                                                      <i className="iconfont">&#xe60c;</i>
                                                </a>
                                          </div>
                                          <Router>
                                                <div className="two">
                                                      <Switch>
                                                            <Route path="/hotel/praiseHotel" component={PraiseHotel} />
                                                            <Route path="/hotel/loversHotel" component={LoversHotel} />
                                                            <Route path="/hotel/economic" component={Economic} />
                                                            <Route path="/hotel/hourRoom" component={HourRoom} />
                                                      </Switch>
                                                      <NavLink to="/hotel/praiseHotel">好评酒店</NavLink>
                                                      <NavLink to="/hotel/hourRoom">钟点房</NavLink>
                                                      <NavLink to="/hotel/loversHotel">情侣酒店</NavLink>
                                                      <NavLink to="/hotel/economic">经济连锁</NavLink>
                                                </div>
                                          </Router>

                                    </section>
                                    <Search />
                                    <List dataList={dataList} />
                                    <Footer />
                              </div>
                        </div>
                  </Fragment>
            )
      }
      componentDidMount() {
            this.props.getData()
            this.scroll = new BScroll(this.refs.wrapper)
            console.log(this.scroll)
      }

}

const mapStateToProps = (state) => ({
      dataList: state.listReducer.dataList


})

const mapDispatchToProps = (dispatch) => ({
      getData() {
            dispatch(get_async_action())
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hotel)
