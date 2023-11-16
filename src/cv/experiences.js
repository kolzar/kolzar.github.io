import React from 'react';

class Experiences extends React.Component {
    render() {
        let title = "";
        let listaExperiences = (<div className="row"> </div>)
        if (this.props.cv) {
            const experiences = this.props.cv ? this.props.cv.experiences :  "";
            title = experiences.title ? experiences.title : "";
            listaExperiences = experiences.list.map( (item, i)  => (
                <div className="row" key= {i}>
                    <div className="col">
                        <span><h4><i className="fa-solid fa-mug-hot"></i> - { item.title }</h4></span>
                        <div className="row">
                           <div className="col">
                                <h4> <i className="fa-solid fa-building"></i> { item.enterprise }</h4>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col">
                                <h6> <i className="fa-solid fa-calendar-days"></i> { new Date(item.ds).toLocaleDateString() } - { item.de === "present" ? item.de : new Date(item.de).toLocaleDateString()}</h6>
                            </div>
                            <div className="col">
                                <h6> <i className="fa-solid fa-location-crosshairs"></i> { item.where}</h6>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col">
                                <h5><i className="fa-solid fa-arrow-right"></i> { item.descr }</h5>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col">
                              <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }

        return (
            <div id={`${title}`} className="headerCV container p-2 shadow-lg rounded">
                <div className="row">
                    <div className="col">
                        <h1>{ title.toUpperCase() } <span className="fa-solid fa-code"></span></h1>
                    </div>
                </div>
                { listaExperiences }
            </div>
        )
    }
}

export default Experiences