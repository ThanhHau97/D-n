// import React, { useState, useRef } from 'react';
// import './Style.css';
// import ForgotPassword from './Forgot_Password';
// import OTP from './OTP';
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import CheckButton from 'react-validation/build/button';
// import AuthService from '../../Services/AuthService';
// import { useHistory, Link } from 'react-router-dom';
// import { isEmail } from 'validator';
// import { Modal } from 'react-bootstrap';
// export default function Login(props) {
// 	const required = (value) => {
// 		if (!value) {
// 			return (
// 				<div className="alert alert-danger" role="alert">
// 					This field is required!
// 				</div>
// 			);
// 		}
// 	};
// 	const validEmail = (value) => {
// 		if (!isEmail(value)) {
// 			return (
// 				<div className="alert alert-danger" role="alert">
// 					This is not a valid email.
// 				</div>
// 			);
// 		}
// 	};

// 	const vusername = (value) => {
// 		if (value.length < 3 || value.length > 20) {
// 			return (
// 				<div className="alert alert-danger" role="alert">
// 					The username must be between 3 and 20 characters.
// 				</div>
// 			);
// 		}
// 	};

// 	const vpassword = (value) => {
// 		if (value.length < 6 || value.length > 40) {
// 			return (
// 				<div className="alert alert-danger" role="alert">
// 					The password must be between 6 and 40 characters.
// 				</div>
// 			);
// 		}
// 	};
// 	const vpotp = (value) => {
// 		if (value.length < 6) {
// 			return (
// 				<div className="alert alert-danger" role="alert">
// 					OTP have 6 characters
// 				</div>
// 			);
// 		}
// 	};
// 	const form = useRef();
// 	const checkBtn = useRef();
// 	const [ username, setUsername ] = useState('');
// 	const [ password, setPassword ] = useState('');
// 	// const [ email, setEmail ] = useState('');
// 	const [ loading, setLoading ] = useState(false);
// 	const [ message, setMessage ] = useState('');
// 	const [ successful, setSuccessful ] = useState(false);
// 	// const [user, setUser] = useState()
// 	const history = useHistory();
// 	const onChangeUsername = (e) => {
// 		const username = e.target.value;
// 		setUsername(username);
// 	};

// 	const onChangePassword = (e) => {
// 		const password = e.target.value;
// 		setPassword(password);
// 	};
// 	// const onChangeEmail = (e) => {
// 	// 	const email = e.target.value;
// 	// 	setEmail(email);
// 	// };


// 	const handleLogin = (e) => {
// 		e.preventDefault();
// 		setMessage('');
// 		setLoading(true);
// 		form.current.validateAll();
// 		if (checkBtn.current.context._errors.length === 0) {
// 			AuthService.login(username, password).then(
// 				() => {
// 			history.push("/")
	
// 					window.location.reload();
// 					// setUser(response.data);
// 					// console.log(response.data)
// 				},
// 				(error) => {
// 					const resMessage =
// 						(error.response && error.response.data && error.response.data.message) ||
// 						error.message ||
// 						error.toString();

// 					setLoading(false);
// 					setMessage(resMessage);
// 				}
// 			);
// 		} else {
// 			setLoading(false);
// 		}
// 	};
// 	// const handleRegister = (e) => {
// 	// 	e.preventDefault();

// 	// 	setMessage('');
// 	// 	setSuccessful(false);

// 	// 	form.current.validateAll();

// 	// 	if (checkBtn.current.context._errors.length === 0) {
// 	// 		AuthService.register(username, email, password).then(
// 	// 			(response) => {
// 	// 				setMessage(response.data.message);
// 	// 				setSuccessful(true);
// 	// 				handleShow();
// 	// 			},
// 	// 			(error) => {
// 	// 				const resMessage =
// 	// 					(error.response && error.response.data && error.response.data.message) ||
// 	// 					error.message ||
// 	// 					error.toString();

// 	// 				setMessage(resMessage);
// 	// 				setSuccessful(false);
// 	// 			}
// 	// 		);
// 	// 	}
// 	// };
// 	// const handleForgot = (e) => {
// 	// 	e.preventDefault();

// 	// 	setMessage('');
// 	// 	setSuccessful(false);

// 	// 	form.current.validateAll();

// 	// 	if (checkBtn.current.context._errors.length === 0) {
// 	// 		AuthService.forgot(username, email).then(
// 	// 			(response) => {
// 	// 				setMessage(response.data.message);
// 	// 				setSuccessful(true);
// 	// 				handleForgotShow();
// 	// 			},
// 	// 			(error) => {
// 	// 				const resMessage =
// 	// 					(error.response && error.response.data && error.response.data.message) ||
// 	// 					error.message ||
// 	// 					error.toString();
// 	// 				setMessage(resMessage);
// 	// 				setSuccessful(false);
// 	// 			}
// 	// 		);
// 	// 	}
// 	// };
	

// 	// //Modal Đăng kí
// 	// const [ show, setShow ] = useState(false);
// 	// const handleClose = () => setShow(false);
// 	// const handleShow = () => setShow(true);
// 	// 	const ReloadPage = () => {
// 	//  	handleClose();
// 	// 	 history.push('/');

		 
// 	//  };
// 	// 	//Modal Quên Mật Khẩu
// 	// const [ showForgot, setShowForgot ] = useState(false);
// 	// const handleForgotClose = () => setShowForgot(false);
// 	// const handleForgotShow = () => setShowForgot(true);
// 	// const ReloadPage = () => {
// 	// 	handleClose();
// 	// };
// 	return (
// 		<div>
// 			<a
// 				type="button"
// 				href
// 				className="btn btn-primary"
// 				id="header-dangnhap"
// 				data-toggle="modal"
// 				data-target="#exampleModal"
// 			>
// 				<i className="fa fa-user cart-icon" aria-hidden="true" />
// 			</a>
// 			<div
// 				className="modal fade"
// 				id="exampleModal"
// 				tabindex="-1"
// 				aria-labelledby="exampleModalLabel"
// 				aria-hidden="true"
			
// 			>
// 				<div className="modal-dialog">
// 					<div className="modal-content">
// 						<div className="modal-header">
// 							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="modal-body">
// 							<nav>
// 								<div className="nav nav-tabs" id="nav-tab" role="tablist">
// 									<a
// 										className="nav-link active"
// 										id="nav-home-tab"
// 										data-toggle="tab"
// 										href="#nav-home"
// 										role="tab"
// 										aria-controls="nav-home"
// 										aria-selected="true"
// 									>
// 										Đăng Nhập
// 									</a>
// 									<a
// 										className="nav-link"
// 										id="nav-profile-tab"
// 										data-toggle="tab"
// 										href="#nav-profile"
// 										role="tab"
// 										aria-controls="nav-profile"
// 										aria-selected="false"
// 									>
// 										Đăng Kí
// 									</a>
// 								</div>
// 							</nav>
// 							<div className="tab-content" id="nav-tabContent">
// 								<div
// 									className="tab-pane fade show active"
// 									id="nav-home"
// 									role="tabpanel"
// 									aria-labelledby="nav-home-tab"
// 								>
// 									<div className="col-md-12 m-auto text-center">
// 										<br />
// 										<Form className="form-signin" onSubmit={handleLogin} ref={form}>
// 											<div className="form-group">
// 												<Input
// 													type="text"
// 													name="username"
// 													id="username"
// 													className="form-control input-dangnhap-dangky"
// 													placeholder="Tên đăng nhập"
// 													value={username}
// 													onChange={onChangeUsername}
// 													validations={[ required ]}
// 												/>
// 												<i class="fa fa-user" id="input_img_username" aria-hidden="true" />
// 											</div>

// 											<div className="form-group">
// 												<Input
// 													type="password"
// 													name="password"
// 													className="form-control input-dangnhap-dangky"
// 													id="password"
// 													placeholder="Mật khẩu"
// 													value={password}
// 													onChange={onChangePassword}
// 													validations={[ required ]}
// 												/>
// 												<i class="fa fa-lock" id="input_img_password" aria-hidden="true" />
// 											</div>
// 											<div className="form-check text-left">
// 												<input
// 													type="checkbox"
// 													name="remember"
// 													className="form-check-input"
// 													style={{ backgroundColor: 'red' }}
// 													id="remember"
// 												/>
// 												<label className="form-check-label" htmlFor="remember">
// 													Ghi nhớ tài khoản
// 												</label>
// 												<a type="button" className="forgotpassword">
// 													<div
// 														data-toggle="modal"
// 														data-target="#staticBackdrop"
// 														data-dismiss="modal"
// 														aria-label="Close"
// 													>
// 														Quên Mật Khẩu?
// 													</div>
// 												</a>
// 											</div>
// 											<div className="form-group">
// 												<button 
// 													// className="form-submit-button"
// 													// disabled={loading}
// 												>
// 													{/* {loading && (
// 														<span className="spinner-border spinner-border-sm text-danger" />
// 													)} */}
// 													<span>Đăng Nhập</span>
// 												</button>
// 											</div>
// 											{/* {message && (
// 												<div className="form-group">
// 													<div className="alert alert-danger" role="alert">
// 														{message}
// 													</div>
// 												</div>
// 											)} */}
// 											<CheckButton style={{ display: 'none' }} ref={checkBtn} />
// 										</Form>
// 									</div>
// 								</div>
// 								<div
// 									className="tab-pane fade"
// 									id="nav-profile"
// 									role="tabpanel"
// 									aria-labelledby="nav-profile-tab"
// 								>
// 									<div className="col-md-12 m-auto text-center">
// 										{/* <br />
// 										<Form onSubmit={handleRegister} ref={form}>
// 											{!successful && (
// 												<div>
// 													<div className="form-group">
// 														<Input
// 															type="text"
// 															name="dangKySoDienThoai"
// 															id="dangKySoDienThoai"
// 															className="form-control input-dangnhap-dangky"
// 															placeholder="Số điện thoại hoặc Email"
// 															value={email}
// 															onChange={onChangeEmail}
// 															validations={[ required, validEmail ]}
// 														/>
// 													</div>

// 													<div className="form-group">
// 														<Input
// 															type="text"
// 															id="username"
// 															className="form-control input-dangnhap-dangky"
// 															name="username"
// 															value={username}
// 															onChange={onChangeUsername}
// 															validations={[ required, vusername ]}
// 															placeholder="Tên Đăng Nhập"
// 														/>
// 													</div>
// 													<div className="form-group">
// 														<Input
// 															type="password"
// 															className="form-control input-dangnhap-dangky"
// 															id="password"
// 															name="password"
// 															value={password}
// 															onChange={onChangePassword}
// 															validations={[ required, vpassword ]}
// 															placeholder="Mật Khẩu"
// 														/>
// 													</div>

// 													<div className="form-group div-submit">
// 														<button className="form-submit-button">Đăng Kí</button>
// 													</div>
// 												</div>
// 											)}

// 											{message && (
// 												<div className="form-group">
// 													<div
// 														className={
// 															successful ? 'alert alert-success' : 'alert alert-danger'
// 														}
// 														role="alert"
// 													>
// 														{message}
// 													</div>
// 												</div>
// 											)}
// 											<CheckButton style={{ display: 'none' }} ref={checkBtn} />
// 										</Form>

// 										<Modal dialogClassName="messmodal" show={show} onHide={handleClose}>
// 											<div className="icon-box">
// 												<i className="ft-check text-center" />
// 											</div>
// 											<Modal.Body>
// 												<p className="text-center mt-4">Đăng Kí Thành Công</p>
// 											</Modal.Body>

// 											<button
// 												className="btn btn-success btn-block"
// 												type="button"
// 												onClick={ReloadPage}
// 											>
// 												OK
// 											</button>
// 										</Modal> */}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* Modal Quên Mật Khẩu */}
// 			<div
// 				className="modal fade"
// 				id="staticBackdrop"
// 				data-backdrop="static"
// 				data-keyboard="false"
// 				tabindex="-1"
// 				aria-labelledby="staticBackdropLabel"
// 				aria-hidden="true"
// 			>
// 				<div className="modal-dialog modal_cane">
// 					<div className="modal-content">
// 						<div className="modal-header">
// 							<h5 className="modal-title" id="staticBackdropLabel">
// 								Quên Mật Khẩu
// 							</h5>
// 							<button
// 								type="button"
// 								className="close"
// 								data-dismiss="modal"
// 								aria-label="Close"
// 								data-toggle="modal"
// 								data-target="#exampleModal"
// 							>
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="modal-body">
// 							{/* <Form onSubmit={handleForgot} ref={form}>
// 								{!successful && (
// 									<div>
// 										<div className="form-group">
// 											<label htmlFor="username">Tài Khoản</label>
// 											<Input
// 												type="text"
// 												className="form-control"
// 												name="username"
// 												value={username}
// 												onChange={onChangeUsername}
// 												validations={[ required, vusername ]}
// 												placeholder="Tên Đăng Nhập"
// 											/>
// 										</div>

// 										<div className="form-group">
// 											<label htmlFor="email">Email</label>
// 											<Input
// 												type="text"
// 												className="form-control"
// 												name="email"
// 												value={email}
// 												onChange={onChangeEmail}
// 												validations={[ required, validEmail ]}
// 												placeholder="Email"
// 											/>
// 										</div>
// 										<div className="form-group div-submit">
// 											<button className="form-control forgot-submit-button">Lấy Mã OTP</button>
// 										</div>
// 									</div>
// 								)}

// 								{message && (
// 									<div className="form-group">
// 										<div
// 											className={successful ? 'alert alert-success' : 'alert alert-danger'}
// 											role="alert"
// 										>
// 											{message}
// 										</div>
// 									</div>
// 								)}
// 								<CheckButton style={{ display: 'none' }} ref={checkBtn} />
// 							</Form>
// 							<Modal dialogClassName="messmodal" show={showForgot} onHide={handleForgotClose}>
// 								<div className="icon-box">
// 									<i className="ft-check text-center" />
// 								</div>
// 								<Modal.Body>
// 									<p className="text-center mt-4">Lấy Mã OTP Thành Công</p>
// 								</Modal.Body>
// 									<OTP onClick={ReloadPage}/>
// 							</Modal> */}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* OTP */}
			
// 		</div>
// 	);
// }
