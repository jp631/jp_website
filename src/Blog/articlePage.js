import React from 'react';
import './blog.scss';

const ArticlePage = () => {
    return (
        <div className='articlePage-container'>
            <div className='articlePage'>
                <h1>title</h1>
                <img className='article_Img' src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' width='200' height='200' />
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

                <div className='comments'>
                    <h2>Comments</h2>

                    <div className='users_comment'>
                        <div className='user_profile'>
                            <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' width={50} height={50} />
                        Jean Boom
                     </div>
                        <div className='date'>1 day ago</div>

                        <div className='likes'>
                        <img  src='https://i1.pngguru.com/preview/204/535/782/hearts-art-red-heart-png-clipart.jpg' width={20} height={20} />
                        2324533431243
                        </div>
                        <p>
                            you are right this article is what it is. you are right this article is what it is. you are right this article is what it is. you are right this article is what it is. you are right this article is what it is. you are right this article is what it is. you are right this article is what it is. you are right this article is what it is. you are right this article is what it is.
                     </p>
                    </div>
            

                </div>

            </div>

            <div className='articleList'>
                <ul>
                    <li>title of sdsd</li>
                    <li>title of sdsd</li>
                    <li>title of sdsd</li>
                    <li>title of sdsd</li>
                    <li>title of sdsd</li>

                </ul>
            </div>
        </div>
    );
};

export default ArticlePage;
