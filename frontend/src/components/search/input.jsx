import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { inputChange } from 'app/actions/search';

class Input extends Component {
  render() {
    return (
      <div className="book-search">
        <input
          className="book-search__input"
          placeholder="Search an isbn, title, publisher or author..."
          type="text"
          ref={input => { this.input = input; }}
          onChange={_.debounce(() => this.props.inputChange(this.input.value), 50)}
        />
      </div>
    );
  }
}

const dispatchToProps = d => bindActionCreators({ inputChange }, d);

export default connect(() => ({}), dispatchToProps)(Input);
