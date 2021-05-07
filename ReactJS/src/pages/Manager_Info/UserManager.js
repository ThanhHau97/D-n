import React,{useEffect,useState} from 'react';
import './Style.css';
import UserInfo from './UserInfo';
import OrderManager from './OrderManager';
import ResetPass from './ResetPass';
import AuthService from '../../Services/AuthService'
import './UserManager.css'
export default function UserManager() {
	const [ currentUser, setCurrentUser ] = useState(undefined);
	useEffect(() => {
		const user = AuthService.getProfile();
		if (user) {
			setCurrentUser(user);
			console.log(user);
		}
	}, []);
	return (
		<div className="container-lg user-manager">
			
			<div className="row">
		
							<div
								className="col-lg-3 col-md-3 col-sm-3 col-xs-3"
								style={{ background: 'black', color: 'white', border: '1px solid' }}
							>
								<div className="row">
									<div className="col-md-3">
										<img
											src="https://res.cloudinary.com/minhchon/image/upload/v1619174797/Thecoffeeson/nongdan_h9j3mc.jpg"
											style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt=""
										/>
									</div>
									<div className="col-md-9 pl-5 pt-4 text-uppercase">
										Tài Khoản <br />
										<p className="pl-3" style={{ color: 'yellow', fontWeight: 'bold' }}>
										{currentUser ? (
											<p>{currentUser.username}</p>
										):(
											<p>No Name</p>
										)}
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-9 pt-4" style={{ background: 'black', color: 'white' }}>
								THÔNG TIN
							</div>
					
				<div className="col-3 bg-user">
					<div
						className="nav flex-column nav-pills"
						id="v-pills-tab"
						role="tablist"
						aria-orientation="vertical"
					>
						<a
							className="nav-link nav_a active"
							id="v-pills-home-tab"
							data-toggle="pill"
							href="#v-pills-home"
							role="tab"
							aria-controls="v-pills-home"
							aria-selected="true"
						>
							Thông tin tài khoản
						</a>
						<a
							className="nav-link nav_a"
							id="v-pills-messages-tab"
							data-toggle="pill"
							href="#v-pills-messages"
							role="tab"
							aria-controls="v-pills-messages"
							aria-selected="false"
						>
							Đổi Mật Khẩu
						</a>
						<a
							className="nav-link nav_a"
							id="v-pills-profile-tab"
							data-toggle="pill"
							href="#v-pills-profile"
							role="tab"
							aria-controls="v-pills-profile"
							aria-selected="false"
						>
							Quản Lí Đơn Hàng
						</a>
				
					</div>
				</div>
				<div className="col-9">
					<div className="tab-content" id="v-pills-tabContent">
						<div
							className="tab-pane fade show active"
							id="v-pills-home"
							role="tabpanel"
							aria-labelledby="v-pills-home-tab"
						>
							<div>
					<UserInfo/>
							</div>
						</div>
						<div
							className="tab-pane fade"
							id="v-pills-profile"
							role="tabpanel"
							aria-labelledby="v-pills-profile-tab"
						>
							<OrderManager/>
						</div>
						<div
							className="tab-pane fade"
							id="v-pills-messages"
							role="tabpanel"
							aria-labelledby="v-pills-messages-tab"
						>
						<ResetPass/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
