import React, { Component } from "react";
// import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  myStyle = {
    width: "100%" ,
    height: "0",
    paddingBottom: "56%",
    position: "relative"
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    };
  }

  async componentDidMount(){
      let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.categories}&apiKey=55b5c6aacbdb4861a02c0313b7e129b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      console.log(URL);
      this.setState({loading : true})
      let DATA = await fetch(URL);
      let FetchData = await DATA.json();
      // console.log(FetchData);
      this.setState({
          articles : FetchData.articles,
          pageSize : FetchData.totalResults,
          loading : false
      })
  }
  handlePrevious = async () => {
        let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.categories}&apiKey=55b5c6aacbdb4861a02c0313b7e129b6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let DATA = await fetch(URL);
        let FetchData = await DATA.json();
        this.setState({
            articles : FetchData.articles,
            page: this.state.page - 1,
            loading : false
        })
  }
  handleNext = async () => {
          let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.categories}&apiKey=55b5c6aacbdb4861a02c0313b7e129b6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading : true})
          let DATA = await fetch(URL);
          let FetchData = await DATA.json();
          this.setState({
              articles : FetchData.articles,
              page: this.state.page + 1,
              loading : false
          })
}

  render() {
    return (
      <div className="container my-3">
        <div className="container my-2">
          <h1 className="text-center my-5">NewsMonkey - Top Headlines</h1>
        </div>
        {this.state.loading && <div className="text-center">
            <Spinner/>
        </div>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  imageUrl = {element.urlToImage}
                  title = {element.title}
                  description = {element.description}
                  newsUrl = {element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-5">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.pageSize/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>

      </div>
    );
  }
}
