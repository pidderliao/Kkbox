import React from 'react';
import './index.css';
import './reset.css';
import { Link } from 'react-router-dom';

export default function ContentComponent() {

    return (
        <div>
            <div className="content">

                <div className="blurBackgroundMask">
                    <div className="row">
                        <div className="col4">
                            <div className="maydayContainer">
                                <img src="https://i.kfs.io/artist/global/6651,0v9/fit/300x300.jpg"></img>
                            </div>
                        </div>
                        <div className="col8">
                            <div className="maydayInfo">
                                <h1>五月天 (Mayday)</h1>
                                <Link className="maydayInfo" to="/AlbumList">專輯</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="leftMenuContainer">
                        <h2 className="sectionTitle">相關歌手</h2>
                        <div className="row">
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/z9OPs0z6SuTu6b8B0F0OD08I-index-1.html" title="四分衛 (Quarterback)">
                                            <img src="https://i.kfs.io/artist/global/1549,0v4/fit/300x300.jpg" alt="四分衛 (Quarterback)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/z9OPs0z6SuTu6b8B0F0OD08I-index-1.html" title="四分衛 (Quarterback)">四分衛(Quarterback)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/XEq926F3vz58ro50F01Wo08J-index-1.html" title="董事長樂團 (The Chairman)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/6196,0v2/fit/300x300.jpg" alt="董事長樂團 (The Chairman)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/XEq926F3vz58ro50F01Wo08J-index-1.html" title="董事長樂團 (The Chairman)">董事長樂團(The Chairman)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/LiqrAfgBMXMG9JM0F01ta08J-index-1.html" title="脫拉庫 (TOLAKU)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/7782,0v1/fit/300x300.jpg" alt="脫拉庫 (TOLAKU)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/LiqrAfgBMXMG9JM0F01ta08J-index-1.html" title="脫拉庫 (TOLAKU)">脫拉庫 (TOLAKU)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/v1ifSmD8XkvNU4k0F01Ld08J-index-1.html" title="乱彈阿翔 (Luantan Ascent)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/5481,0v5/fit/300x300.jpg" alt="乱彈阿翔 (Luantan Ascent)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/v1ifSmD8XkvNU4k0F01Ld08J-index-1.html" title="乱彈阿翔 (Luantan Ascent)">乱彈阿翔 (Luantan Ascent)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/pmXDnwWzrwIDhmo0F098X08J-index-1.html" title="縱貫線 (SUPERBAND)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/37409,0v1/fit/300x300.jpg" alt="縱貫線 (SUPERBAND)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/pmXDnwWzrwIDhmo0F098X08J-index-1.html" title="縱貫線 (SUPERBAND)">縱貫線 (SUPERBAND)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/VGnW4JaQ5R7gOqe0F06GK08J-index-1.html" title="八三夭 (831)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/25620,0v5/fit/300x300.jpg" alt="八三夭 (831)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/VGnW4JaQ5R7gOqe0F06GK08J-index-1.html" title="八三夭 (831)">八三夭 (831)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/gimG2FvT2DbdsU50F05Fp08J-index-1.html" title="蘇打綠 (Sodagreen)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/21493,0v4/fit/300x300.jpg" alt="蘇打綠 (Sodagreen)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/gimG2FvT2DbdsU50F05Fp08J-index-1.html" title="蘇打綠 (Sodagreen)">蘇打綠 (Sodagreen)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col6">
                                <div className="artist">
                                    <div className="cover">
                                        <a href="https://www.kkbox.com/tw/tc/artist/ozHoLIy-jPvlc1P0F06Sb08J-index-1.html" title="滅火器 (Fire EX.)">
                                            <img className="circle" src="https://i.kfs.io/artist/global/26407,0v7/fit/300x300.jpg" alt="滅火器 (Fire EX.)"></img>
                                        </a>
                                    </div>
                                    <div className="coverName">
                                        <a href="https://www.kkbox.com/tw/tc/artist/ozHoLIy-jPvlc1P0F06Sb08J-index-1.html" title="滅火器 (Fire EX.)">滅火器 (Fire EX.)
                                    </a>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="rightMenuContainer">
                        <h3 className="sectionTitle">歷年專輯</h3>
                        <div className="row">
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum" >

                                        <a href="https://www.kkbox.com/tw/tc/album/F415Na9wziArI0F42Yqh009H-index.html">
                                            <img src="https://i.kfs.io/album/global/67775917,0v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>
                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/F415Na9wziArI0F42Yqh009H-index.html" title="溫柔 #MaydayBlue20th (TENDERNESS #MaydayBlue20th)">溫柔 #MaydayBlue20th (TENDERNESS #MaydayBlue20th)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                {/* <OnclickEvent icon="https://i.kfs.io/album/global/60046786,2v1/fit/300x300.jpg" name="玫瑰少年 (Womxnly)" /> */}
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/MOOX7t-GN-sEq0F3.3r2009H-index.html">
                                            <img src="https://i.kfs.io/album/global/60046786,2v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>
                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/MOOX7t-GN-sEq0F3.3r2009H-index.html" title="玫瑰少年 (Womxnly)">玫瑰少年 (Womxnly)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/wkBnTY7dHu1kN0F3TQWq009H-index.html">
                                            <img src="https://i.kfs.io/album/global/58042422,0v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>

                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/wkBnTY7dHu1kN0F3TQWq009H-index.html" title="瘋狂世界 #MaydayBlue20th (World Crazy #MaydayBlue20th)">瘋狂世界 #MaydayBlue20th (World Crazy #MaydayBlue20th)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/gnYcI1x5xRWnr0F3JNxK009H-index.html">
                                            <img src="https://i.kfs.io/album/global/55410516,0v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>

                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/gnYcI1x5xRWnr0F3JNxK009H-index.html" title="五月天 人生無限公司 Life Live 完整收錄篇">五月天 人生無限公司 Life Live 完整收錄篇
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/ttNL7Fn1KHYfg0F3HkSz009H-index.html">
                                            <img src="https://i.kfs.io/album/global/54986559,0v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>

                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/ttNL7Fn1KHYfg0F3HkSz009H-index.html" title="五月天 人生無限公司 Life Live 好友加班篇">五月天 人生無限公司 Life Live 好友加班篇
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/Ih0mh0IytjEsF0F3G8yF009H-index.html">
                                            <img src="https://i.kfs.io/album/global/54562703,0v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>

                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/Ih0mh0IytjEsF0F3G8yF009H-index.html" title="純真 #MaydayBlue20th (INNOCENCE #MaydayBlue20th)">純真 #MaydayBlue20th (INNOCENCE #MaydayBlue20th)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/IUT79QkFA45vM0F2hNrd009H-index.html">
                                            <img src="https://i.kfs.io/album/global/45448681,0v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>

                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/IUT79QkFA45vM0F2hNrd009H-index.html" title="轉眼（2018 自傳最終章） (Final Chapter)">轉眼（2018 自傳最終章） (Final Chapter)
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li className="col3">
                                <div className="albumContainer">
                                    <div className="artistAlbum">
                                        <a href="https://www.kkbox.com/tw/tc/album/C1UW7g3wz7OEZ0F23ZBT009H-index.html">
                                            <img src="https://i.kfs.io/album/global/34484957,1v1/fit/300x300.jpg"></img>
                                        </a>
                                    </div>

                                    <div className="albumName">
                                        <a href="https://www.kkbox.com/tw/tc/album/C1UW7g3wz7OEZ0F23ZBT009H-index.html" title="I WILL CARRY YOU">I WILL CARRY YOU
                                    </a>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
