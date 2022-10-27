import Carousel from 'react-bootstrap/Carousel';
import bannerImg from '../../../../assets/img/anuncio-img.png'
import Button from 'react-bootstrap/Button';
function CarouselBanner() {
    return (
        <div className="carousel-anuncios">
            <Carousel >
                <Carousel.Item>

                    <Carousel.Caption className='d-flex'>
                        <div className="d-flex carousel-content me-2">
                            <div className="border rounded p-2">
                                <div className="d-flex justify-content-between">
                                    <p><small>27 Septiembre 2022</small>
                                    </p>
                                    <p><small>Anuncios</small></p>
                                </div>
                                <h6 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <div className="container-image">
                                    <img src={bannerImg} />
                                    <div className="middle">
                                        <Button className="btn btn-primary text">Leer más</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex carousel-content ">
                            <div className="border rounded p-2">
                                <div className="d-flex justify-content-between">
                                    <p><small>27 Septiembre 2022</small>
                                    </p>
                                    <p><small>Anuncios</small></p>
                                </div>
                                <h6 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <div className="container-image">
                                    <img src={bannerImg} />
                                    <div className="middle">
                                        <Button className="btn btn-primary text">Leer más</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>


                    <Carousel.Caption className='d-flex'>
                        <div className="d-flex carousel-content me-2">
                            <div className="border rounded p-2">
                                <div className="d-flex justify-content-between">
                                    <p><small>27 Septiembre 2022</small>
                                    </p>
                                    <p><small>Anuncios</small></p>
                                </div>
                                <h6 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <div className="container-image">
                                    <img src={bannerImg} />
                                    <div className="middle">
                                        <Button className="btn btn-primary text">Leer más</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex carousel-content ">
                            <div className="border rounded p-2">
                                <div className="d-flex justify-content-between">
                                    <p><small>27 Septiembre 2022</small>
                                    </p>
                                    <p><small>Anuncios</small></p>
                                </div>
                                <h6 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <div className="container-image">
                                    <img src={bannerImg} />
                                    <div className="middle">
                                        <Button className="btn btn-primary text">Leer más</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption className='d-flex'>
                        <div className="d-flex carousel-content me-2">
                            <div className="border rounded p-2">
                                <div className="d-flex justify-content-between">
                                    <p><small>27 Septiembre 2022</small>
                                    </p>
                                    <p><small>Anuncios</small></p>
                                </div>
                                <h6 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <div className="container-image">
                                    <img src={bannerImg} />
                                    <div className="middle">
                                        <Button className="btn btn-primary text">Leer más</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex carousel-content ">
                            <div className="border rounded p-2">
                                <div className="d-flex justify-content-between">
                                    <p><small>27 Septiembre 2022</small>
                                    </p>
                                    <p><small>Anuncios</small></p>
                                </div>
                                <h6 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                <div className="container-image">
                                    <img src={bannerImg} />
                                    <div className="middle">
                                        <Button className="btn btn-primary text">Leer más</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselBanner;