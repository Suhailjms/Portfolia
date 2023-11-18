import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'> I am Sophomore in B.E CSE
                            </p>
                            <p className='slide-in-bottom'>
                                A person who always trying to Surpass his limits.
                               </p>
                            <p className='slide-in-bottom'>
                                I have a some basic knowledge in <span className="text-red ls-2">React, Java,Python,FastAPI,SpringBoot,Docker,MongoDb,MySQL<br></br></span>
                            </p>
                        </div>
                    </div>
                    



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About