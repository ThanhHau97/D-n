import React,{useState,useRef} from 'react';
import { isEmail } from 'validator';
import ModalHeader from 'react-bootstrap/ModalHeader'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../../Services/AuthService';
import { useHistory, Link } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import OTP from './OTP';
import './Forgot.css'
export default function Forgot_Password() {
	const required = (value) => {
		if (!value) {
			return (
				<div className="alert alert-danger" role="alert">
				Không được để trống
				</div>
			);
		}
	};
	const validEmail = (value) => {
		if (!isEmail(value)) {
			return (
				<div className="alert alert-danger" role="alert">
					Không đúng định dạng Email
				</div>
			);
		}
	};

	const vusername = (value) => {
		if (value.length < 3 || value.length > 20) {
			return (
				<div className="alert alert-danger" role="alert">
				 Tài khoản  khoảng từ 3 đển 20 kí tự
				</div>
			);
		}
	};
	const form = useRef();
	const checkBtn = useRef();
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ message, setMessage ] = useState('');
	const [ successful, setSuccessful ] = useState(false);
	const history = useHistory();
	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};
	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};
	
const handleForgot = (e) => {
		e.preventDefault();
		setMessage('');
		setSuccessful(false);
		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			AuthService.forgot(username, email).then(
				(response) => {
					setMessage(response.data.message);
					setSuccessful(true);
					handleForgotShow();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					setMessage(resMessage);
					setSuccessful(false);
				}
			);
		}
	};
	const [showFor, setShowFor] = useState(false);
	const handleForClose = () => setShowFor(false);
	const handleForShow = () => setShowFor(true);
			//Modal Thông báo Quên Mật Khẩu
	const [ showForgot, setShowForgot ] = useState(false);
	const handleForgotClose = () => setShowForgot(false);
	const handleForgotShow = () => setShowForgot(true);
	function ReloadPage(){
		handleForClose();
		handleForgotClose();
	};
	return (
		<>
			<div>
				<img src={process.env.PUBLIC_URL + './Asset/images/Hinh_Banner03.jpg'} style={{ width: '100%', height: 350 }} alt="Image1" />
			</div>
	<div className="purple-square container-fluid"> 

	<div className="col-md-4">
			<div className="card card-signin my-">
			<ModalHeader style={{ paddingLeft: '125px', paddingBottom: '20px', borderBottom: '0 none',backgroundColor:'rgb(175, 105, 35)' }}>
                            <a href='/'>    	<img
							className="logo_header"
							style={{ width: '150px', height: '30px', marginLeft:'50px'}}
							src={process.env.PUBLIC_URL + '/Asset/images/Logo1.png'}
							alt="Logo"
						/></a>
                        </ModalHeader>
				<div className="card-body">
		
					<Form onSubmit={handleForgot} ref={form} className="mb-4 pb-4">
		<h5 className="text-center text-uppercase">Quên mật Khẩu</h5>
								
										<div className="form-group">
											<Input
												type="text"
												className="form-control input-dangnhap-dangky"
												name="username"
												value={username}
												onChange={onChangeUsername}
												validations={[ required, vusername ]}
												placeholder="Tên Đăng Nhập"
											/>
										</div>

										<div className="form-group">
											<Input
												type="text"
												className="form-control input-dangnhap-dangky"
												name="email"
												value={email}
												onChange={onChangeEmail}
												validations={[ required, validEmail ]}
												placeholder="Email"
											/>
										</div>
								       <div className="form-group text-center">
												<button 
													className="form-submit-button"
													disabled={loading}
												>
													{loading && (
														<span className="spinner-border spinner-border-sm text-danger" />
													)}
													<span>Lấy Mã OTP</span>
												</button>
											</div>
								
					
								{message && (
									<div className="form-group">
										<div
											className={successful ? 'alert alert-success' : 'alert alert-danger'}
											role="alert"
										>
											{message}
										</div>
									</div>
								)}
								<CheckButton style={{ display: 'none' }} ref={checkBtn} />
							</Form>
							<Modal dialogClassName="messmodal" show={showForgot} onHide={handleForgotClose}>
								<div className="icon-box">
								<i class="fa fa-check" aria-hidden="true"></i>
								</div>
								<Modal.Body>
									<p className="text-center mt-4">Lấy Mã OTP Thành Công</p>
								</Modal.Body>
									<OTP />
							</Modal>
      </div>
    </div>
	</div>
	</div>
	</>
		
	
	);
}
