import React from 'react';
import Sale from './FlashSale';
import News from './News';
import Store from './Store';
import About from './About';
import { Link } from 'react-router-dom';
import './Banner.css'
export default function Banner() {
	return (
		<div>
			<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active" />
					<li data-target="#carouselExampleCaptions" data-slide-to="1" />
					<li data-target="#carouselExampleCaptions" data-slide-to="2" />
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner01.jpg'}
							style={{ height: '580px' }}
							alt="First slide"
						/>
						<div class="carousel-caption d-none d-md-block">
						<Link to="/product" className="btn-get-started scrollto">
											Xem Ngay
										</Link>
						</div>
					</div>
					<div class="carousel-item">
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner02.jpg'}
							style={{ height: '580px' }}
							alt="First slide"
						/>
					</div>
					<div class="carousel-item">
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner03.jpg'}
							style={{ height: '580px' }}
							alt="First slide"
						/>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true" />
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true" />
					<span class="sr-only">Next</span>
				</a>
			</div>

			<div>
				<Sale />
				<About />
				<News />
				<Store />
		
			</div>
		</div>
	);
}
