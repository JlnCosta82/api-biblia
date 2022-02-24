import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title }){
	return (
		<NextHead>
		    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    <title>{title}</title>
		</NextHead>
	);
}

Head.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Head;