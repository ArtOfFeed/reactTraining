import React from 'react';
import ArticleList from './ArticleList';
import articles from '../data';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-3">App</h1>
			</div>
			<ArticleList articles = {articles}/>
		</div>
	)
}

export default App;