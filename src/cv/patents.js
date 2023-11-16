import React from 'react';

class Patents extends React.Component {
    render() {
        let title = "";
        let listaObj = (<div className="row"> </div>)
        if (this.props.cv) {
            const obj = this.props.cv ? this.props.cv.patents :  "";
            title = obj.title ? obj.title : "";
            listaObj = obj.list.map( (item, i)  => (
                <div className="row" key= {i}>
                    <div className="col">
                        <span> <h5>{ item.descr }</h5> {item.code} </span> 
                    </div>
                </div>
            ))
        }

        return (
            <div id={`${title}`} className="headerCV container p-2 shadow-lg rounded">
                <div className="row">
                    <div className="col">
                        <h1>{ title.toUpperCase() } <i className="fa-solid fa-id-card"></i></h1>
                    </div>
                </div>
                { listaObj }
            </div>
        )
    }
}

export default Patents