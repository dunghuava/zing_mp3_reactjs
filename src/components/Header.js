import React, { Component } from 'react';
import './style.css';
import NavTop from './NavTop';
import { Link } from 'react-router-dom';
class Header extends Component {
    componentDidMount(){
        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("nav-top");
        var palignbottom = document.getElementById('p-align-bottom');
        var sticky = palignbottom.offsetTop;
        function myFunction() {
            if (window.pageYOffset >= (sticky-25)) {
                navbar.classList.add("sticky");
                navbar.classList.remove("un-sticky");
                document.getElementById('input-search-top').setAttribute('placeholder','Tìm kiếm...');
            } else {
                navbar.classList.remove("sticky");
                navbar.classList.add("un-sticky");
                document.getElementById('input-search-top').setAttribute('placeholder','Nhập tên bài hát, ca sĩ hoặc mv...');
            }
        }
    }
    render() {
        return (
            <div id="nav-top" className="z-top-header un-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <div className="z-logo">
                                <Link to="/">
                                    <img alt="z-logo" src="img/logo-mp-3.svg"/>
                                </Link>
                            </div>
                        </div>
                        <div id="p-align-bottom" className="col-md-6 p-align-bottom">
                            <NavTop/>
                        </div>
                        <div className="col-md-3 p-align-top">
                            <div className="form-search">
                                <input id="input-search-top" className="form-control" placeholder="Tìm kiếm..."/>
                                <span className="icon-abs fa fa-search"></span>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="z-thumb-user mt5">
                                <img alt="" src="img/thumb_user.jpg"/>
                                <div className="text-thumb">
                                    <span>Dũng</span>
                                    <span style={{marginLeft:50}} className="fa fa-angle-down"></span>
                                    <span className="z-text">Tài khoản VIP</span>
                                </div>
                                <div className="sub-account-info">
                                    <li><span className="fa fa-user"></span> Nhạc cá nhân</li>
                                    <li><span className="fa fa-sign-out"></span> Đăng xuất</li>
                                    <li><span className="fa fa-cog"></span> Nền tối</li>
                                    <hr/>
                                    <div className="text-center">
                                        <button className="btn btn-muavip">Mua VIP ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;