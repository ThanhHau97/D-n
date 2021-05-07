import React, { useEffect, useState } from 'react';
import './Store.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Store_Home from '../../components/Axios/Service';
export default function Store() {
	const settings = {
		// dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3400
	};
	// Khai báo giá trị
	//Khai báo set và get mảng
	//mãng tất cả sản phẩm
	const [ store, setstore ] = useState([]);
	// sử dụng useEffect để chạy vòng đời
	useEffect(() => {
		Getstore();
	}, []);
	// tất cả sản phẩm bán
	const Getstore = () => {
		//Load sản phẩm từ api Product và sử dung useEffect để quản lí vòng đời
		Store_Home.getStore()
			.then((response) => {
				setstore(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};
	const Store_CFS = store.map((item) => {
		return (
			<section id="store">
				<div className="row ">
						<div className="member ml-4">
							<img
								className="card-img-top img_store"
								src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner01.jpg'}
								alt={item.name}
								style={{ width: 340 }}
							/>
							<div className="member-info">
								<div className="member-info-content">
									<h4>{item.name}</h4>
									<span>{item.address}</span>
								</div>
							</div>
						</div>
					</div>
	
			</section>
		);
	});

	return (
		<div className="container">
			<button className=" btn_store mb-3">Cửa Hàng</button>
			<Slider {...settings}>{Store_CFS}</Slider>
		</div>
	);
}
