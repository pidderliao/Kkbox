import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import HeadComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';

function MaydayAlbum() {

    return (
        <div>
            <HeadComponent />
            <ContentComponent />
            <FooterComponent />
        </div>


    );
}


// ========================================

ReactDOM.render(
    <MaydayAlbum />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();