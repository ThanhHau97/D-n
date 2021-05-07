import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Style.css';
import AuthService from '../Services/AuthService';
import Login from '../pages/Login/UserLogin';
import Register from '../pages/Login/Register'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import listContext from '../ContextConfig';
import { useHistory} from 'react-router-dom';
export default function Header() {
	const [ currentUser, setCurrentUser ] = useState(false);
	const {cart} = useContext(listContext);
 	// const { cartCount } = useContext(listContext);
	const [cartCount, setCartCount] = useState(0);
	const history = useHistory();
	useEffect(() => {
		const user = AuthService.getProfile();
		if (user) {
			setCurrentUser(user);
		
		}
	}, []);

	useEffect(() => {
		const count = cart.reduce((total, item) => Number(total) + Number(item.amount), 0)
		setCartCount(count);
	}, [cart]);

	const logout = () => {
		sessionStorage.clear();
		history.push('/')
		window.location.reload("/");
		setCurrentUser(false);
	};
	return (
		<div className="container-fluid">
			<div className="row header_div fixed-top">
				<div className="col-md-3">
					<Link to="/">
						<img
							className="logo_header"
							style={{ width: '300px', height: '30px', marginLeft: '100px' }}
							src={process.env.PUBLIC_URL + '/Asset/images/Logo1.png'}
							alt="Logo"
						/>
					</Link>
				</div>
				<div className="col-md-6">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<Link className="nav-link active text-uppercase item-menu header-borderEffect" to="/">
								Trang Chủ
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link active text-uppercase item-menu header-borderEffect" to="/about">
								Giới Thiệu
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active text-uppercase item-menu header-borderEffect"
								to="/product"
							>
								Sản Phẩm
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active text-uppercase item-menu header-borderEffect"
								to="/contact"
							>
								Liên hệ
							</Link>
						</li>
						{/* <li class="nav-item">
							<Link className="nav-link active text-uppercase item-menu header-borderEffect" to="">
								Tuyển Dụng
							</Link>
						</li> */}
					</ul>
				</div>

				<div className="col-md-3 row">
				{currentUser ? (	<ul class="nav">
											<li className="nav-item">
												<Link to={'/user'} className="nav-link item_name header-borderEffect">
												<img className="avatar" src={currentUser.picture} alt={currentUser.name}/>
													{currentUser.username}
												</Link>
											</li>
											<li className="nav-item">
											<Link  to="/" className="nav-link item_name  header-borderEffect" onClick={logout}>
													<i class="fa fa-sign-out" aria-hidden="true">Đăng Xuất</i>
													</Link>
											</li>
										</ul>
									) : (
										<ul class="nav">
											<li className="nav-item">
											<Login/>
											</li>
											<li className="nav-item">
											<Register/>
											</li>
										</ul>
										
									)}
				
					<Link className="mt-1" to="/Cart">
						<i className="fa fa-shopping-bag cart-icon" aria-hidden="true">
							<span className="badge badge-light cart-number">{cartCount}</span>
						</i>
					</Link>
				</div>
			</div>
			<div>
				<ScrollUpButton />
			</div>
		</div>
	);
}
