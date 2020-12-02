import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";

const postTextData = [
    {id:1, text: ' You should see ice. It moves like it has a\n' +
            '                    mind. Like it knows it killed the world once\n' +
            '                    and got a taste for murder. After the\n' +
            '                    avalanche, it took us a week to climb out....'},
    {id:2, text: '\' You should see ice. It moves like it has a\\n\' +\n' +
            '    \'                    mind. Like it knows it killed the world once\\n\' +\n' +
            '    \'                    and got a taste for murder. After the\\n\' +\n' +
            '    \'                    avalanche, it took us a week to climb out....\''},
    {id: 3, text: ' You should see ice. It moves like it has a\n' +
            '                    mind. Like it knows it killed the world once\n' +
            '                    and got a taste for murder. After the\n' +
            '                    avalanche, it took us a week to climb out....'},
];

const postsText = postTextData
    .map(text => <PostContent text={text.text}/>);

const Post = () => {
    return (
        <div>
            <PostInfo/>
            <PostContent text={postsText} />
        </div>
    )
};

export default Post;