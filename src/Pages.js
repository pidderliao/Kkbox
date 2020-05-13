import React from 'react';
import { renderRoutes } from 'react-router-config'
import { Breadcrumb } from './BreadCrumb';


const Home = ({ location }) => {
    return (
        <div>

            <Breadcrumb location={location.pathname} />
        </div>

    );
};

const Latest = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };
    return (
        <div>
            <div onClick={window.open('https://www.kkbox.com/tw/tc/column/')}></div>

            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />
        </div>
    );
};

const SpecialPlan = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };
    return (
        <div>
            <div onClick={window.open('https://www.kkbox.com/tw/tc/tag/article/OscB3jQpvdflOtQeg6')}></div>

            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />
        </div>
    );
};

const Top10 = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };
    return (
        <div>
            <div onClick={window.open('https://kma.kkbox.com/charts/?terr=tw&lang=tc&_ga=2.90114011.1302886338.1587348652-346554611.1587348652')}></div>

            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />
        </div>
    );
};

const KKAccount = ({ route, location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };
    return (
        <div>

            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />
            {renderRoutes(route.routes)}
        </div>
    );
};

const WhatsKkAccount = (props) => {
    console.log('props in WhatsKkAccount:', props);
    return (
        <div onClick={window.open('https://ssl.kkbox.com/tw/membership/account_info.php')}></div>
    )
};

const signIn = () => {

    return (
        <div>
            <div onClick={window.open('https://www.kkbox.com/tw/reg.php')}></div>
        </div>
    );
};


const StoredMoney = () => {

    return (
        <div>
            <div onClick={window.open('https://ssl.kkbox.com/billing.php')}></div>
        </div>
    );

};
const AccountOnly = () => {

    return (
        <div>
            <div onClick={window.open('https://www.kkbox.com/tw/tc/info/event/index.html')}></div>
        </div>
    );

};

const MemberCenter = () => {

    return (
        <div>
            <div onClick={window.open('https://ssl.kkbox.com/member.php')}></div>
        </div>
    );

};

const PointCenter = () => {

    return (
        <div>
            <div onClick={window.open('https://kkpoints.kkbox.com')}></div>
        </div>
    );

};

const ServiceIntro = ({ route, location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };
    return (
        <div>

            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />
            {renderRoutes(route.routes)}
        </div>
    );
};

const Support = () => {

    return (
        <div>
            <div onClick={window.open('https://www.kkbox.com/tw/tc/download')}></div>
        </div>
    );

};

const KkboxPrime = () => {

    return (
        <div>
            <div onClick={window.open('https://kkbox-prime.com/')}></div>
        </div>
    );

};

const KkboxKids = () => {

    return (
        <div>
            <div onClick={window.open('https://www.kkbox.com/service/kkboxkids/')}></div>
        </div>
    );

};

const KkTV = () => {

    return (
        <div>
            <div onClick={window.open('https://www.kktv.me/')}></div>
        </div>
    );

};

const KkTix = () => {

    return (
        <div>
            <div onClick={window.open('https://kktix.com/')}></div>
        </div>
    );

};


export {
    Home, Latest, SpecialPlan, Top10, KKAccount,
    WhatsKkAccount, signIn, StoredMoney, AccountOnly,
    MemberCenter, PointCenter, ServiceIntro, Support,
    KkboxPrime, KkboxKids, KkTV, KkTix
};