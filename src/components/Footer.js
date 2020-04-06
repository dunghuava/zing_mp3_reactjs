import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="text-center solid content-footer">
                        <img style={{width:40}} alt="" src="favicon.ico"/>
                        <span style={{color:'#fff',fontSize:12}}>Một sản phẩm của Zalo</span>
                        <br/>
                        <ul className="nav-footer">
                            <li><a rel="" href="/#">Giới thiệu</a></li>
                            <li><a rel="" href="/#">Liên hệ</a></li>
                            <li><a rel="" href="/#">Quảng cáo</a></li>
                            <li><a rel="" href="/#">Thỏa thuận dịch vụ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;