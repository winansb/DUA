import React from 'react'
import ReactDOM from 'react-dom/client'


export default class VideoComponent extends React.Component {

	render(){
			const { Source = "../Videos/driving_sim_place_holder.mp4" } = this.props;
			const { Key = "video1"} =this.props; 
			return (
					<div className={Key}>
						<div  className = "player hidden ">
								<video  id = {Key} controls className="fullScreen" ref="video">
										<source src={Source} type="video/mp4" />
								</video>
						</div> 
					</div>
			)
	}
}

