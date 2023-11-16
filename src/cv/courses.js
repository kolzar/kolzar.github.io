import React from 'react';

class Courses extends React.Component {
    render() {
        let title = "";
        let listaObj = (<div className="row"> </div>)
        if (this.props.cv) {
            const obj = this.props.cv ? this.props.cv.courses :  "";
            title = obj.title ? obj.title : "";
            listaObj = obj.list.map( (item, i)  => (
                <div className="row" key= {i}>
                    <div className="col">
                        <span> <h5>{ item.code }</h5> {item.descr} </span> 
                    </div>
                </div>
            ))
        }

        return (
            <div id={`${title}`} className="headerCV container p-2 shadow-lg rounded">
                <div className="row">
                    <div className="col">
                        <h1>{ title.toUpperCase() } <i className="fa-solid fa-certificate"></i></h1>
                    </div>
                </div>
                { listaObj }
            </div>
        )
    }
}

export default Courses