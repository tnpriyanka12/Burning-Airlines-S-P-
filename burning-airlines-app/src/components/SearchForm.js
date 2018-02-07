import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchForm extends Component {
  constructor() {
    super();

    this.state = { content: '' };

    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleChange = this._handleChange.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
    this.props.onSubmit( this.state.content );
  }

  _handleChange( e ){
    this.setState({ content: e.target.value });
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } placeholder="Origin"></textarea>
        <textarea onChange={ this._handleChange } placeholder="Destination"></textarea>

        <br />
        <input type="submit" value="Search Flights" />
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
