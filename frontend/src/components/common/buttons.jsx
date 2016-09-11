import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { classNames } from 'app/utils';
import { createBook } from 'app/actions/book';

export const Button = ({ onClick, children, className = '' }) => (
  <a
    href=""
    className={classNames('button', className)}
    onClick={e => { e.preventDefault(); onClick(); }}
  >
    {children}
  </a>
);

const InternalAddButton = ({ router, createBook }) => (
  <div className="floating-button" onClick={() => createBook(router)}>
    <p className="floating-button__plus">+</p>
  </div>
);

const addButtonDtp = d => bindActionCreators({ createBook }, d);
export const AddButton = connect(() => ({}), addButtonDtp)(withRouter(InternalAddButton));

export const BackButton = ({ to }) => (
  <Link to={to} className="button">Back</Link>
);
