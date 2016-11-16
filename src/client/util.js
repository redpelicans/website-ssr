import R from 'ramda';

export const getBreadcrumbs = R.compose(R.prop('name'), R.head, R.filter(R.prop('path')), R.reverse);
