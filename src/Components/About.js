import React from 'react';
import './about.css';
import Resume from '../HariharasudhanSp Resume.pdf';


class About extends React.Component {
    
    render() { 
        return (
        <body>
                <header>
                <div  style={{backgroundColor:"#112B3C",color:"white"}} className='jumbotron text-center'>
                <h1 className='name'>Hariharasudhan SP</h1>
                <h6>Front-End Developer</h6>
                <nav>
                    <ul className="nav nav-pills nav-fill" id="navigation">
                    <li className="nav-item">
                    <a style={{backgroundColor:"#A6D1E6",color:"#000000"}} className="nav-link active" href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                    <a style={{backgroundColor:"#A6D1E6",color:"black"}} className="nav-link active" href='/projects'>Projects</a>
                    </li>
                    <li className="nav-item">
                    <a  style={{backgroundColor:"#A6D1E6",color:"black"}}className="nav-link active" href='/certifications'>Certifications</a>
                    </li>
                    <li className="nav-item">
                    <a  style={{backgroundColor:"#A6D1E6",color:"black"}}className="nav-link active" href='/about'>About</a>
                    </li>
                    
                    </ul>
                </nav> 
                </div>
                </header>

            <div>
                <h1> Personal Details </h1>
                    <table className="table table-striped table-dark">
                        <tr><td>Father’s name</td><th>:</th><td>S.Pushpanathan</td></tr>
                        <tr><td>Father’s Occupation </td><th>:</th><td>Financier</td></tr>
                        <tr><td>Date Of Birth</td><th>:</th><td>16/09/2000 </td></tr>
                        <tr><td>Gender</td><th>:</th><td> Male </td></tr>
                        <tr><td>Blood Group</td><th>:</th><td> A+ </td></tr>
                        <tr><td>Address</td><th>:</th><td>233, Kottai Sivan Kovil Streeet, Pattukkottai – 614601
                            Thanjavur (Dist) Tamil Nadu.</td></tr>
                    </table>  
            </div>
                <div><center>
                    <a href={Resume} download="Hariharasudhan_Resume"  target='_blank'>
                            <button><img src={require("./images/download.png")} alt="download"></img> My Resume</button>
                    </a></center>
                </div><br/>

            <footer style={{fontSize:20,backgroundColor:'#06283D'}} className='jumbotron text-center' id='footer'>
        <ul className='nav justify-content-center'>
            <li className='nav-item'>
                <a href='https://www.linkedin.com/in/hariharasudhan-sp-146aa31a0/'>
                    <i class="fa fa-linkedin nav-link" aria-hidden="true"></i></a>
                <a href='https://www.instagram.com/hari.sudhan16/'>
                    <i class="fa fa-github nav-link" aria-hidden="true"></i></a>
                <a href='https://www.youtube.com/channel/UCPcQE2P7VCiDengLgirPL6w'>
                    <i class="fa fa-youtube-play nav-link" aria-hidden="true"></i></a>
                <a href='https://www.instagram.com/hari.sudhan16/'>
                    <i class="fa fa-instagram nav-link" aria-hidden="true"></i></a>
            </li>
        </ul>
            </footer>
        </body>
       
        ); 
    }
}
 
export default About;