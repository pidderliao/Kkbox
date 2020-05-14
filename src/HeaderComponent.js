import React from 'react';
import './index.css';
import './reset.css';
import { Link } from 'react-router-dom';

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
                                <Link className="menuItem" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="menuItem">
                                {/* <a href="https://www.kkbox.com/tw/tc/column/">最新</a> */}
                                <Link to="/Latest">
                                    最新
                                </Link>
                            </li>
                            <li className="menuItem">
                                {/* <a href="https://www.kkbox.com/tw/tc/tag/article/OscB3jQpvdflOtQeg6">特別企劃</a> */}
                                <Link to="/SpecialPlan">
                                    特別企劃
                                </Link>
                            </li>
                            <li className="menuItem">
                                {/* <a href="https://kma.kkbox.com/charts/?terr=tw&lang=tc&_ga=2.90114011.1302886338.1587348652-346554611.1587348652">風雲榜</a> */}
                                <Link to="/Top10">
                                    風雲榜
                                </Link>
                            </li>
                            <li className="menuItem">
                                <div className="dropdown">
                                    <Link className="menuItem" to="/KKAccount">KKAccount</Link>
                                    {/* // to="/electronics"
                                    // id="navbarDropdownMenuLink"
                                    // role="button"
                                    // data-toggle="dropdown"
                                    // aria-haspopup="true"
                                    // aria-expanded="false" */}



                                    <div className="dropdownContent">
                                        {/* // aria-labelledby="navbarDropdownMenuLink" */}

                                        <Link className="dropdownItem" to="/KKAccount/WhatsKkAccount">
                                            什麼是KK帳號?
                                        </Link>
                                        <Link className="dropdownItem" to="/KKAccount/signIn">
                                            註冊
                                        </Link>
                                        <Link className="dropdownItem" to="/KKAccount/StoredMoney">
                                            繳費儲值
                                        </Link>
                                        <Link className="dropdownItem" to="/KKAccount/AccountOnly">
                                            會員好康
                                        </Link>
                                        <Link className="dropdownItem" to="/KKAccount/MemberCenter">
                                            會員中心
                                        </Link>
                                        <Link className="dropdownItem" to="/KKAccount/PointCenter">
                                            點數中心
                                        </Link>
                                    </div>

                                </div>
                                {/* <div className="dropdownContent">
                                    <a href="https://ssl.kkbox.com/tw/membership/account_info.php">什麼是KK帳號?</a>
                                    <a href="https://www.kkbox.com/tw/reg.php">註冊</a>
                                    <a href="https://ssl.kkbox.com/billing.php">繳費儲值</a>
                                    <a href="https://www.kkbox.com/tw/tc/info/event/index.html">會員好康</a>
                                    <a href="https://ssl.kkbox.com/member.php">會員中心</a>
                                    <a href="https://kkpoints.kkbox.com">點數中心</a>
                                </div>
                            </div> */}
                            </li>
                            <li className="menuItem">
                                <div className="dropdown">
                                    <Link className="menuItem" to="/ServiceIntro">服務介紹</Link>
                                    <div className="dropdownContent">
                                        <Link className="dropdownItem" to="/ServiceIntro/Support" >支援平台</Link>
                                        <Link className="dropdownItem" to="/ServiceIntro/KkboxPrime" >KKBOX Prime</Link>
                                        <Link className="dropdownItem" to="/ServiceIntro/KkboxKids" >KKBOX Kids</Link>
                                        <Link className="dropdownItem" to="/ServiceIntro/KkTV" >KKTV</Link>
                                        <Link className="dropdownItem" to="/ServiceIntro/KkTix" >KKTix</Link>
                                        {/* <a href="https://www.kkbox.com/tw/tc/download">支援平台</a>
                                        <a href="https://kkbox-prime.com/">KKBOX Prime</a>
                                        <a href="https://www.kkbox.com/service/kkboxkids/">KKBOX Kids</a>
                                        <a href="https://www.kktv.me/">KKTV</a>
                                        <a href="https://kktix.com/">KKTix</a> */}
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