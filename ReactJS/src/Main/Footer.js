import React from 'react'

export default function Footer() {
    return (
        <div>
            	<footer id="footer">
				<div className="footer_content_div container mt-4">
					<div className="row mt-4 pt-4">
						<div className="doitac">
							<h6 className="title_footer">
								{/* <img
									className="d-block"
									src={process.env.PUBLIC_URL + '/Asset/images/Logo1.png'}
									style={{ width: '150px', height: '40px' }}
									alt="Logo_Footer"
								/> */}
								                  <img
							src={process.env.PUBLIC_URL + 'Asset/images/LogoMain.png'}
							alt="Giới Thiệu" style={{ width: '200px', height: '250px' }}
						/>
							</h6>
						</div>

						<div className="tiki_me">
							<h6 className="title_footer">VỀ COFFEE SON</h6>
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Giới thiệu COFFEE SON
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Tuyển Dụng
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Chính sách bảo mật thanh toán
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Chính sách bảo mật thông tin cá nhân
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Chính sách giải quyết khiếu nại
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Điều khoản sử dụng
							</a>
							<br />
						
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Bán hàng doanh nghiệp
							</a>
						</div>
						<div className="contact_customer">
							<h6 className="title_footer">HỖ TRỢ KHÁCH HÀNG</h6>
							<div className="hotline">
								Hotline chăm sóc khách hàng: <a href="tel:1900-6035">1900-6035</a>
							</div>
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Các câu hỏi thường gặp
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Gửi yêu cầu hỗ trợ
							</a>
							<br />
							<a rel="noreferrer" href="#" class="small-text" target="_blank">
								Hướng dẫn đặt hàng
							</a>
							<br />
							<a rel="noreferrer" href="#" className="small-text" target="_blank">
								Phương thức vận chuyển
							</a>
							<br />
							<a className="security small-text">
								Hỗ trợ khách hàng: <a href="#">hotro@CoffeSon.vn</a>
							</a>
							<br />
							<a className="security small-text">
								Báo lỗi bảo mật: <a href="#">security@CoffeSon.vn</a>
							</a>
						</div>
						<div className="paywallet">
							<h6 className="title_footer">PHƯƠNG THỨC THANH TOÁN</h6>
							{/* <p>
								<img
									className="icon"
									src={process.env.PUBLIC_URL + '/Asset/icon/Momo.png'}
									style={{ width: '54px' }}
									alt="Momo"
								/>
								<img
									className="icon"
									src={process.env.PUBLIC_URL + '/Asset/icon/visa.png'}
									style={{ width: '54px' }}
									alt="Visa"
								/>
								<img
									className="icon"
									src={process.env.PUBLIC_URL + '/Asset/icon/mastercard.png'}
									style={{ width: '54px' }}
									alt="Master Card"
								/>
							</p> */}
							<h6 className="title_footer">KẾT NỐI VỚI CHÚNG TÔI</h6>
							{/* <p>
								<a rel="noreferrer" href="#" className="icon" target="_blank" title="Facebook">
									<img
										src={process.env.PUBLIC_URL + '/Asset/icon/fb.png'}
										style={{ width: '32px' }}
										alt="Facebook"
									/>
								</a>
								<a
									rel="noreferrer"
									href="https://www.youtube.com/user/TikiVBlog"
									className="icon"
									target="_blank"
									title="Youtube"
								>
									<img
										src={process.env.PUBLIC_URL + '/Asset/icon/youtube.png'}
										style={{ width: '32px' }}
										alt="Youtube"
									/>
								</a>
							</p> */}
						</div>
					</div>
				</div>
				<hr style={{backgroundColor:'#fff'}}/>
				<div className="address_info container">
					<div className="address-info ml-4">
						<span className="address-title small-text">
							<h6 class="small-text">© 2021 - Bản quyền của Team Coffee Son</h6>
							<b>Địa chỉ văn phòng:</b> 13 Đường số 7, phường Linh Chiểu,TP.Thủ Đức, Thành Phố Hồ Chí Minh
						</span>
						<br />
						<span class="address-text small-text">
							Giấy chứng nhận Đăng ký Kinh doanh do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày
							06/01/2021
						</span>
         <span className="icon">
						<a href="#" rel="noreferrer" aria-label="">
							<img
								src={process.env.PUBLIC_URL + '/Asset/icon/bo-cong-thuong.svg'}
								style={{ width: '120px' }}
								alt="Bộ Công Thương"
							/>
						</a>
            </span>
					</div>
		
				</div>
			</footer>
        </div>
    )
}
