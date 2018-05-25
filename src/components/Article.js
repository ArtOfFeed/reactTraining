import React, {Component} from 'react';

class Article extends Component {
	state = {
		isOpen: false
	}
	render() {
		const {article} = this.props;
		const body = this.state.isOpen ? <section className="card-text">{article.last_name}</section> : '';
		return (
			<div className="card">
				<div className="art card-header">
					<h2>{article.first_name}<button className="btn btn-primary float-right" onClick={this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button></h2>					
				</div>
				<div className="card-body">
					{body}
					<h3 className='card-subtitle text-muted'>creation location: {article.ip_address}</h3>
				</div>
			</div>
		)
	}
	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Article;