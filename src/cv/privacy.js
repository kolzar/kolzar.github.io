import React from 'react';

class Privacy extends React.Component {
    render() {
        let title = "";
        let descr = "";
        
        if (this.props.cv) {
            const obj = this.props.cv ? this.props.cv.privacy :  "";
            title = obj.title ? obj.title : "";
            descr = obj.descr ? obj.descr : "";
        }
        
        return (
            <div id={`${title}`} className="headerCV container p-2 shadow-lg rounded">
                <div className="row">
                    <div className="col">
                        <h1>{ title.toUpperCase() } <i className="fa-solid fa-lock"></i></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>{ descr } </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Privacy