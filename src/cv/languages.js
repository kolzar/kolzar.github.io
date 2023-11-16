import React from 'react';

class Languages extends React.Component {
    render() {
        let title = "";
        let listLanguages = "";
        if (this.props.cv) {
            const obj = this.props.cv ? this.props.cv.languages :  "";
            title = obj.title ? obj.title : "";
            listLanguages = obj.list.map( (item,i) =>  {
                let vote = item.vote.map(x => x);
                return (
                    <div className="row" key= {i}>
                        <div className="col">
                            <span><h5>{ item.title }</h5></span>
                            <div className="row">
                                <div className="col">
                                    <h6><i className="fa-solid fa-arrow-right"></i> { item.descr }</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
        return (
            <div id={`${title}`} className="headerCV container p-2 shadow-lg rounded">
                <div className="row">
                    <div className="col">
                        <h1>{ title.toUpperCase() } <i className="fa-solid fa-language"></i></h1>
                    </div>
                </div>
                { listLanguages }
            </div>
        )
    }
}

export default Languages