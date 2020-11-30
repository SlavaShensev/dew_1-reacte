import React from 'react';
import q from './likeCounter.module.css';


const LikeCounter = (props) => {
return (
    <div>
        <p className={q.number}>
            {props.num}
        </p>
    </div>
)
};

export default LikeCounter;