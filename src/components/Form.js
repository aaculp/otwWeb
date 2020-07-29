import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        {this.props.name === "Trending" ? (
          <form className="input" onSubmit={e => this.props.onTrendingSubmit(e)}>
            {/* <input
              placeholder={this.props.name}
              onChange={e => this.props.handleInputChange(e)}
              value={this.props.butonInput}
            />
            <button>Submit</button> */}
          </form>
        ) : (
          <form className="input" onSubmit={e => this.props.onFormSubmit(e)}>
            <input
              placeholder={this.props.name}
              onChange={e => this.props.handleInputChange(e)}
              value={this.props.butonInput}
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

