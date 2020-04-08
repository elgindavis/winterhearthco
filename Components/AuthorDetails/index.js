/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AuthorDetails = (props) => {
    return (
        <div className="user-details row">
            <p className="user-name col-lg-12 col-md-12 col-6"><a href="#">{props.author}</a> <span className="lnr lnr-user"></span></p>
            <p className="date col-lg-12 col-md-12 col-6"><a href="#">{props.date}</a> <span className="lnr lnr-calendar-full"></span></p>
        </div>
    );
};

export default AuthorDetails;