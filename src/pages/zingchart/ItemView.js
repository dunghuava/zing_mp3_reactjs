import React, { Component } from 'react';

class ItemView extends Component {
    constructor (props){
        super(props);
    }
    getClasses(num){
        if (num==1){
            return 'blue';
        }else if (num==2){
            return 'green';
        }else if (num==3){
            return 'red';
        }
    }
    render() {
        return (
            <div className="z-item-view">
                <div className="row">
                    <div className="col-md-1">
                        <p className={'row-index '+this.getClasses(this.props.rowIndex+1)}>{this.props.rowIndex+1}</p>
                    </div>
                    <div className="col-md-5">
                        <div className="option-name">
                            <img alt="" src={'img/'+this.props.data.img}/>
                            <div className="option-ms-name">
                                <p className="mb0">{this.props.data.title}</p>
                                <p className="mb0 m-auth">{this.props.data.author}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="times-toltal mb0">{this.props.data.time}</p>
                    </div>
                    <div className="col-md-2">
                        <div className="option-item-view">
                            <span className="fa fa-heart"></span>
                            <span className="fa fa-play"></span>
                            <span className="fa fa-ellipsis-h"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemView;