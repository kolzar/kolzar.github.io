import React from 'react';

class Educations extends React.Component {
    render() {
        let title = "";
        let listaEducations = (<div className="row"> </div>)
        if (this.props.cv) {
            const educations = this.props.cv ? this.props.cv.education :  "";
            title = educations.title ? educations.title : "";
            listaEducations = educations.list.map( (item, i)  => (
                <div className="row" key= {i}>
                    <div className="col">
                        <span><h4><i className="fa-solid fa-user-graduate"></i> - { item.title }</h4></span>
                        <div className="row">
                           <div className="col">
                                <h4> <i className="fa-solid fa-building-columns"></i> { item.enterprise }</h4>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col">
                                <h6> <i className="fa-solid fa-calendar-days"></i> { new Date(item.ds).toLocaleDateString() } -  { new Date(item.de).toLocaleDateString() } </h6>
                            </div>
                            <div className="col">
                                <h6> <i className="fa-solid fa-location-crosshairs"></i> { item.where}</h6>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col">
                                <h5><i className="fa-solid fa-hand-spock"></i> { item.descr }</h5>
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
                        <h1>{ title.toUpperCase() } <span className="fa-solid fa-building-columns"></span></h1>
                    </div>
                </div>
                { listaEducations }
            </div>
        )
    }
}

export default Educations