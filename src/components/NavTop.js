import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavTop extends Component {

    render() {
        return (
            <div className="nav-top">
                <ul className="container">
                    <li className="hidden-on-sticky">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/zing-chart">#Zingchart</Link>
                        <ul className="sub-menu-top">
                            <ul>
                                <p>K-pop</p>
                                <li><Link to="/">Bài hát</Link></li>
                                <li><Link to="/">Mv</Link></li>
                            </ul>
                            <ul>
                                <p>Us-uk</p>
                                <li><Link to="/">Bài hát</Link></li>
                                <li><Link to="/">Mv</Link></li>
                            </ul>
                            <ul>
                                <p>Realtime</p>
                                <li><Link to="/">Bài hát</Link></li>
                                <li><Link to="/">Mv</Link></li>
                            </ul>
                            <ul>
                                <p>Tuần</p>
                                <li><Link to="/">Bài hát</Link></li>
                                <li><Link to="/">Mv</Link></li>
                            </ul>
                        </ul>
                    </li>
                    <li><Link to="/new-release">Mới phát hành</Link></li>
                    <li>
                        <Link to="/top-100">Top 100</Link>
                        <ul className="sub-menu-top">
                            <ul>
                                <p>Việt nam</p>
                                <li><Link to="/">Nhạc trẻ</Link></li>
                                <li><Link to="/">Trữ tình</Link></li>
                                <li><Link to="/">Quê hương</Link></li>
                                <li><Link to="/">Nhạc cách mạng</Link></li>
                                <li><Link to="/">Rap/Hip-hop</Link></li>
                            </ul>
                            <ul>
                                <p>Châu mỹ</p>
                                <li><Link to="/">Pop</Link></li>
                                <li><Link to="/">Rock</Link></li>
                            </ul>
                            <ul>
                                <p>Châu á</p>
                                <li><Link to="/">Hàn quốc</Link></li>
                                <li><Link to="/">Nhật bản</Link></li>
                                <li><Link to="/">Hoa ngữ</Link></li>
                            </ul>
                            <ul>
                                <p>Hòa tấu</p>
                                <li><Link to="/">Clasical</Link></li>
                                <li><Link to="/">Piano</Link></li>
                                <li><Link to="/">Guitar</Link></li>
                                <li><Link to="/">Violin</Link></li>
                            </ul>
                        </ul>
                    </li>
                    <li><Link to="/topic">Chủ đề</Link></li>
                    <li className="hidden-on-sticky"><Link to="/mv">Mv</Link></li>
                    <li className="hidden-on-sticky"><Link to="/album">Album</Link></li>
                    <li className="hidden-on-sticky"><Link to="/artist">Nghệ sĩ</Link></li>
                    <li><Link to="/personal">Nhạc cá nhân</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavTop;