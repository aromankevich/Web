import React from 'react';
import '../../App.css';

function About() {
    return(
        <>
            <section className="text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">About Our ToDo List</h1>
                    <p className="lead text-muted">Our app will help you organize your work and tasks.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2">Get Started</a>
                    </p>
                </div>
            </section>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom text-center">Our ToDo List Features</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">

                        <div>
                            <h3>Start each day feeling calm and in control</h3>
                            <p>Get a clear view of everything that needs to be done and do not lose sight of important
                                tasks.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3>Channel your energy in the right direction</h3>
                            <p>Prioritize tasks and projects so you always know exactly what to work on next.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">

                        <div>
                            <h3>Everywhere with you</h3>
                            <p>Our application is always available from anywhere in the world. You just need internet
                                access!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default  About;