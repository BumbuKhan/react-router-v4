import React from 'react';

export default ({match}) => {
    return (
        <div>
            Topic: {match.params.topicId}
        </div>
    )
}