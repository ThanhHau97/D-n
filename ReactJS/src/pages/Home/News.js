import React from 'react'
import './News.css'
export default function News() {
    return (
        <div>
				<div className="content_news_div container" >
                <button className="btn_news ">TIN TỨC</button>
				{/* <button className="button_more btn-btn-sm btn-danger">XEM TOÀN BỘ</button> */}
					<div className="row ml-3 mr-3 ">
						<div className="card card_news">
                            	<img
							className="card-img-top"
							src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner02.jpg'}
							alt="News"
						/>
							<div className="card-body">
								<h6 className="pr pt-2 text-uppercase">Tin Tức</h6>
								<a href="##" className="card-title">
								 Coffee Sơn  đồng hành cùng bạn !
								</a>
								<p className="card-text">
									Tại  Coffee Sơn, hành trình  được lan toả mỗi ngày bằng những hành
									động thiết thực mang tính cộng đồng.Mong muốn truyền cảm hứng...
								</p>
							
							</div>
							
							<div className="text-center">
							<button className="btn_news" type="button">
									Xem Thêm
								</button>
								</div>
						</div>
						<div className="card card_news news_div">
                        <img
							className="card-img-top"
							src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner02.jpg'}
							alt="News"
						/>
							<div className="card-body">
								<h6 className="pr pt-2 text-uppercase">Tin Tức</h6>
								<a href="#" className="card-title">
									Tương lai cửa hàng Coffee Sơn sẽ xuất hiện nhiều nơi  tại TP.Hồ Chí Minh
								</a>
								<p className="card-text">
								Với mục tiêu tương lai mở cửa hàng Coffee Sơn tại Thành Phố Hồ Chí Minh
								</p>
							
							</div>
								<div className="text-center">
							<button className="btn_news" type="button">
									Xem Thêm
								</button>
								</div>
						</div>
						<div className="card card_news news_div">
                        <img
							className="card-img-top"
							src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner02.jpg'}
							alt="News"
						/>
							<div className="card-body">
								<h6 class="pr pt-2 text-uppercase">Tin Tức</h6>
								<a href="#" class="card-title">
									7 NGÀY FREE UPSIZE - YÊU BẠN NỮ KHÔNG THỂ NÀO CAI
								</a>
								<p className="card-text">
									Tuần này, Coffee Sơn thật háo hức để gửi tặng một nửa Thế giới xinh đẹp chương
									trình vô cùng ngọt ngào "7 ngày Free Upsize - Yêu bạn nữ...
								</p>
						
							</div>
							<div className="text-center">
							<button className="btn_news" type="button">
									Xem Thêm	
								</button>
								</div>
						</div>
					</div>
				</div>
        </div>
    )
}
