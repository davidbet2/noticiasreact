import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-3">
                <a className="brand-logo center">{props.titulo}</a>
                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;