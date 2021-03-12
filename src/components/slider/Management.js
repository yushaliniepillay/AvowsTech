import React, { useState } from 'react';
// import { graphql} from 'gatsby';
// import Img from 'gatsby-image';
import { Modal, Figure, Container, Card } from 'react-bootstrap';
import '../header/header.css';

const Management = () => {

    const [show, setShow] = useState(false);
    const [modalSelected, setModalSelected] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setModalSelected(index);
        setShow(true);
        console.log(index);
    }


    const data =
        [
            {
                id: 0,
                name: "DATUK SYED TAMIM MOHAMED",
                position: "Director - Strategy",
                image: require('../images/management/Dato.jpg'),
                description1: "Datuk Syed Tamim Mohamed is the Director of Strategy and Development for AVOWS Technologies. He has been working for the past 44 years in various capacities, both in the public and the private sectors. He began his career in the Prime Minister's Department in 1972 after graduating with a Bachelor of Economics (Honours) degree. He left the civil service to join the private sector in 1981, after obtaining his MBA. He was also trained at Harvard Business School and Mt Eliza, Australia. He is also a member of the Japanese Kankeiren Group and the Korean Development Institute",
                description2: "He served the PERNAS Group between 1981 and 1986 before joining the Sime Darby Group in 1986. He retired from the Sime Darby Group after serving slightly more than 20 years.",
                description3: "In 2007 he formed his management and financial consultancy company in which he is the Executive Chairman. He also served as independent non executive Director of several public listed companies including the Maybank Group, and Cycle and Carraige Bhd. He also served as a non Executive Group Country Chairman of Jardines operations in Malaysia from 2000 before he left in 2016. Currently, he is serving as an independent non-Executive Board member of FGV Plantation, a cluster division of FGV Berhad. He provides management services to a Japanese and an American group",
                description4: "In the Sime Darby Group, he had served as CEO in various Divisions. His exposure in Trade and Tourism, Oil and Gas, IT, Insurance Broking, Manufacturing, Health Services, Golf Club, and Plantation was invaluable. Before he retired in 2007, he headed the team that wrote the Northern Corridor Economic Report for the government."
            },
            {
                id: 1,
                name: "PH CHEW",
                position: "Director",
                image: require('../images/management/Chew.jpg'),
                description1: "PH Chew as the company’s director, provides advices on business and technical areas to the company. He is also the Executive Director for Matrix Streams Sdn Bhd which specialises in the development, sales and implementation of Islamic Core Banking and Treasury Management System. Both companies have built the synergy and complement to each other businesses.",
                description2: "He started his career with Maybank Berhad in 1983. Prior to AVOWS, PH Chew has worked as a Technical Director and have served in senior positions with various local national corporations in Malaysia in providing software systems design, development and implementation across several different industries including banking, hospital management and human resource management. He has more than 38 years of working experience in the IT Industry.",
                description3: "PH Chew holds a Bachelor of Science (Honors) with a major in Computer Science from U.K"
            },
            {
                id: 2,
                name: "DATO RAYMOND YEONG",
                position: "Independent Director",
                image: require('../images/management/Raymond.jpg'),
                description1: "Dato Raymond Yeong Kok Hee is the Independent Director of Avows Technologies. He has been working for more than 34 years in different capacities primarily focusing in IT industry. Upon returning from England in 1983, he commenced his sales and marketing management career firstly in the credit cards business and subsequently, ventured into the fast moving user goods ('FMCG') sector, as well as the electronics and computer equipment services industries. Dato Raymond Yeong is well-recognised and respected not only in the information technology ('IT') arena, but also in the financial services and corporate sector.",
                description2: "Dato Raymond Yeong was formerly the consultant and hold the position of Vice President of CSC Malaysia Sdn Bhd(formerly CSA (M)berhad,a position that he has held since 1999. As a Consultant of the company, he is focussed in the areas of Managed Services, Technology consulting and Complex System Integration. His responsibilities includes leveraging of consulting and strategic outsourcing and technology management capabilities in concert with other divisions of Computer Sciences Corporation (CSC) worldwide in creating a unique integrated offering to the dynamic and rapidly growing Malaysia market",
                description3: "He has developed and set up a significant number of strategic relationships and alliances with the senior management of the financial and governmental sector. He was an active member of the Executive and Management Review Committee of the Maybank Berhad and Computer Sciences Corporation/CSC Malaysia Sdn. Bhd., a ten (10)-year term IT sourcing engagement since 2003.",
                description4: "In addition Dato Raymond Yeong sits on the Board of WZ Satu Berhad on 26 Oct 2007 as an independent Non-executive director. He is a member of the Audit committee, remuneration committee and Nomination committee. Dato Raymond Yeong contributes to the strategic growth of the company for many years.",
                description5: "With his vast experience and extensive business network, Dato Raymond Yeong will contribute significantly to the AVOWS Group as a Independent Director of the company and will work with the CEO and other top management team to drive the company to greater heights."
            },
            {
                id: 3,
                name: "ASHOK K RAMAVATH",
                position: "Group CEO",
                image: require('../images/management/Ashok.jpg'),
                description1: "AVOWS TECHNOLOGIES was founded by Mr. Ashok K Ramavath, the pioneering and visionary entrepreneur, in the year 2008. Mr. Ashok brings with him 20 years of rich and wide experience in technology and business consulting. With his keen interest in developing next generation leadership, he has built strong technology teams in AVOWS from scratch to cater to the challenging and growing requirements of its clients in South East Asia. . His key strengths in terms of achieving best results in service delivery and financial performance enabled AVOWS to build large & strong teams of 100+ in the past.",
                description2: "Ashok is on the managing committee of CIIM (Consortium of Indian Industries in Malaysia) and is a firm believer in Corporate Social Responsibility. He initiated focused interactions with industry leaders to generate high value solutions and service offerings in the IT & ITES space from AVOWS and also helped to on board leaders from various industries aligned with the vision and core values of the organisation to expand the core service offerings and continuously innovate value to the clients. AVOWS is head-quarted in Kuala Lumpur, Malaysia with its offices/development centers in Singapore, Indonesia, India and USA.",
                description3: "Ashok was recognised for his contribution to HR during the Asia’s Best Employer Brand awards in 2010. Ashok was also recognised as “CEO of the Year 2013”.",
                description4: "An aivid Golf player and a technocrat turned commerce post graduate, Ashok is passionate to make AVOWS a strong player in the global technology industry Asia's Best Employer Brand Awards 2010"
            },
            {
                id: 4,
                name: "RAMESH KUMAR RAGHAVAN",
                position: "VP - Group Operations",
                image: require('../images/management/Ramesh.jpg'),
                description1: "Ramesh brings with him 14+ years of global experience in IT strategy, talent engagement and development, CEO Advisory and stakeholder management. He specialises in operations and HR that aligns strategy, processes with business goals",
                description2: "Ramesh has a breadth of industry expertise with proficiency building new capabilities and internal processes and has worked with leading global organisations in the past.",
                description3: "He partners with sales to nurture client relationships and ensures highest quality of service to existing clients. He is as instrumental in advancing Avows innovative company culture as he is in fostering new talent. His passion is to develop and work on next gen digital technologies."
            },
            {
                id: 5,
                name: "SENTHIL KUMAR SUBRAMANIAN",
                position: "Chief Technology Officer",
                image: require('../images/management/Senthil.jpg'),
                description1: "Senthil Kumar Subramaniam joined Avows Technologies as its Chief Technology Officer in July 2019. Throughout his 24 years of experience in IT, he has proven to be an effective leader, adept in managing technology projects across delivery centres. This perfectly positions him at the helm of technological evolution for the company as it seeks to deliver the latest technological breakthroughs to its clients through a wide array of cutting-edge products and services.",
                description2: "Before becoming a part of the Avows team, Senthil honed his skills in leadership, communication and problem solving while working with some of the top brands in the business. He served as Deputy CIO with Star Health and Allied Insurance, one of the largest Health Insurance companies in India, partnering with vendors such as Oracle, Microsoft and IBM. Prior to that, he was leading teams on various projects while assuming senior roles in Accenture IDC and 3i Infotech. ",
                description3: "Senthil holds a Master of Business Administration in System from the University of Madras and is passionate about strategising the IT and Digital Strategy Roadmap in alignment with Avows business goals. He leads and guides the team’s science and technology efforts amidst an increasingly volatile and rapidly transforming business environment."
            },
            {
                id: 6,
                name: "KANESAN VELUPPILLAI",
                position: "Group Corporate Advisor - Strategy",
                image: require('../images/management/Ganesan.jpg'),
                description1: "Kanesan Veluppillai is the Group Corporate Advisor for Avows Technologies. He was inducted on 1 November 2020 and has a vast amount of experience in advisory services that includes areas of Mergers & Acquisitions, Funding, Human Capital Transformation, Investor Relations, Strategic Communications and Crisis Management.",
                description2: "As the Group Advisor for Avows, Kanesan oversees the business financial strategy and key business development aspects for the company."
            },
            {
                id: 7,
                name: "SUJOY ROY CHOWDHURY",
                position: "VP Sales - Malaysia",
                image: require('../images/management/Sujoy.jpg'),
                description1: "Sujoy takes care of the sales business at Malaysia having more than 10+ years of Experience in IT Solutions Sales, Service Delivery Management and Pre-Sales for Global Financial Institutions in Malaysia and Singapore. He strongly believes in Customer Satisfaction for the services which is continuously boosting the business top line and success, strengthening the company’s ongoing growth and commitment to current and future excellence.",
                description2: "He has a proven track record of success in Malaysia and focused on expanding the client base and is a key member of sales team upholding client attrition and partnerships. He’s now able to blend his love of consulting and project management to provide our clients with strong ROI."
            },
            {
                id: 8,
                name: "ENDAH SUSANTI ",
                position: "VP Sales - Indonesia",
                image: require('../images/management/Endah.jpg'),
                description1: "Endah has amassed 16+ years of Sales & Marketing experience in Indonesia. Her passion includes interacting with people and driving relationships – undertaking Account Management & Customer Relationship Management ideal professions for her. She also partners with operations team for business execution and has worked with some leading organisations in the past with an extensive history of being part of successful sales teams.",
                description2: "Endah is responsible for sales In Indonesia, ensuring that the teams have the tools, training and motivation to successfully bring the power of Avows to organisations across and has been a key to the company’s business continuity and growth."
            },
            {
                id: 9,
                name: "ROHIT PATNAIK",
                position: "Director - Finance",
                image: require('../images/management/Rohit.jpg'),
                description1: "Rohit Patnaik is currently Director of Finance and Compliance at Avows Technologies. He handles finance, legal and contractual matters to ensure smooth day-to-day operations.",
                description2: "Rohit holds an MBA in Business Management- Finance from the Business School at Xavier School of Management and a Degree in Business Technology in Electrical Engineering at the Indian Institute of Technology Bhubaneswar.",
                description3: "Prior to joining Avows Technologies, Rohit was part of the consultant team with PwC India where he was actively involved in Financial Strategy and Advisory for various projects involving State and National Governments.",
                description4: "Having begun his career as a Software Engineer, Rohit take great pride in exercising the full scope of his experiences to ensure the company's Quality & Risk Management are kept in check at all times."
            },
            {
                id: 10,
                name: "LEE HUI KIM",
                position: "Group HR",
                image: require('../images/management/Kim.jpg'),
                description1: "Kim leads our global HR Operations team and is focused on culture and talent acquisition. Kim has amassed 10 + years of experience and has been an asset to the organisation since inception.",
                description2: "She oversees policies and programs for the entire company as well as organisational planning and development, recruiting, training, employee relations, compensation, benefits and health. She has been a key strategist for the group company development and implementing corporate governance, security and regulatory compliance",
                description3: "She specialises in talent management and leadership development with a focus on customer relationship management as she works a team player to help sales teams to be aligned to the company goals."
            }
        ]

    return (
        <>
            <Container className='ml-auto'>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {data.map((data, index) => (
                        <Card key={data.id} style={{ width: '16rem', margin: '5px' }}>
                            <Card.Img style={{ width: '16rem', height: '20rem' }} variant="top" src={data.image} onClick={() => handleShow(index)} />
                            <Card.Body style={{ height: '6rem', marginBottom: '-7px' }}>
                                <Card.Title>
                                    <section className="post-title text-center">
                                        <h2 className="text-dark">{data.name}</h2>
                                    </section>
                                </Card.Title>
                            </Card.Body>
                            <Card.Body style={{ textAlign: 'top', marginBottom: '-20px' }}>
                                <Card.Subtitle className="text-center">
                                    <h5 className='align-top'>{data.position}</h5>
                                    <h5 className='align-top'>Avows Group</h5>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>


            {/* <Carousel className="carousel" >
                {data.map((data, index) => (
                    <Carousel.Item interval={4000}>
                        <Container>
                            <Row>
                                <Col>
                                    <div key={data} className="col-md-3 col-md-4 text-center" >
                                        <img style={{ width: '15rem', height: '20rem' }} key={data.image} src={data.image} className="img-fluid mx-auto d-block" onClick={() => handleShow(index)} />
                                        <Img fluid={props.data.imageql.childImage.fluid} />
                                        < br />
                                        <section className="post-title text-center">
                                            <h2 className="text-light">{data.name}</h2>
                                            <h6>{data.position}</h6>
                                        </section>
                                        <Button
                                            key={data.id}
                                            className="m-3" variant="danger" size="md"
                                            type="submit"
                                            onClick={handleShow} >
                                            VIEW DETAILS</Button>
                                    </div>
                                </Col >
                            </Row >
                        </Container >
                    </Carousel.Item >
                ))}
            </Carousel > */}


            <div>
                <Modal
                    key={data[modalSelected].id} show={show}
                    onHide={handleClose}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h3><b>{data[modalSelected].name}</b></h3>
                            <h4>{data[modalSelected].position}</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            <Figure >
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={data[modalSelected].image} />
                            </Figure>
                        </div>
                        <p className="justified">{data[modalSelected].description1}</p>
                        <p className="justified">{data[modalSelected].description2}</p>
                        <p className="justified">{data[modalSelected].description3}</p>
                        <p className="justified">{data[modalSelected].description4}</p>
                        <p className="justified">{data[modalSelected].description5}</p>
                    </Modal.Body>
                </Modal>
            </div >

        </>
    );

}

export default Management;

// export const query = graphql `
//     query {
//         imageql: file(relativePath: { eq: "Dato.jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 1200) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
//  `

// <div style={{ display: 'flex', order: '3' }}>
//     <Card style={{ width: '18rem', margin: '10px' }}>
//         <Card.Img variant="top" src={data.image} onClick={() => setShow(true)} />
//         <Card.Title>
//             <section className="post-title">
//                 <h2 className="text-dark">{data.name}</h2>
//             </section>
//         </Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{data.position}e</Card.Subtitle>
//     </Card>
// </div> 