import React from 'react';

const Breadcrumbs = ({}, context) => {
  console.log(context);
  return <span>COUCOU</span>;
};

Breadcrumbs.contextTypes = {
  routes: React.PropTypes.array,
};

export default Breadcrumbs;
