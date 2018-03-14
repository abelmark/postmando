import React, { Component } from "react";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";
import { fetchSurveys } from "../../actions/index";

// import classes from "../SurveyList.css";

class SurveyList extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    const duration = 300;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    };

    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    };

    const Card = ({ in: inProp }) => (
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >

          </div>
        )}
      </Transition>
    );
    
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
          <div>{this.renderSurveys()}</div>
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
