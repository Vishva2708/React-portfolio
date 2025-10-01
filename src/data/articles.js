import React from "react";

function article_1() {
	return {
		date: "10 august 2025",
		title: "Getting Started with React",
		description:
			"A beginner-friendly guide to understanding the basics of React and how it helps in building modern web applications.",
		keywords: [
			"React Basics",
			"Vishva",
			"Vishva Full Stack Developer",
			"Vishva Naroda",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						React is a popular JavaScript library for building interactive user interfaces. In this article, I explain the core concepts like components, JSX, and props.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "19 june 2025",
		title: "Understanding JavaScript Basics",
		description:
			"This article covers fundamental JavaScript concepts for building web applications, perfect for beginners and aspiring Full Stack developers.",
		keywords: [
			"JavaScript Basics",
			"Vishva",
			"Vishva Full Stack Developer",
			"Vishva Naroda",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						JavaScript is the core language for web development. Here, I explain variables, functions, loops, and how to use them to create dynamic websites.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
