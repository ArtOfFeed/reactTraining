import React from 'react';
import Article from '../Article';
import './article-list.css';

function ArticleList({articles}) {
	const articleElements = articles.map(article => <li className="article-item" key = {article.id}><Article article = {article}/></li>)
	return (
		<ul>
			{articleElements}
		</ul>
	)
}

export default ArticleList;
