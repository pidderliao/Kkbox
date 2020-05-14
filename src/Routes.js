import {
    Home, Latest, SpecialPlan, Top10, KKAccount,
    WhatsKkAccount, signIn, StoredMoney, AccountOnly,
    MemberCenter, PointCenter, ServiceIntro, Support,
    KkboxPrime, KkboxKids, KkTV, KkTix, AlbumList
} from './Pages';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/Latest',
        component: Latest,
        breadcrumbName: 'Latest'
    },
    {
        path: '/SpecialPlan',
        component: SpecialPlan,
        breadcrumbName: 'SpecialPlan'
    },

    {
        path: '/Top10',
        component: Top10,
        breadcrumbName: 'Top10'
    },

    {
        path: '/KKAccount',
        component: KKAccount,
        breadcrumbName: 'KKAccount',
        routes: [
            {

                path: '/KKAccount/WhatsKkAccount',
                component: WhatsKkAccount,
                breadcrumbName: 'WhatsKkAccount'
            },

            {
                path: '/KKAccount/signIn',
                component: signIn,
                breadcrumbName: 'signIn'
            },

            {
                path: '/KKAccount/StoredMoney',
                component: StoredMoney,
                breadcrumbName: 'StoredMoney'
            },

            {
                path: '/KKAccount/AccountOnly',
                component: AccountOnly,
                breadcrumbName: 'AccountOnly'
            },


            {
                path: '/KKAccount/MemberCenter',
                component: MemberCenter,
                breadcrumbName: 'MemberCenter'
            },
            {
                path: '/KKAccount/PointCenter',
                component: PointCenter,
                breadcrumbName: 'PointCenter'
            },
        ]

    },

    {
        path: '/ServiceIntro',
        component: ServiceIntro,
        breadcrumbName: 'ServiceIntro',
        routes: [
            {
                path: '/ServiceIntro/Support',
                component: Support,
                breadcrumbName: 'Support'
            },
            {
                path: '/ServiceIntro/KkboxPrime',
                component: KkboxPrime,
                breadcrumbName: 'KkboxPrime'
            },
            {
                path: '/ServiceIntro/KkboxKids',
                component: KkboxKids,
                breadcrumbName: 'KkboxKids'
            },
            {
                path: '/ServiceIntro/KkTV',
                component: KkTV,
                breadcrumbName: 'KkTV'
            },
            {
                path: '/ServiceIntro/KkTix',
                component: KkTix,
                breadcrumbName: 'KkTix'
            },

        ]
    },
    {
        path: '/AlbumList',
        component: AlbumList,
        breadcrumbName: 'AlbumList',
    }


];

export default routes;