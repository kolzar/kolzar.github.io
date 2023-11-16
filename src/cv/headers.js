import React from 'react';

class Header extends React.Component {
    render() {
        const title = this.props.cv ? this.props.cv.header.title :  "";
        const descr = this.props.cv ? this.props.cv.header.descr :  "";
        const mail = this.props.cv ? this.props.cv.header.mail :  "";
        const cell = this.props.cv ? this.props.cv.header.cell :  "";
        const taxcode = this.props.cv ? this.props.cv.header.taxcode :  "";
        const address = this.props.cv ? this.props.cv.header.address :  "";
        const linkedin = this.props.cv ? this.props.cv.header.linkedin :  "";
        return (
            <div className="headerCV container p-2 shadow-lg rounded">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <h1 className='display-1'>{ title.toUpperCase() }</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"><h4>{ descr }</h4></div>
                        </div>
                        <div className="row">
                            <div className="col"><h4> </h4></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>
                                    <i className="fa-solid fa-phone  fa-shake" style={{color:'green'}}></i>  {cell}  
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>
                                    <i className="fa-layers fa-lg" >
                                        <i className="fa-solid fa-envelope"></i>
                                        <i className="fa-layers-counter" style={{background:'Tomato'}}>1</i>
                                    </i>  {mail}
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>
                                    <i className="fa-solid fa-id-card"></i>  {taxcode}
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>
                                    <i className="fa-solid fa-house-chimney"></i>  {address}
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>
                                    <a href={`${linkedin}`} class="nav-link"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="./img/gr.jpg" className="img-fluid rounded-circle" alt=".um"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header