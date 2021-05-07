import React, { useState, useRef } from "react";
import './Style.css';
import { Modal,Button } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useHistory,Link } from 'react-router-dom';
import AuthService from "../../Services/AuthService";
import { isEmail } from 'validator';
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
		Không đúng dịnh dạng Email
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
const vpotp = (value) => {
  if (value.length < 6) {
    return (
      <div className="alert alert-danger" role="alert">
        OTP có  6 số
      </div>
    );
  }
};
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeOTP= (e) => {
    const otp = e.target.value;
    setOTP(otp);
  };



  const handleOTP = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.otp(username,password,otp).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          handleOTPShow();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
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
  //Thông Báo
  const [ showOTP, setShowOTP ] = useState(false);
  const handleOTPClose = () => setShowOTP(false);
  const handleOTPShow = () => setShowOTP(true);
  const ReloadOTPPage = () => {
    handleClose();
    handleOTPClose();
    window.location.reload('/')
  };
  return (
    <>
      <button href="###" className="btn- btn-sm btn-success" onClick={handleShow}>
     OK
      </button>
	  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng Nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
		<div className="col-md-12 m-auto text-center">
			<br />
      <Form onSubmit={handleOTP} ref={form}>
                    {!successful && (
                        <div>
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
                                    type="password"
                                    className="form-control input-dangnhap-dangky"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[ required, vpassword ]}
                                    placeholder="Mật Khẩu"
                                />
                            </div>
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-control input-dangnhap-dangky"
                                    name="otp"
                                    value={otp}
                                    onChange={onChangeOTP}
                                    validations={[ required, vpotp]}
                                    placeholder="OTP"
                                />
                            </div>
                            <div className="form-group">
                                <button className="form-submit-button">Quên Mật Khẩu</button>
                            
                            </div>
                        </div>
                    )}

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
                </div>
                </Modal.Body> 
               </Modal>
                <Modal dialogClassName="messmodal" show={showOTP} onHide={handleOTPClose}>
                    <div className="icon-box">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <Modal.Body>
                        <p className="text-center mt-4">Lấy mật khẩu thành công</p>
                    </Modal.Body>

                    <button className="btn btn-success btn-block" type="button" onClick={ReloadOTPPage}>
                        OK
                    </button>
                </Modal>
	
    </>
  );
}
