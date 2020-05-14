import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HeadComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';
import routes from './Routes';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from './Navbar';
import Album from './Album';

export default function MaydayAlbum() {

    return (
        <div>
            <Breadcrumb />
            {renderRoutes(routes)}
            <HeadComponent />

            <ContentComponent />
            <Route path="/Album">
                <Album />
            </Route>
            <FooterComponent />
        </div>


    );
}


// ========================================

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <MaydayAlbum />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();