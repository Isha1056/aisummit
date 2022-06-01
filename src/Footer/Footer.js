import React from "react";
import './Footer.css'
import GDSCLogo from '../img/GDSCMPSTME.png';

export default function Footer() {
    return (

        <footer className="nb-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
                            <img src={GDSCLogo} className="img-responsive center-block GDSCLogo" alt=""/>
                            <p>The data you provide us shall be used to facilitate your participation in our event as well as stored securely for further internal use. We do not indulge in the trading and barter of data. If you know any officer or executive of the GDSC who may be performing such tasks, please reach out to our Grievance officer to register a complaint.</p> 
                            <p>Google Developer Student Club, NMIMS MPSTME Mumbai is a registered chapter of Google Developer Student Clubs, a program initiated by Google LLC and Google Developers.</p>
                            <p>Designed and developed by Angad Singh Kataria and Isha Gupta</p>
                            <div class ="social-media">
                            {/* <ul class ="list-inline">
                            <li><a href="https://www.linkedin.com/company/google-developer-student-club-mpstme/" title="" target="__blank"><i class ="fa fa-linkedin"/></a></li>
                            <li><a href="https://www.instagram.com/gdsc.mpstme/" title="" target="__blank"><i class ="fa fa-instagram"/></a></li>
                            <li><a href="https://github.com/GDSC-NMIMS-MPSTME-Mumbai" title="" target="__blank"><i class ="fa fa-github"/></a></li>
                            <li><a href="https://gdsc.community.dev/mukesh-patel-school-of-technology-management-and-engineering-mumbai/" title="" target="__blank"><i class ="fa fa-google"/></a></li>
                            </ul> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}