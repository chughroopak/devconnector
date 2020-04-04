import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick = id => {
    console.log("delete Education");
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(exp => (
      <tr key={exp._id}>
        <td>{exp.school}</td>
        <td>{exp.degree}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -
          {exp.to !== null ? (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          ) : (
            "Now"
          )}
        </td>
        <td>
          <button
            type='button'
            className='btn btn-danger'
            onClick={this.onDeleteClick.bind(exp._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className='mt-4 mb-4'>Education Credentials</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
