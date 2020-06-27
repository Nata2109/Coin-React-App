import React from "react";
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
           <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-25"
                    src="https://www.changechecker.org//umbraco/ImageGen.ashx?pad=true&constrain=false&height=250&width=250&image=/coin-images/229/2018 Red Dragon of Wales- £5.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>£5 - 2018 Red Dragon of Wales</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div class="row">
                    <div class="col-sm-9">
                        <img
                            className="d-block w-25"
                            src="https://www.changechecker.org//umbraco/ImageGen.ashx?pad=true&constrain=false&height=250&width=250&image=/coin-images/333/App.jpg"
                            alt="Third slide"
                        />
                    </div>

                    <div class="col-sm-3">
                        <h1> £5 - 2020 James Bond </h1>
                    </div>
                </div>
                <Carousel.Caption>
                    <h3>£5 - 2020 James Bond</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
  
            <Carousel.Item>
                <img
                className="d-block w-25"
                src="https://www.changechecker.org//umbraco/ImageGen.ashx?pad=true&constrain=false&height=250&width=250&image=/coin-images/107/1982-NEW-Britannia-50p.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>50p - Britannia</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Home;