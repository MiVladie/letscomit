import React from 'react';

import classes from './Line.module.scss';

const line = ({ color }) => <div className = { classes.Line } style = {{ backgroundColor: color }} />

export default line;
