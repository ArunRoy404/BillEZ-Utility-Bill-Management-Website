import React from 'react';
import '../ErrorPage/errorpage.css'
import { NavLink } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const Errorpage = () => {
    return (
        <div className='container mx-auto min-h-[calc(100vh-403px)] 2xl:px-20 p-3'>
            <Navbar></Navbar>
            <div>
                <section className="page_404 flex items-center justify-center h-[calc(100vh-116px)]">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-10 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center ">404</h1>
                                    </div>
                                    <div className="contant_box_404">
                                        <h3 className="h2">
                                            Look like you're lost
                                        </h3>

                                        <p>the page you are looking for not available!</p>
                                        <NavLink to={'/'} className={'link_404'}>Back to home</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Errorpage;