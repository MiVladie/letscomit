import React from 'react';

import IntroSmall from '../../../../components/IntroSmall/IntroSmall';

import classes from './Preview.module.scss';

const preview = ({ messages, expand }) => {    
    if(messages == null)
        return <IntroSmall main = 'No new messages!' />;

    return (
    	<section className = { classes.Preview }>
            <div className = { classes.Meta }>
                <h3 className = { classes.Description }>Name</h3>
                <h3 className = { classes.Description }>Contact</h3>
                <h3 className = { classes.Description }>Message</h3>
                <h3 className = { classes.Description }>Date</h3>
            </div>

            { Object.keys(messages).reverse().map((message, index) => {
                    let name = messages[message].firstName + (messages[message].lastName ? ' ' + messages[message].lastName : '');
                    let contact = messages[message].email;
                    let text = messages[message].message.substring(0, 35);
                    let date = messages[message].time;

                    return (
                        <div className = { classes.Message } onClick = { () => expand(message) } key = { index }>
                            <div className = { classes.Info }><p className = { classes.Text }>{ name }</p></div>
                            <div className = { classes.Info }><p className = { classes.Text }>{ contact }</p></div>
                            <div className = { classes.Info }><p className = { classes.Text }>{ text }</p></div>
                            <div className = { classes.Info }><p className = { classes.Text }>{ date }</p></div>
                        </div>
                    );
                })
            }

        <p className = { classes.Total }>Total messages: { Object.keys(messages).length }</p>
    </section>
    );
}

export default preview;
