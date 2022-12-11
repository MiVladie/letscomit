import React from 'react';

import Line from '../UI/Line/Line';

import Animation from '../../hoc/Animation/Animation';

import classes from './Columns.module.scss';

const columns = ({ data, color }) => {
    return (
    	<section className = { classes.Columns } style = {{ backgroundColor: color }}>
    		{ data.map(col => {
                return (
                    <div className = { classes.Column } key = { col.name }>
                        <Animation>
                            <h2 className = { classes.Main }>{ col.name }</h2>
                            <div className = { classes.Line }><Line color = '#FF2C2C' /></div>
                            <p className = { classes.Description }>{ col.description }</p>
                        </Animation>
                    </div>
                )
            }) }
    	</section>
    );
}

export default columns;
