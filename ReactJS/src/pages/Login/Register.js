import React, { useState, useRef } from "react";
import './Style.css';
import { Modal,Button } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useHistory,Link } from 'react-router-dom';
import AuthService from "../../Services/AuthService";
import { isEmail } from 'validator';
import ModalHeader from 'react-bootstrap/ModalHeader'
export default function Register(props) {

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

const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
			Mật khẩu khoảng  6 đến 40 kí tự
			</div>
		);
	}
};

  const form = useRef();
  const checkBtn = useRef();

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ successful, setSuccessful ] = useState(false);
  const [ message, setMessage ] = useState('');
  const history = useHistory();
  const onChangeUsername = (e) => {
	  const username = e.target.value;
	  setUsername(username);
  };

  const onChangeEmail = (e) => {
	  const email = e.target.value;
	  setEmail(email);
  };

  const onChangePassword = (e) => {
	  const password = e.target.value;
	  setPassword(password);
  };


  const handleRegister = (e) => {
	  e.preventDefault();

	  setMessage('');
	  setSuccessful(false);

	  form.current.validateAll();

	  if (checkBtn.current.context._errors.length === 0) {
		  AuthService.register(username, email, password).then(
			  (response) => {
				  setMessage(response.data.message);
				  setSuccessful(true);
				  handleRegisterShow()
				  history.push('/')
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// Modal Thông Báo
  const [showRegister, setShowRegister] = useState(false);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);
  //   Load Page
  function ReloadPage() {
	handleRegisterClose();
	window.location.reload("/");
	
	};
  return (
    <>
      <a href="###"  className="nav-link text-uppercase item-menu  header-borderEffect" onClick={handleShow}>
        Đăng Kí
      </a>
	  

      <Modal show={show} onHide={handleClose}>
      <ModalHeader style={{ paddingLeft: '125px', paddingTop: '20px', paddingBottom: '20px', borderBottom: '0 none',backgroundColor:'rgb(175, 105, 35)' }} closeButton >
                            <a href='/'>    	<img
							className="logo_header"
							style={{ width: '150px', height: '30px', marginLeft:'60px'}}
							src={process.env.PUBLIC_URL + '/Asset/images/Logo1.png'}
							alt="Logo"
						/></a>
                        </ModalHeader>
        <Modal.Body> 
		<div className="col-md-12 m-auto text-center">
			<br />
			<Form onSubmit={handleRegister} ref={form}>
			<h4 className="text-center text-uppercase"> Đăng Kí</h4>
				{!successful && (
					<div>
						<div className="form-group">
							<Input
								type="text"
								name="dangKySoDienThoai"
								id="dangKySoDienThoai"
								className="form-control input-dangnhap-dangky"
								placeholder="Số điện thoại hoặc Email"
								value={email}
								onChange={onChangeEmail}
								validations={[ required, validEmail ]}
							/>
						</div>

						<div className="form-group">
							<Input
								type="text"
								id="username"
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
								type="password"
								className="form-control input-dangnhap-dangky"
								id="password"
								name="password"
								value={password}
								onChange={onChangePassword}
								validations={[ required, vpassword ]}
								placeholder="Mật Khẩu"
							/>
						</div>

						<div className="form-group div-submit">
                <button className="form-submit-button">Đăng Kí</button>
             
              </div>
					</div>
				)}

				{message && (
					<div className="form-group">
						<div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
							{message}
						</div>
					</div>
				)}
				<CheckButton style={{ display: 'none' }} ref={checkBtn} />
			</Form>	</div>
			</Modal.Body> 
			</Modal>
			<Modal dialogClassName="messmodal" show={showRegister} onHide={handleRegisterClose}>
				<div className="icon-box">
					<i class="fa fa-check" aria-hidden="true"></i>
				</div>
				<Modal.Body>
					<p className="text-center mt-4">Đăng Kí Thành Công</p>
				</Modal.Body>

				<button className="btn btn-success btn-block" type="button" onClick={ReloadPage}>
					OK
				</button>
			</Modal>
	
    </>
  );
}

