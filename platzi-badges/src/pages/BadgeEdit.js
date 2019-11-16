import React from "react";

import "./styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading.js';
import api from '../api.js';

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTittle: 'Designer',
      email: '',
      twitter: '',
    } 
  };

componentDidMount() {
  this.fetchData();
}

fetchData = async e => {
  this.setState({ loading: true, error: null })

  try {
    const data = await api.badges.read(
      this.props.match.params.badgeId
    )

    this.setState({ loading: false, form: data })
  } catch (error) {
    this.setState({ loading: false, error: error })
  }
}


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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState( { loading: true, error: null })

    try {
      await api.badges.update( this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit_hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTittle={this.state.form.jobTittle || 'JOB TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://pbs.twimg.com/profile_images/1035612483166384128/JhefRyxw_400x400.jpg"
              />
            </div>

            <div className="col-6">
                <h1>Edit Attendant</h1>
                <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error} 
                />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
