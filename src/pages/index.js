import React, { useState } from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Carousel from '../components/slider/carousel';
import { Button } from 'react-bootstrap';
import "../components/header/header.css";
import { FlagFilled, SmileOutlined, ShopOutlined, TrophyOutlined } from '@ant-design/icons';


const IndexPage = () => {

  const [change] = useState({
    button: true
  })

  const [selectedButton, setSelectedButton] = useState(0);

  const [state, setText] = useState({
    text: 'We have a great Mission',
    text1: '“To be recognised as the “Preferred Technology Partner of Choice” by all Customers”'
  })

  const onClickButton1 = () => {
    setText({
      text: 'We have a great Mission',
      text1: '“To be recognised as the “Preferred Technology Partner of Choice” by all Customers”'
    })
    //setState({ button: !change.button })
    setSelectedButton(0);
  }
  const onClickButton2 = () => {
    setText({
      text: 'We have a one focused Vision',
      text1: '“To become long term partners-in progress of our customers to enable their Business Transformation by providing a range of Services & Solutions that deliver Value-For-Money and enhance competitiveness and provides them a opportunity to position themselves best price-performers of choice in their industries”'
    });
    //setState({ button: !change.button })
    setSelectedButton(1);
  };

  return (
    <Layout>
      <div><SEO title="HOME" /></div>
      <div>
        <Carousel />
        
        <div className="container">
          <br /><br />
          <section className="round-tabs text-center ">
            <ul className="nav nav-pills nav-normal">
              <li>
                <Button
                  active
                  // active={selectedButton == 0 ? 'true' : 'false'}
                  variant={selectedButton === 0 ? 'danger' : 'light'}
                  color='light'
                  className={change.button ? "buttonTrue" : "buttonFalse"}
                  size="lg"
                  type="submit"
                  onClick={() => onClickButton1()} >Our Mission
                </Button>
              </li>
              <li>
                <Button
                  active
                  variant={selectedButton === 1 ? 'danger' : 'light'}
                  color='light'
                  className={change.button ? "buttonTrue" : "buttonFalse"}
                  size="lg"
                  type="submit"
                  onClick={() => onClickButton2()} >Our Vision
                </Button>
              </li>
            </ul>
            <br/><br />
            <div className="panel-body text-center">
              <div className="tab-content">
                <article >
                  <h3>{state.text}</h3>
                  <p>{state.text1}</p>
                </article>
                {/* <article id="Massive7c6ca134a5bc163a5e791e5553ed28c9" class="tab-pane">
                <h3>We have a one focused Vision</h3>
                <p>“To become long term partners-in progress of our customers to enable their Business Transformation by providing a range of Services &amp; Solutions that deliver Value-For-Money and enhance competitiveness and provides them a opportunity to position themselves best price-performers of choice in their industries”</p>
              </article> */}
              </div>
            </div>
          </section>
        </div>
        <br /><br />

        <div id="feedback">
          <div className="feedback-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <section>
                    <h2 className="section-title">
                      <span></span>OUR STATISTICS
                  </h2>
                  </section>
                </div>
              </div>

              <div className="row facts-items">
                <div className="col-sm-3 col-xs-6 text-center">
                  <div className="facts">
                    <div className="facts-icon">
                      <i className="fa fa-flag"><FlagFilled className="fa-1x" /></i>
                    </div>
                    <p className="facts-text">Projects Completed</p>
                    <h4>100+</h4>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6 text-center">
                  <div className="facts">
                    <div className="facts-icon">
                      <i className="fa fa-smile-o"><SmileOutlined className="fa-1x" /></i>
                    </div>
                    <p className="facts-text">Happy Clients</p>
                    <h4>50+</h4>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6 text-center">
                  <div className="facts">
                    <div className="facts-icon">
                      <i className="fas fa-building"><ShopOutlined className="fa-1x" /></i>
                    </div>
                    <p className="facts-text">Offices</p>
                    <h4>5</h4>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6 text-center">
                  <div className="facts last-child">
                    <div className="facts-icon">
                      <i className="fas fa-award"><TrophyOutlined className="fa-1x" /></i>
                    </div>
                    <p className="facts-text">Anniversary</p>
                    <h4>11</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <section>
                  <h2>WISH TO MAKE A CAREER WITH US?</h2>
                </section>
              </div>
              <div className="col-sm-5">
                <div data-form-validation="true">
                  <Button className="join_us" variant="light" size="lg" type="submit" href="/career">JOIN US</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>

  );

}

export default IndexPage
