import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";

class SurveyList extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(({ body, title, yes, no }) => {
      return (
        <div className="card white darken-1">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{body}</p>
          </div>
          <div className="card-action">
            <a href="#">yes: {yes}</a>
            <a href="#">no: {no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h5>Surveys</h5>
        <div className="row">
          <div className="col lg-12">{this.renderSurveys()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    surveys: state.surveys
  };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
