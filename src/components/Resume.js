import React, { Fragment } from 'react'
import { SiCodechef, SiLeetcode } from 'react-icons/si';
// import { IconName } from "react-icons/fa";

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">MOHAMMED SUHAIL</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    {/* <div className="col-md-6"> */}
                        {/* <h4 className="ff-jose ls-2">EXPERIENCE</h4> */}
                        {/* <ul> */}
                            {/* <li>
                                <h4 className="ff-jose my-1 text-red">Trainee Software Engineer</h4>
                                <h6 className="blue-label px-2 py-1">Jul 2021 - Apr 2022</h6>
                                <p className="m-0">TatvaSoft · Full-time</p>
                                <p>Ahmedabad, Gujarat, India</p>
                            </li> */}
                            {/* <li>
                                <h4 className="ff-jose my-1 text-red">Internship Trainee</h4>
                                <h6 className="blue-label px-2 py-1">Dec 2020 - Apr 2021</h6>
                                <p className="m-0">TatvaSoft · Internship</p>
                                <p>Ahmedabad, Gujarat, India</p>
                            </li> */}
                        {/* </ul> */}
                    {/* </div> */}
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BE - Computer Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2025</h6>
                                <p className="m-0">SKCET</p>
                                {/* <p>CGPA: 8.05</p> */}
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2021</h6>
                                <p className="m-0">Srinivasa Vidhayalaya Matric Higher Secondary School</p>
                                <p>Mark%: 93</p>
                            </li>
                        </ul>
                        <h4 className="ff-jose ls-2">WORK EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4>Internship</h4>
                                <h6><b>Phoenitags</b> - 2 Months</h6>
                                <p>Worked as Backend Developer</p>
                                {/* <p>CGPA: 8.05</p> */}
                            </li>
                            {/* <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2021</h6>
                                <p className="m-0">Srinivasa Vidhayalaya Matric Higher Secondary School</p>
                                <p>Mark%: 93</p>
                            </li> */}
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/suhailjms7" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://leetcode.com/Mohammed_Suhail_J/" target="/blank" className="text-white text-decoration-none mx-2">
                            <SiLeetcode className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume