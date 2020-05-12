import React from 'react';
import './index.css';
import './reset.css';

export default function HeadComponent() {
    return (
        <div>
            <div className="header">
                <div className="headerContainer">
                    <div className="logo">
                        <img src="https://pkg.kfs.io/images/1.0.0/logo/kkbox-logo-blue.svg"></img>
                    </div>
                    <div className="menuListContainer">
                        <div className="menuList">
                            <li className="menuItem">
                                <a href="https://www.kkbox.com/tw/tc/column/">最新</a>
                            </li>
                            <li className="menuItem">
                                <a href="https://www.kkbox.com/tw/tc/tag/article/OscB3jQpvdflOtQeg6">特別企劃</a>
                            </li>
                            <li className="menuItem">
                                <a href="https://kma.kkbox.com/charts/?terr=tw&lang=tc&_ga=2.90114011.1302886338.1587348652-346554611.1587348652">風雲榜</a>
                            </li>
                            <li className="menuItem">
                                <div className="dropdown">
                                    <a className="menuItem">KK帳號</a>
                                    <div className="dropdownContent">
                                        <a href="https://ssl.kkbox.com/tw/membership/account_info.php">什麼是KK帳號?</a>
                                        <a href="https://www.kkbox.com/tw/reg.php">註冊</a>
                                        <a href="https://ssl.kkbox.com/billing.php">繳費儲值</a>
                                        <a href="https://www.kkbox.com/tw/tc/info/event/index.html">會員好康</a>
                                        <a href="https://ssl.kkbox.com/member.php">會員中心</a>
                                        <a href="https://kkpoints.kkbox.com">點數中心</a>
                                    </div>
                                </div>
                            </li>
                            <li className="menuItem">
                                <div className="dropdown">
                                    <a className="menuItem">服務介紹</a>
                                    <div className="dropdownContent">
                                        <a href="https://www.kkbox.com/tw/tc/download">支援平台</a>
                                        <a href="https://kkbox-prime.com/">KKBOX Prime</a>
                                        <a href="https://www.kkbox.com/service/kkboxkids/">KKBOX Kids</a>
                                        <a href="https://www.kktv.me/">KKTV</a>
                                        <a href="https://kktix.com/">KKTix</a>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>

                    <div className="searchContainer">
                        <div className="searchList">
                            <li className="searchItem">
                                <a>搜尋</a>
                            </li>
                            <li className="searchItem">
                                <a href="https://www.kkbox.com/tw/tc/download">下載</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}