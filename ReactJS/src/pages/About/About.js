import React,{useState,useEffect} from 'react';
import Store_Home from '../../components/Axios/Service'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './About_css.css';
export default function About() {
	function Expo() {

		const d = new Date()
		 const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
		 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
		 const day = weekDay[d.getDay()]
		 const month = months[d.getMonth()]
		 const date = d.getDate()
		 const year = d.getFullYear()
	
	   return (
		  
	
			<div className="row counters">
							<div className="col-lg-3 col-6 text-center">
								<span data-toggle="counter-up">{day}</span>
								<p>Thứ</p>
							</div>

							<div className="col-lg-3 col-6 text-center">
								<span data-toggle="counter-up" id="date">{date}</span>
								<p>Ngày</p>
							</div>

							<div className="col-lg-3 col-6 text-center">
								<span data-toggle="counter-up" id="month">{month}</span>
								<p>Tháng</p>
							</div>
							
							<div className="col-lg-3 col-6 text-center">
								<span data-toggle="counter-up" id="year">{year}</span>
								<p>Năm</p>
							</div>

						</div>
			   
		
	  
	   );
	 }
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
			<section className="store_about">
				<div className="row">
							{/* <div className="">
								<div className="text-center">
									<h3 className="bold">{item.name}</h3>
								</div>
								<p>{item.address}</p>
							</div> */}
							<div className="testimonial-item">
								<img src="img/testimonial-1.jpg" className="testimonial-img" alt="" />
								<h3>Coffee Sơn</h3>
								<h4>13 Đường số 7, phường Linh Chiểu,TP.Thủ Đức</h4>
								<p>
									<img src="img/quote-sign-left.png" className="quote-sign-left" alt="" />
								Thưởng thức cafe ngon, làm việc thuận lợi cả ngày
									<img src="img/quote-sign-right.png" className="quote-sign-right" alt="" />
								</p>
							</div>

					</div>
	
			</section>
		);
	});
	return (
		<div>
			<section id="intro">
				<div className="intro-container">
					<div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
    <li data-target="#introCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#introCarousel" data-slide-to="1"></li>
    <li data-target="#introCarousel" data-slide-to="2"></li>
  </ol>
						<div className="carousel-inner" role="listbox">
							<div className="carousel-item active">
								<div className="carousel-background">
									<img
										src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner01.jpg'}
										className="d-block w-100"
										alt="Icon"
									/>
								</div>
								<div className="carousel-container">
									<div className="carousel-content">
										<h2 className="text-uppercase">Welcome to Coffee Sơn</h2>
										<p className="text-uppercase">
										Thêm chút đường cà phê có ngọt ?<br></br>
Thêm chút tình mình có thuộc về nhau ?
										</p>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="carousel-background">
									<img
										src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner02.jpg'}
										className="d-block w-100"
										alt="Icon"
									/>
								</div>
								<div className="carousel-container">
									<div className="carousel-content">
										<h2 className="text-uppercase">Coffee Sơn</h2>
										<p className="text-uppercase">
										
TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
										</p>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="carousel-background">
									<img
										src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner03.jpg'}
										className="d-block w-100"
										alt="Icon"
									/>
								</div>
								<div className="carousel-container">
									<div className="carousel-content">
										<h2 className="text-uppercase">Coffee Sơn</h2>
										<p className="text-uppercase">
										Muốn nếm vị cà phê phải chờ đợi pha chế, đó là nét tinh hoa được chắt chiu lại mỗi giây sống chậm với cuộc đời
										</p>
									</div>
								</div>
							</div>
						</div>

						<a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
							<i class="fa fa-arrow-left " aria-hidden="true"></i>
							<span className="sr-only">Previous</span>
						</a>

						<a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
						<i class="fa fa-arrow-right " aria-hidden="true"></i>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</section>
			<main id="main">
				<section id="featured-services">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 box text-center">
{/* 								<i className="ion-ios-bookmarks-outline" /> */}
								<img src={'https://res.cloudinary.com/minhchon/image/upload/v1619171463/Thecoffeeson/nongdan_cok6uw.jpg'} style={{ width: '20%' ,height:'10',borderRadius:'50%'}} alt="Icon" />
								<h4 className="title">
									<a href="">Nông Dân</a>
								</h4>
								<p className="description">
								Đồng hành cùng nông dân từ nông trại trồng trọt đến thu hoạch
								</p>
							</div>

							<div className="col-lg-4 box box-bg text-center">
							<img src={'https://res.cloudinary.com/minhchon/image/upload/v1619171463/Thecoffeeson/nongdan_cok6uw.jpg'} style={{ width: '20%' ,height:'10',borderRadius:'50%'}} alt="Icon" />
								<h4 className="title">
									<a href="">Chế Biến</a>
								</h4>
								<p className="description">
								Sử dụng công nghệ để chế biến cafe thơm ngon đến tận tay người dùng
								</p>
							</div>

							<div className="col-lg-4 box text-center">
							<img src={'https://res.cloudinary.com/minhchon/image/upload/v1619171463/Thecoffeeson/nongdan_cok6uw.jpg'} style={{ width: '20%' ,height:'10',borderRadius:'50%'}} alt="Icon" />
								<h4 className="title">
									<a href="">Cafe Sạch</a>
								</h4>
								<p className="description">
									Mang sản phẩm cafe sạch,chất lượng, giá cả hợp lí đến với người dùng
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="about">
					<div className="container">
						<header className="section-header">
							<h3>Hành Trình Đến Với Coffee Sơn</h3>
							<p>
							Những trăn trở thời sinh viên tìm cho mình những quán cafe để học tập và làm việc.Với không gian thoải mái và riêng tư.
							</p>
						</header>

						<div className="row about-cols">
							<div className="col-md-4 wow fadeInUp">
								<div className="about-col">
									<div className="img text-center">
									<img src={'https://res.cloudinary.com/minhchon/image/upload/v1619171463/Thecoffeeson/nongdan_cok6uw.jpg'} style={{  width: '30%'  ,height:'10',borderRadius:'50%'}} alt="Icon" />		
									</div>
									<h2 className="title">
										<a href="#">Sinh Viên</a>
									</h2>
									<p>
									Thời sinh viên cần những nơi để được học tập nhóm cùng nhau, nơi riêng tư, thoải mái, giá cả hợp lí.
									</p>
								</div>
							</div>

							<div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
								<div className="about-col">
									<div className="img text-center">
									<img src={'https://res.cloudinary.com/minhchon/image/upload/v1619171463/Thecoffeeson/nongdan_cok6uw.jpg'}  style={{ width: '30%' ,height:'10',borderRadius:'50%'}} alt="Icon" />		
									</div>
									<h2 className="title">
										<a href="#">Công Việc</a>
									</h2>
									<p>
										Khi ra trường, làm việc ổn định mọi thứ sự đam mê lại thôi thúc team tôi phải làm cái mình ước mơ từ lâu.
									</p>
								</div>
							</div>

							<div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
								<div className="about-col">
									<div className="img text-center">
									<img src={'https://res.cloudinary.com/minhchon/image/upload/v1619171463/Thecoffeeson/nongdan_cok6uw.jpg'}  style={{  width: '30%' ,height:'10',borderRadius:'50%'}} alt="Icon" />		
									</div>
									<h2 className="title">
										<a href="#">Ước Mơ</a>
									</h2>
									<p>
								Xây dựng thương hiệu  Coffee Sơn rộng rãi trên toàn quốc.Mang đến hương vị cafe thơm ngon từ người nông dân ở quê hương mình.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="services">
					<div className="container">
						<header className="section-header wow fadeInUp">
							<h3>Dịch vụ</h3>
							<p>
							Coffee Sơn luôn đồng hành với sự nhiệt huyết,trẻ trung cùng với khách hàng
							</p>
						</header>

						<div className="row">
							<div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
								<div className="icon">
									<i className="ion-ios-analytics-outline" />
								</div>
								<h4 className="title">
									<a href="">Thưởng Thức Cafe</a>
								</h4>
								<p className="description">
									Coffee Sơn luôn luôn cập nhật, xây dựng các loại cafe với nhiều vị, ngon đậm đà mang bản sắc của Việt Năm
								</p>
							</div>
							<div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
								<div className="icon">
									<i className="ion-ios-bookmarks-outline" />
								</div>
								<h4 className="title">
									<a href="">Không Gian</a>
								</h4>
								<p className="description">
								Coffee Sơn liên tục đổi mới không gian để gây ấn tượng, thiện cảm đến với các đối tượng khách hàng.
								</p>
							</div>
							<div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
								<div className="icon">
									<i className="ion-ios-paper-outline" />
								</div>
								<h4 className="title">
									<a href="">Nhân Viên</a>
								</h4>
								<p className="description">
									Coffee Sơn sẽ phục vụ quý khách hàng một cách chu đáo nhất,đồng hành cùng khách hàng trên cả nước
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box wow bounceInUp"
								data-wow-delay="0.1s"
								data-wow-duration="1.4s"
							>
								<div className="icon">
									<i className="ion-ios-speedometer-outline" />
								</div>
								<h4 className="title">
									<a href="">Thẻ Tích Điểm</a>
								</h4>
								<p className="description">
								Tích điểm đối với mỗi lượt đặt hàng thành công. Quy đổi thành coin để hưởng nhiều ưu đãi từ Cofee Sơn.
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box wow bounceInUp"
								data-wow-delay="0.1s"
								data-wow-duration="1.4s"
							>
								<div className="icon">
									<i className="ion-ios-barcode-outline" />
								</div>
								<h4 className="title">
									<a href="">Nhiệt huyết</a>
								</h4>
								<p className="description">
								Coffee Sơn luôn cam kết sự uy tín đặt lên hàng đầu với khách hàng.
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box wow bounceInUp"
								data-wow-delay="0.1s"
								data-wow-duration="1.4s"
							>
								<div className="icon">
									<i className="ion-ios-people-outline" />
								</div>
								<h4 className="title">
									<a href="">Năng Động</a>
								</h4>
								<p className="description">
									Coffee luôn sẵn sàng nhận được sự góp ý của khách để thay đổi.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="call-to-action" className="wow fadeIn">
					<div className="container text-center">
						<h3>Đặt Hàng</h3>
						<p>
							Đặt hàng nhanh chóng, thưởng thức ngay 1 ly cà phê trọn vẹn hương vị đậm đà
						</p>
						<Link to="/product" className="cta-btn">Tìm Hiêu Ngay</Link>
					</div>
				</section>
				<section id="facts" className="wow fadeIn">
					<div className="container">
						<header className="section-header">
							<h3>Date And Timer</h3>
							<p>Comming Son</p>
						</header>	
						{Expo()}
						{/* <div className="facts-img">
							<img src="img/facts-img.png" alt="" className="img-fluid" />
						</div> */}
					</div>
				</section>

				<section id="testimonials" className="section-bg wow fadeInUp">
					<div className="container-lg">
						<header className="section-header">
							<h3>Địa Chỉ Cửa Hàng</h3>
						</header>
						<Slider {...settings}>{Store_CFS}</Slider>
						{/* <div className="owl-carousel testimonials-carousel">
							<div className="testimonial-item">
								<img src="img/testimonial-1.jpg" className="testimonial-img" alt="" />
								<h3>Coffee Sơn</h3>
								<h4>41 Nguyễn Tri Phương Quận 5 TPHCM</h4>
								<p>
									<img src="img/quote-sign-left.png" className="quote-sign-left" alt="" />
								Thưởng thức cafe ngon, làm việc thuận lợi cả ngày
									<img src="img/quote-sign-right.png" className="quote-sign-right" alt="" />
								</p>
							</div>

							<div className="testimonial-item">
								<img src="img/testimonial-2.jpg" className="testimonial-img" alt="" />
								<h3>Coffee Sơn</h3>
								<h4>210 Tân Hưng Thuận Quận 7 TPHCM</h4>
								<p>
									<img src="img/quote-sign-left.png" className="quote-sign-left" alt="" />
									Cảm thấy buồn chán, đã có ngay cafe Coffee Sơn
									<img src="img/quote-sign-right.png" className="quote-sign-right" alt="" />
								</p>
							</div>

							<div className="testimonial-item">
								<img src="img/testimonial-3.jpg" className="testimonial-img" alt="" />
								<h3>Coffee Sơn</h3>
								<h4>22 Lý Thường Kiệt Quận Tân Bình TPHCM</h4>
								<p>
									<img src="img/quote-sign-left.png" className="quote-sign-left" alt="" />
								Cafe là nơi tình yêu bắt đầu
									<img src="img/quote-sign-right.png" className="quote-sign-right" alt="" />
								</p>
							</div>

							<div className="testimonial-item">
								<img src="img/testimonial-4.jpg" className="testimonial-img" alt="" />
								<h3>Coffee Sơn</h3>
								<h4>33 Bùi Minh Trực Quận 8 TPHCM</h4>
								<p>
									<img src="img/quote-sign-left.png" className="quote-sign-left" alt="" />
									Mọi câu chuyện và những trải nghiệm cảm xúc của mỗi người bên ly cà phê đều khác nhau.
									<img src="img/quote-sign-right.png" className="quote-sign-right" alt="" />
								</p>
							</div>

							<div className="testimonial-item">
								<img src="img/testimonial-5.jpg" className="testimonial-img" alt="" />
								<h3>Coffee Sơn</h3>
								<h4>115 Lê Lai Quận Gò Vấp TPHCM</h4>
								<p>
									<img src="img/quote-sign-left.png" className="quote-sign-left" alt="" />
									Mỗi tách cà phê trên tay bạn đều là thành quả của một hành trình đáng tự hào.
									<img src="img/quote-sign-right.png" className="quote-sign-right" alt="" />
								</p>
							</div>
						</div> */}
					</div>
				</section>

				{/* ------- */}
				<section id="team">
					<div className="container">
						<div className="section-header wow fadeInUp">
							<h3>Team</h3>
							<p>Team đồng hành xây dựng thương hiệu Coffee Sơn</p>
						</div>

						<div className="row ">
							<div className="team_coffeeson wow fadeInUp " >
								<div className="member">
								<img
										src={'https://res.cloudinary.com/minhchon/image/upload/v1619507461/Thecoffeeson/NgoHoangBaoLuan_m2eqio.jpg'}
										className="img-fluid" style={{width:'300px',height:'250px'}}
										alt="Icon"
									/>
								{/* 	<img src="./images/background_about.jpg" className="img-fluid" alt="" /> */}
									<div className="member-info">
										<div className="member-info-content">
											<h4>Ngô Hoàng Bảo Luân</h4>
											<span>Back-End Developer</span>
											<div className="social">
												<a href="">
													<i className="fa fa-twitter" />
												</a>
												<a href="">
													<i className="fa fa-facebook" />
												</a>
												<a href="">
													<i className="fa fa-google-plus" />
												</a>
												<a href="">
													<i className="fa fa-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="team_coffeeson  wow fadeInUp" data-wow-delay="0.1s">
								<div className="member">
								<img
										src={"https://res.cloudinary.com/minhchon/image/upload/v1619507468/Thecoffeeson/NguyenTienDat_iybjcp.png"}
										className="img-fluid" style={{width:'300px',height:'250px'}}
										alt="Icon"
									/>
									<div className="member-info">
										<div className="member-info-content">
											<h4>Nguyễn Tiến Đạt</h4>
											<span>Back-End Developer</span>
											<div className="social">
												<a href="">
													<i className="fa fa-twitter" />
												</a>
												<a href="">
													<i className="fa fa-facebook" />
												</a>
												<a href="">
													<i className="fa fa-google-plus" />
												</a>
												<a href="">
													<i className="fa fa-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="team_coffeeson  wow fadeInUp" data-wow-delay="0.2s">
								<div className="member">
								<img
										src={'https://res.cloudinary.com/minhchon/image/upload/v1619711414/Thecoffeeson/NguyenThanhHau_iyzxe8.jpg'}
										className="img-fluid" style={{width:'300px',height:'250px'}}
										alt="Icon"
									/>
									<div className="member-info">
										<div className="member-info-content">
											<h4>Nguyễn Thanh Hậu</h4>
											<span>Front-End Devloper</span>
											<div className="social">
												<a href="">
													<i className="fa fa-twitter" />
												</a>
												<a href="">
													<i className="fa fa-facebook" />
												</a>
												<a href="">
													<i className="fa fa-google-plus" />
												</a>
												<a href="">
													<i className="fa fa-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="team_coffeeson wow fadeInUp" data-wow-delay="0.3s">
								<div className="member">
								<img
										src={'https://res.cloudinary.com/minhchon/image/upload/v1619507451/Thecoffeeson/VoTruong_Son_eqlkrh.png'}
										className="img-fluid" style={{width:'300px',height:'250px'}}
										alt="Icon"
									/>
									<div className="member-info">
										<div className="member-info-content">
											<h4>Võ Trường Sơn</h4>
											<span>Tester</span>
											<div className="social">
												<a href="">
													<i className="fa fa-twitter" />
												</a>
												<a href="">
													<i className="fa fa-facebook" />
												</a>
												<a href="">
													<i className="fa fa-google-plus" />
												</a>
												<a href="">
													<i className="fa fa-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="team_coffeeson wow fadeInUp" data-wow-delay="0.3s">
								<div className="member">
								<img
										src={'https://res.cloudinary.com/minhchon/image/upload/v1619715988/Thecoffeeson/NguyenNhatMinh_iqy04w.jpg'}
										className="img-fluid" style={{width:'300px',height:'250px'}}
										alt="Icon"
									/>
									<div className="member-info">
										<div className="member-info-content">
											<h4>Nguyễn Nhật Minh</h4>
											<span>Design</span>
											<div className="social">
												<a href="">
													<i className="fa fa-twitter" />
												</a>
												<a href="">
													<i className="fa fa-facebook" />
												</a>
												<a href="">
													<i className="fa fa-google-plus" />
												</a>
												<a href="">
													<i className="fa fa-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
	
			</main>
		</div>
	);
}
