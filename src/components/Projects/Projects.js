import React from 'react';

import Animation from '../../hoc/Animation/Animation';
import classes from './Projects.module.scss';

const projects = ({ data }) => {
    return (
    	<section className = { classes.Projects }>
    		{ data.map(project => {
                return (
                    <div className = { classes.Project } key = { project.name + Math.random().toString() }>
                        <Animation style = {{ width: '100%' }}>
                            <h3 className = { classes.Name }>{ project.name }</h3>

                            <div className = { classes.Container }>
                                <div className = { classes.Bar }>
                                    <div className = { classes.Nav } />
                                    <div className = { classes.Nav } />
                                    <div className = { classes.Nav } />
                                </div>

                                <div className = { classes.Content }>
                                    <img src = { project.image } alt = { project.name } />
                                    { project.link && <div className = { classes.View }>
                                        <a href = { project.link } target = '_blank' rel = 'noopener noreferrer'>Preview</a>
                                    </div> }
                                </div>
                            </div>

                            <p className = { classes.Description }>{ project.description }</p>
                        </Animation>
                    </div>
                )
            }) }
    	</section>
    );
}

export default projects;
