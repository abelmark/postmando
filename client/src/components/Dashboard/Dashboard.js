import React from "react";
import { Link } from "react-router-dom";
import SurveyList from '../SurveyList/SurveyList';

const Dashboard = ({ surveys }) => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
