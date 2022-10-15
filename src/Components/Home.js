import React from 'react';
import '../Components/home.css';
import  myPic from './images/mypic.jfif'; 
class Home extends React.Component {
   
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
        <div className="container">
                <div className='row'>
                    <div className='col-sm-4'>
                        <img className='rounded-circle mx-auto d-block'style={{height:350,width:350}} 
                        src={myPic} alt="myPhoto"></img>
                    </div>
                    <div className='col-sm-8'>
                        <h1 className='career-obj'>Career Objective</h1>
                        <p style={{fontSize:20,marginTop:50}} className='career-obj-content'>I am seeking opportunities to join a company that can help me in enhancing my skills, strengthening my knowledge and 
                            realizing my potential. I am willing to explore a wide variety of opportunities that can help me gain perspective
                        </p>
                    </div>
                </div>
        </div>
        <br/>
        <h1 className='heading'>Education Details</h1><br/>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    
                    <table class="table table-striped table-hover table-dark">
                        <thead>
                            <tr>
                            <th scope="col">EDUCATION</th>
                            <th scope="col">INSTITUTE</th>
                            <th scope="col">PERCENTAGE</th>
                            <th scope="col">YEAR / PLACE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Graduation</th>
                            <td>Saveetha Engineering College</td>
                            <td>76%</td>
                            <td>2022 / Chennai</td>

                            </tr>
                            <tr>
                            <th scope="row">HSC</th>
                            <td>S.E.T Vidhiya Devi Matric Higher Secondary School</td>
                            <td>79%</td>
                            <td>2018 / Pattukkottai</td>
                            </tr>
                            <tr>
                            <th scope="row">SSLC</th>
                            <td>St.Thomas Higher Secondary School</td>
                            <td>88.5</td>
                            <td>2016 / Pattukkottai</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        <br/>
        <h1 className='heading' >Technical Skills</h1><br/>  
        <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                    <div id="accordion">
                        <div className='lang-div'>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                        <h1 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#lang" aria-expanded="true" aria-controls="lang">
                            Programming Languages
                                </button>
                </h1>
                </div>

                <div id="lang" data-parent="#accordion">
                <div class="card-body">
                        <div className='lang-container'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>HTML</li> <li>CSS</li> <li>Javascript</li>
                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>Java</li> <li>OOPS</li> <li>C</li> 
                                    </ul>
                                </div>
                                
                                </div>
                        </div>
                            
                </div>
                
                </div>
            </div>
            </div>
            <div className='frame-div'>
            <div class="card">
                <div class="card-header" id="framework">
                <h1 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#frame" aria-expanded="false" aria-controls="frame">
                    Frameworks
                    </button>
                </h1>
                </div>
                <div id="frame" class="collapse" aria-labelledby="framework" data-parent="#accordion">
                <div class="card-body">
                    <ul>
                        <li>React JS</li> <li>Node JS</li> <li>Bootstrap</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className='Tools-div'>
            <div class="card">
                <div class="card-header" id="tools">
                <h1 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tool" aria-expanded="false" aria-controls="frame">
                    Tools and Pratice
                    </button>
                </h1>
                </div>
                <div id="tool" class="collapse" aria-labelledby="tools" data-parent="#accordion">
                <div class="card-body">
                <ul>
                    <li>Mongo DB</li> <li>MS Office</li>
                </ul>
                </div>
                </div>
            </div>
            </div>
            <div className='de-platform-div'>
            <div class="card">
                <div class="card-header" id="de-platform">
                <h1 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#de-plat" aria-expanded="false" aria-controls="de-plat">
                        Design and Platform
                    </button>
                </h1>
                </div>
                <div id="de-plat" class="collapse" aria-labelledby="de-plat" data-parent="#accordion">
                <div class="card-body">
                <table class="table">
                    <thead>
                        <th>DESIGN</th>
                        <th>PLATFORM</th>
                    </thead>
                    <tbody>
                        <td> UI / UX</td> 
                        <td>Windows</td>
                        
                    </tbody>
                </table>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>                                   
            </div>
        </div>
        <br/>

        <h1 className='heading'>Projects</h1><br/>
        <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">GitHub</th>
                                </tr>
                                <tr><th colspan="3"><center><strong>Software</strong></center></th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">To-DO-List</th>
                                <td><p>To-do-List UI using React.JS</p></td>
                                <td><a href='https://github.com/hasuhari16/to-do-list'><i> to-do-list</i></a></td>
                                </tr>
                                
                                <tr className='bg-info'>
                                <th scope="row">GUI based Handing Databases</th>
                                <td><p>This project is about Handling Database in GUI based without typing of any queries.It's a User Friendly.</p></td>
                                <td><a href='#GUI'><i>API</i></a></td>
                                </tr>

                                <tr>
                                <th scope="row">MedicoRoute</th>
                                <td><p>This is for students to know about different kinds of medical courses.</p></td>
                                <td><a href='https://github.com/hasuhari16/medicoroute'><i>medicoroute</i></a></td>
                                </tr>
                                <tr className='bg-info'>
                                <th scope="row">HaChat</th>
                                <td><p>It is a Mini Social media Front-End Page like Facebook</p></td>
                                <td><a href='https://github.com/hasuhari16/hachat'><i>hachat</i></a></td>
                                </tr>
                                <tr>
                                <th scope="row">Online FM</th>
                                <td><p>It is a kind of Google drive for management of Files in Online,but it was not completed.</p></td>
                                <td><a href='https://github.com/hasuhari16/hachathttps://github.com/hasuhari16/Online-File-Management-System'><i>Online FM</i></a></td>
                                </tr>
                                <tr className='bg-info'>
                                <th scope="row">Namma Area App</th>
                                <td><p>Prototype of Namma Area App, this app helps people to drop their queries happened in their own 
                                        area.</p></td>
                                <td><i>UI / UX </i></td>
                                </tr>
                                
                                <tr><th colspan="3"><center><strong>Hardware</strong></center></th></tr>
                                
                                <tr className='table-info'>
                                <th scope="row">ESEE Reader</th>
                                <td><p>This is used for calculating E-Bill consumed and take reading montly and also send alert to the customer 
                                    phone as SMS. It is a Team Project. </p></td>
                                <td><i>IOT Based</i></td>
                                </tr>
                               
                                
                                
                            </tbody>
                        </table>
                    </div>

                </div>

        </div><br/>

        <h1 className='heading'>Area Of interest</h1>
        <div className='container'>
            <div class="container overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-6">
                        <div class="p-2 m-2 border bg-info" style={{color:'white'}}>Frontend</div>
                        </div>
                        <div class="col-6">
                        <div class="p-2 m-2 border bg-light" >MERN Stack Developer</div>
                        </div>
                        <div class="col-6">
                        <div class="p-2 m-2 border bg-light">UI / UX</div>
                        </div>
                        <div class="col-6">
                        <div class="p-2 m-2 border bg-info" style={{color:'white'}}>Software Developer</div>
                        </div>
                    </div>
            </div>
        </div><br/>

        <h1 className='heading'>Certifications and Participations</h1>
                <div className='cert-container'>
                        <div className='certify'> 
                        <div className='live'>
                            <button class="btn btn-warning" type="button" 
                                                data-toggle="collapse" data-target="#cer-livewire" 
                                                aria-expanded="false" aria-controls="cer-livewire">
                                        Livewire <span class="material-icons">touch_app</span>

                                    </button>
                                <div className='live'>
                                    <div class="collapse" id="cer-livewire">
                                    <div class="card card-body">
                                    <ul className='ul'>
                                        <li>Python</li>
                                        <li >C</li>
                                        <li>C++</li>
                                    </ul></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='certify'>
                            <div className='solo'>
                                
                                    <button className="btn btn-warning" type="button"
                                            data-toggle="collapse" data-target="#cer-solo" aria-expanded="true"
                                            aria-controls="cer-solo">
                                                Solo Learn <span class="material-icons">touch_app</span>
                                    </button>
                                                <div class="collapse" id="cer-solo">
                                                <div class="card card-body">
                                                        <div className='solo'>
                                                                    <ul>
                                                                        <li>HTML</li>
                                                                        <li>CSS</li>
                                                                        <li>React+Redux</li>
                                                                        <li>JavaScript</li>
                                                                        <li>PHP</li>
                                                                </ul>
                                                                </div></div>
                                                </div>
                                        
                                </div>
                        </div>
                    
                        <div className='certify'>
                                    <div className='great'>
                                        <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#cer-great" aria-expanded="false" aria-controls="cer-great">
                                        Great learning <span class="material-icons">touch_app</span>
                                </button>
                                <div class="collapse" id="cer-great">
                                                <div class="card card-body">
                                                        <div className='solo'>
                                                                <li>Introduction to Programming</li>
                                                        </div></div>
                                    </div>
                                </div>
                        </div>
                        <div className='certify'>
                            <div className='Study-monk'>
                        
                            <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#stdmok" aria-expanded="false" aria-controls="stdmok">
                                StudyMonk <span class="material-icons">touch_app</span>
                        </button>
                        <div class="collapse" id="stdmok">
                                        <div class="card card-body">
                                                <div className='great'>
                                                        <ul>
                                                            <li>Bootcamp Completion Studymonk</li>
                                                            <li>Stackathon 3.0 Participated </li>
                                                            <li>Stackathon 3.0 -
                                                                <b>Won Best Collab Award</b></li>
                                                        </ul>
                                                </div>
                                    </div>
                            </div>
                        </div>
                        </div>

                        <div className='certify'>
                                <div className='clg-part'>
                        
                            <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#esee" aria-expanded="false" aria-controls="esee">
                                    ESEE Reader (Project)
                                <span class="material-icons">touch_app</span>
                                </button>
                        <div class="collapse" id="esee">
                                        <div class="card card-body">
                                                <div className='great'>
                                                        <ul>
                                                            <li>Paper Presentation in Symposium</li>
                                                            <li>Smart India Hackathon</li>
                                                            <li><b>Project EXPO - </b>
                                                            Participated and Won 1st Prize in Expo at
                                                            <b> - Jeppiaar institute of technology, Chennai.</b>
                                                            
                                                            </li>
                                                        </ul>
                                                </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                </div>
        <br/>
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
 
export default Home;



