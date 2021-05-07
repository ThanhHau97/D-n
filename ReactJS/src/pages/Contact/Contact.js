import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Style.css';
export default function Contact() {
	const containerStyle = {
		width: '100%',
		height: '500px'
	};

	const center = {
		lat: 10.852339319355119,
		lng: 106.77126292926266
	};
	return (
		<div>
			{/* <img
				src={process.env.PUBLIC_URL + './Asset/images/Hinh_Banner03.jpg'}
				style={{ width: '100%', height: 350 }}
				alt="Image1"
			/> */}
			<div className="contact container-fluid">
				<div className="row div_map mb-2 ">
					<div className="contact_map">
						<LoadScript googleMapsApiKey="AIzaSyD5I8dijvprE9oprNFI5y_BxqSpq84NbYw">
							<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
						</LoadScript>
					</div>
				</div>
			</div>
			<div className="contact_form container">
				<div className="row">
					<div className="col col-xs-12 text-center contact-left">
						<h6 className="text-uppercase">Cửa Hàng Chính:</h6>
						<p>47 Tân Sơn Nhì, Tân Phú, TPHCM</p>
						<p>
							Số Điện Thoại: <span class="pc-only" />
							<a href="tel:+84 236 3840 780" className="sp-only">
								+84 236 3840 780
							</a>{' '}
							| F: +84 236 3840 782
						</p>
						<p>
							Email: <a href="##" className="sp-only">CoffeeSon@gmail.com</a>
						</p>
					</div>
					{/* <div className="col col-xs-12 col-sm-7 contact-right">
						<h6 className="text-uppercase">Gửi Thông Tin Cho Chúng Tôi</h6>
						<form>
						
							<fieldset>
								<div className="row">
									<div className="col col-xs-12 col-sm-6">
										<label class="field field_v1">
											<input
											 type="text"
												class="field__input"
												name="name"
											
												placeholder="Tên của bạn"
											/>
											<span class="field__label-wrap">
												<span class="field__label">Tên của bạn</span>
											</span>
										</label>
									</div>
									<div className="col col-xs-12 col-sm-6">
										<label class="field field_v1">
											<input
											type="text"
												class="field__input"
												name="phone"
									
												placeholder="Số điện thoại"
											/>
											<span class="field__label-wrap">
												<span class="field__label"> Số điện thoại</span>
											</span>
										</label>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col col-xs-12 col-sm-6">
										<label class="field field_v1">
											<input
											  type="text"
												class="field__input"
												name="email"
										
												placeholder="Email"
											/>
											<span class="field__label-wrap">
												<span class="field__label"> Email</span>
											</span>
										</label>
									</div>
		
									<div className="col col-xs-12 col-sm-6">
										<label class="field field_v1">
											<input class="field__input" type="text" name="title" value="" placeholder=" Tiêu Đề" />
											<span class="field__label-wrap">
												<span class="field__label"> Tiêu Đề</span>
											</span>
										</label>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col col-xs-12">
										<label class="field field_v1">
											<textarea
											  type="text"
												class="field__input"
												rows="4"
												cols="50"
												name="content"
								
												placeholder="Nội dung..."
											/>
											<span class="field__label-wrap">
												<span class="field__label"> Lời Nhắn</span>
											</span>
										</label>
									</div>
								</div>
							</fieldset>
							<div className="submit text-center mt-4">
								<input type="submit" className="button_us show-loading btn-dark" value="Send to us" />
							</div>
						</form>
					</div> */}
				</div>
			</div>
		</div>
	);
}
