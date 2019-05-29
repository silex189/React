import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    jobTittle: 'Designer',
    email: '',
    twitter: '',
  } };

  handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    // this.setState({
    //   form: nextForm,
    // })
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTittle={this.state.form.jobTittle}
                email={this.state.form.email}
                avatarUrl="https://pbs.twimg.com/profile_images/1035612483166384128/JhefRyxw_400x400.jpg"
              />
            </div>

            <div className="col-6">
                <BadgeForm 
                onChange={this.handleChange} 
                formValues={this.state.form} 
                />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
