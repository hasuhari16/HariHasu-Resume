import React from 'react';
import '../Components/project.css';
class Projects extends React.Component {
    state = {  } 
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
            <h1 className='heading'>Projects</h1><br/>
        <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <table class="table table-striped">
                            <thead>
                                <tr className='bg-success'>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">GitHub</th>
                                </tr>
                                <tr className='table-active'><th colspan="3"><center><strong>Software</strong></center></th></tr>
                            </thead>
                            <tbody>
                                <tr className='bg-warning'>
                                <th scope="row">To-DO-List</th>
                                <td><p>To-do-List UI using React.JS</p></td>
                                <td><a href='https://github.com/hasuhari16/to-do-list'><i> to-do-list</i></a></td>
                                </tr>
                                
                                <tr className='table-info'>
                                <th scope="row">GUI based Handing Databases</th>
                                <td><p>This project is about Handling Database in GUI based without typing of any queries.It's a User Friendly.</p></td>
                                <td><a href='#GUI'><i>API</i></a></td>
                                </tr>

                                <tr className='bg-warning'>
                                <th scope="row">MedicoRoute</th>
                                <td><p>This is for students to know about different kinds of medical courses.</p></td>
                                <td><a href='https://github.com/hasuhari16/medicoroute'><i>medicoroute</i></a></td>
                                </tr>
                                <tr className='table-info'>
                                <th scope="row">HaChat</th>
                                <td><p>It is a Mini Social media Front-End Page like Facebook</p></td>
                                <td><a href='https://github.com/hasuhari16/hachat'><i>hachat</i></a></td>
                                </tr>
                                <tr className='bg-warning'>
                                <th scope="row">Online FM</th>
                                <td><p>It is a kind of Google drive for management of Files in Online,but it was not completed.</p></td>
                                <td><a href='https://github.com/hasuhari16/hachathttps://github.com/hasuhari16/Online-File-Management-System'><i>hachat</i></a></td>
                                </tr>
                                <tr className='table-info'>
                                <th scope="row">Namma Area App</th>
                                <td><p>Prototype of Namma Area App, this app helps people to drop their queries happened in their own 
                                        area.</p></td>
                                <td><i>UI / UX </i></td>
                                </tr>
                                
                                <tr className='table-active'><th colspan="3"><center><strong>Hardware</strong></center></th></tr>
                                
                                <tr className='table-warning'>
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
 
export default Projects;