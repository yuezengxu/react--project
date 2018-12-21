import React, { Component } from 'react'
import reduxPromiseMiddleware from "redux-promise-middleware"
import imgStar from "../../../common/img/star.svg"
import imgSmallStar from "../../../common/img/smallStar.svg"

export default class List extends Component {

	render() {
		let { dataList } = this.props
		console.log(dataList)
		return (
			<div className="list">
				<ul>
					{
						dataList.map((item, index) => {
							return <div key={index}>
								<li className="lis">
									<img src={item.defaultPic} />
									<div className="contentRight">
										<div>
											<p className="hotel-name">
												{item.shopName}
												{item.branchName == "" || null ? item.branchName : "(" + item.branchName + ")"}
											</p>
											<span>订</span>
											<span>套餐</span>
										</div>
										<div>
											<img src={imgStar} />
											<img src={imgStar} />
											<img src={imgStar} />
											<img src={imgStar} />
											<img src={imgSmallStar} />
											<p>{item.comment}</p>
											<span>{item.voteTotal}</span>
											<span>{item.hotelStar}</span>
										</div>
										<div>
											<p>{item.location}</p>
										</div>
										<div>
											<span>￥</span>
											<i>{item.price}</i>
											<i>{item.lowestPriceText}</i>
											<i>{item.lastBookingText}</i>
										</div>

									</div>

								</li>
							</div>

						})
					}
				</ul>
			</div>
		)
	}
}