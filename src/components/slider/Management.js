import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import '../header/header.css';

const Management = () => {

    // const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    const dato = require('../images/management/Dato.jpg');
    const chew = require('../images/management/Chew.jpg');
    const raymond = require('../images/management/Raymond.jpg');
    const ashok = require('../images/management/Ashok.jpg');
    const ganesan = require('../images/management/Ganesan.jpg');
    const kim = require('../images/management/Kim.jpg');
    const ramesh = require('../images/management/Ramesh.jpg');
    const rohit = require('../images/management/Rohit.jpg');
    const senthil = require('../images/management/Senthil.jpg');
    const sujoy = require('../images/management/Sujoy.jpg');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <div className="container" >
                            <div className="row" >
                                <div className="col-md-3 col-md-4">
                                    {/* <div className="col-md-6"> */}
                                    <img src={dato} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">DATUK SYED TAMIM MOHAMED<br /></a></h3>
                                    <h4>Director - Strategy, Avows Group</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" onClick={handleShow}>VIEW DETAILS</Button>

                                    {/* </div> */}
                                </div>
                                <div className="col-md-3 col-md-4">
                                    <img src={chew} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">PH CHEW<br /></a></h3>
                                    <h4>Director - Avows Group</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" onClick={handleShow}>VIEW DETAILS</Button>
                                </div>

                                <div className="col-md-3 col-md-4">
                                    <img src={ashok} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">ASHOK K RAMAVATH<br /></a></h3>
                                    <h4>Group CEO at Avows Group</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" onClick={handleShow}>VIEW DETAILS</Button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="container" >
                            <div className="row" >
                                <div className="col-md-3 col-md-4 ">
                                    {/* <div className="col-md-6"> */}
                                    <img src={ganesan} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">KANESAN VELUPPILLAI<br /></a></h3>
                                    <h4>Group Corporate Advisor – Strategy</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                    {/* </div> */}
                                </div>
                                <div className="col-md-3 col-md-4">
                                    <img src={raymond} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">DATO RAYMOND YEONG<br /></a></h3>
                                    <h4>Independent Director at Avows Group</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                </div>
                                <div className="col-md-3 col-md-4">
                                    <img src={kim} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">LEE HUI KIM<br /></a></h3>
                                    <h4>Group HR</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container" >
                            <div className="row" >
                                <div className="col-md-3 col-md-4">
                                    <img src={ramesh} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">RAMESH KUMAR RAGHAVAN<br /></a></h3>
                                    <h4>VP-Group Operations</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                </div>
                                <div className="col-md-3 col-md-4">
                                    {/* <div className="col-md-6"> */}
                                    <img src={senthil} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">DATUK SYED TAMIM MOHAMED<br /></a></h3>
                                    <h4>Director - Strategy, Avows Group</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                    {/* </div> */}
                                </div>

                                <div className="col-md-3 col-md-4">
                                    <img src={sujoy} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">SUJOY ROY CHOWDHURY<br /></a></h3>
                                    <h4>VP SALES-Malaysia</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container" >
                            <div className="row" >
                                <div className="col-md-3 col-md-4">
                                    <img src={rohit} class="img-fluid mx-auto d-block" alt="img3" />
                                    <h3><a href="#" class="mdl-card__title_a">ROHIT PATNAIK<br /></a></h3>
                                    <h4>Director - Finance</h4>
                                    <Button className="m-3" variant="danger" size="md" type="submit" href="#">VIEW DETAILS</Button>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>MANAGEMENT TEAM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                                <div class="vc_single_image-wrapper vc_box_outline_circle  vc_box_border_grey" id="pop_img_style">
                                    <img width="150" height="160" src={dato} class="vc_single_image-img attachment-thumbnail" alt="Dato_Pics" />
                                </div>
                            </figure>

                        </div>
                        <p className="text-center;">
                            <b>DATUK SYED TAMIM MOHAMED</b><br />
                            Director - Strategy, Avows Group
                    </p>
                        <ul>
                            <li>Datuk Syed Tamim Mohamed is the Director of Strategy and Development for AVOWS Technologies. He has been working for the past 44 years in various capacities, both in the public and the private sectors. He began his career in the Prime Minister's Department in 1972 after graduating with a Bachelor of Economics (Honours) degree. He left the civil service to join the private sector in 1981, after obtaining his MBA. He was also trained at Harvard Business School and Mt Eliza, Australia. He is also a member of the Japanese Kankeiren Group and the Korean Development Institute </li>
                            <li>He served the PERNAS Group between 1981 and 1986 before joining the Sime Darby Group in 1986. He retired from the Sime Darby Group after serving slightly more than 20 years.</li>
                            <li>In 2007 he formed his management and financial consultancy company in which he is the Executive Chairman. He also served as independent non executive Director of several public listed companies including the Maybank Group, and Cycle and Carraige Bhd. He also served as a non Executive Group Country Chairman of Jardines operations in Malaysia from 2000 before he left in 2016. Currently, he is serving as an independent non-Executive Board member of FGV Plantation, a cluster division of FGV Berhad. He provides management services to a Japanese and an American group</li>
                            <li>In the Sime Darby Group, he had served as CEO in various Divisions. His exposure in Trade and Tourism, Oil and Gas, IT, Insurance Broking, Manufacturing, Health Services, Golf Club, and Plantation was invaluable. Before he retired in 2007, he headed the team that wrote the Northern Corridor Economic Report for the government.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close</Button>
                    </Modal.Footer>
                </Modal>
            </div >

            {/* 
        //     <Carousel.Item >
        //         <img className="img-responsive d-block w-100" src={ashok} />
        //         <h2><a href="#" class="mdl-card__title_a">DATUK SYED TAMIM MOHAMED<br /> &nbsp;</a></h2>
        //             <h4 class="mdl-card__title_h4">Director - Strategy, Avows Group</h4>

        //             <div class="modal fade" id="team_1" role="dialog" >
        //                 <div class="modal-dialog">
        //                     <div class="modal-content">
        //                         <div class="modal-header">
        //                             <button type="button" class="close" data-dismiss="modal">×</button>
        //                             <h4 class="modal-title">MANAGEMENT TEAM</h4>
        //                         </div>
        //                         <div class="modal-body">
        //                             <div class="wpb_single_image wpb_content_element vc_align_center">
        //                                 <figure class="wpb_wrapper vc_figure">
        //                                     <div class="vc_single_image-wrapper vc_box_outline_circle  vc_box_border_grey" id="pop_img_style">
        //                                         <img width="150" height="160" src="/img/team-members/team-member_1.jpg" class="vc_single_image-img attachment-thumbnail" alt="Dato_Pics" /></div>
        //                                 </figure>
        //                                  style="border:1px solid gray;"
        //                             </div>
        //                             <p className="text-center;">
        //                                 <b>DATUK SYED TAMIM MOHAMED</b><br />
        //                                 Director - Strategy, Avows Group</p>
        //                             <ul>
        //                                 <li>Datuk Syed Tamim Mohamed is the Director of Strategy and Development for AVOWS Technologies. He has been working for the past 44 years in various capacities, both in the public and the private sectors. He began his career in the Prime Minister's Department in 1972 after graduating with a Bachelor of Economics (Honours) degree. He left the civil service to join the private sector in 1981, after obtaining his MBA. He was also trained at Harvard Business School and Mt Eliza, Australia. He is also a member of the Japanese Kankeiren Group and the Korean Development Institute</li>
        //                                 <li>He served the PERNAS Group between 1981 and 1986 before joining the Sime Darby Group in 1986. He retired from the Sime Darby Group after serving slightly more than 20 years.</li>
        //                                 <li>In 2007 he formed his management and financial consultancy company in which he is the Executive Chairman. He also served as independent non executive Director of several public listed companies including the Maybank Group, and Cycle and Carraige Bhd. He also served as a non Executive Group Country Chairman of Jardines operations in Malaysia from 2000 before he left in 2016. Currently, he is serving as an independent non-Executive Board member of FGV Plantation, a cluster division of FGV Berhad. He provides management services to a Japanese and an American group.</li>
        //                                 <li>In the Sime Darby Group, he had served as CEO in various Divisions. His exposure in Trade and Tourism, Oil and Gas, IT, Insurance Broking, Manufacturing, Health Services, Golf Club, and Plantation was invaluable. Before he retired in 2007, he headed the team that wrote the Northern Corridor Economic Report for the government.</li>
        //                             </ul>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //     </Carousel.Item>
        //  </div>  */}

        </>
    );

}

export default Management;

