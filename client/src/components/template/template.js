import React, { Component } from "react";
import "./Template.css";

export default class Template extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch("/api/articles")
      .then(res => res.json())
      .then(articles =>
        this.setState({ articles }, () =>
          console.log("Articles fetched..", articles)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.articles.map(article => (
            <li key={article.id}>
              {article.title} {article.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
