import React from 'react';
import {Route, Link} from 'react-router-dom';
import Topic from './topic';

export default ({match}) => {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li><Link to={`${match.url}/topic-1`}>Topic 1</Link></li>
                <li><Link to={`${match.url}/topic-2`}>Topic 2</Link></li>
                <li><Link to={`${match.url}/topic-3`}>Topic 3</Link></li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic}/>
            <Route exact path={`${match.path}`} render={() => {
                return (<div>Please select a topic</div>)
            }}/>
        </div>
    )
}