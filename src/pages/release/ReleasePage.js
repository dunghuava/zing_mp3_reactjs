import React, { Component } from 'react';
import './style.css';
import ListView from './ListView';
class ReleasePage extends Component {
    render() {
        return (
            <div className="zing-chart mg-top"><br/>
                <div className="container color-white">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-play-all">
                                <span className="fa fa-play"></span>
                                &nbsp;Nghe tất cả
                            </button>
                        </div>
                        <ListView/>
                    </div>

                </div>
            </div>
        );
    }
}
export default ReleasePage;