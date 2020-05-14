import React from 'react';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config'
import routes from './Routes'

const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
    let matchedRoutes = matchRoutes(routes, locationPath);

    if (typeof onMatchedRoutes === 'function') {
        matchedRoutes = onMatchedRoutes(matchedRoutes);
    }


    return (
        <nav className="navbar navbar-expand-sm bg-white fixed-top">
            <ol className="breadcrumb">
                {matchedRoutes.map((matchRoute, i) => {
                    const { path, breadcrumbName } = matchRoute.route;

                    const isActive = path === locationPath;

                    return isActive ? (
                        <li key={i} className="breadcrumb-item active">
                            {breadcrumbName}
                        </li>
                    ) : (
                            <li key={i} className="breadcrumb-item">
                                <Link to={path}>{breadcrumbName} </Link>
                            </li>
                        );
                })}
            </ol>
        </nav>
    );
};
export { Breadcrumb };