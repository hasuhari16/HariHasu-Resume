import React from 'react';
import '../Components/certifications.css';
 
class Certifications extends React.Component {
   
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

             <h1 className='heading'>Certifications </h1><marquee>Hover Over the Certificates..<i className='fa fa-hand-pointer-o' aria-hidden="true"></i></marquee>
                    
                                
                <div className='cert-container'> 
                    <div className='cHeading'><center><img src={require("./images/lwlogo.png")} height={50}></img></center></div><br/>

                    <div className='cer-cont'> 
                            
                                <div className='cer-box'><img className='logo' src={require("./images/pylogo.png")}></img><br/>
 
                                    <div><img className='i-cer' src={require("./images/pyLive.jfif")} alt='py1'></img>
                                        <center><p>Certificate of Completion in <b>Python</b></p></center>
                                    </div>
                                    <div><img className='i-cer' src={require("./images/pyliveSkills.jfif")} alt='py2'></img>
                                        <center><p><b>Skill Certificate</b> for Python</p></center>
                                    </div>                          
                                </div> 
                              
                                <div className='cer-box'><img className='logo' src={require("./images/cppLogo.png")}></img><br/>

                                     
                                    <div className='i-cer'><img src={require("./images/cLive.jfif")} alt='c1'></img>
                                        <center><p>Certificate of Completion in <b>C programming</b></p></center>
                                    </div>
                                    <div className='i-cer'><img src={require("./images/cLiveSkill.jfif")} alt='c2'></img>
                                        <center><p><b>Skill Certificate</b> for C programming</p></center>
                                    </div>
                                </div>
                                
                                <div className='cer-box'><img className='logo' src='https://i1.wp.com/filipjaniszewski.com/wp-content/uploads/2016/12/C-PNG-Clipart.png?fit=550%2C380' height={80} width={170}></img>
                                <br/>

                                <div className='i-cer'><img src={require("./images/c++Live.jfif")} alt='cpp1'></img>
                                    <center><p>Certificate of Completion in <b>C++</b></p></center>
                                </div>
                                <div className='i-cer'><img src={require("./images/c++Live.jfif")} alt='cpp2'></img>
                                    <center><p><b>Skill Certificate</b> for C++</p></center>
                                </div>
                                </div>  
                    </div><br/>
                
                    <div className='cHeading'>
                
                    <center><img src={require("./images/sllogon.png")} height={50}></img></center>
                    </div><br/>

                    <div className='cer-cont'>
                            <div className='cer-box'>
                                    <div><img className='i-cer' src={require("./images/htmlSolo.jfif")} alt='php'></img>
                                        <center><p>Certificate of Completion in <b>PHP</b></p></center>
                                    </div>  
                                    <div><img className='i-cer' src={require("./images/phpSolo.jfif")} alt='html'></img>
                                        <center><p>Certificate of Completion in <b>HTML</b></p></center>
                                    </div>
                                    <div><img className='i-cer' src={require("./images/reactSolo.jfif")} alt="react-redux"></img>
                                        <center><p>Certificate of Completion in <b>React + Redux</b></p></center>
                                    </div>                        
                            </div> 

                    </div>

                    <div className='cHeading'>
                        <div className="gt-hack">
                        <img src={require("./images/glLogo.png")} height={100}></img>
                        <img src={require("./images/hjaiLogo.png")} height={100}></img>
                        </div>
                    </div><br/>
            
                    <div className='cer-cont'>
                        <div className='cer-box'>
                            <div><img className='i-cer' src={require("./images/greatLearning.jfif")} alt='greatlearn'></img>
                                <center><p>Certificate for <b>Introdution to Programming</b> in GreatLearning</p></center>
                            </div>  
                            <div><img className='i-cer' src={require("./images/hackjai.jfif")} alt='hackjaipur'></img>
                                <center><p>Participation Certificate for Hackathon in <b>HackJaipur</b></p></center>
                            </div>  
                        </div> 
                    </div>

                <div className='cHeading'><center><img src={require("./images/studymonk.png")} height={80} alt="studymonk" ></img></center>
                </div><br/>

                    <div className='cer-cont'>
                                <div className='cer-box'>
                                        <div><img className='i-cer' src={require("./images/bootcampSM.jfif")} alt='bootcamp'></img>
                                            <center><p> <b>Bootcamp</b> Certificate in Studymonk</p></center>
                                        </div>  
                                        <div><img className='i-cer' src={require("./images/stackathon.jfif")} alt='stackaton'></img>
                                            <center><p> Participation Certificate in <b>Studymonk's Stackaton</b></p></center>
                                        </div>
                                </div> 

                    </div>

                    <div className='cHeading'><center><span><strong>Achievements</strong></span><img src='https://cdn3.iconfinder.com/data/icons/auction-icons/425/Ribbon_With_Star-512.png' height={50} alt="studymonk" ></img></center>
                    </div><br/>

                    <div className='cer-cont'>
                                <div className='cer-box'>
                                        <div><center><img className='i-cer' src={require("./images/pjtexpo.jfif")} alt='projextEx'></img></center>
                                            <center><h5>Project Expo'19</h5></center>
                                            <p>Me and My Team actively participated at Kanitamizh Peravai Association by presenting our project titled as Automated Electric bill calculation <i>(ESEE Reader)</i> held at <b>Saveetha Engineering College</b>.</p></div>
                                        <div><center><img className='i-cer' src={require("./images/seminar.jfif")} alt='Seminar'></img></center>
                                            <center><h5>Best Seminar Award at Drestien'19</h5></center>
                                            <p>Actively participated and receive award from my Department head <b>Dr. G. Nalini priya ME, PhD </b> <i>(Professor)</i>and class Mentor <b>Dr. N. Kanagavalli ME, PhD </b><i>(Professor)</i> by presenting a Seminar titled as <b>Machine learning and Deep learning.</b></p>
                                        </div>
                                </div> 

                    </div>
            

            </div>
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
 
export default Certifications;