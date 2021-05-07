import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {useHistory } from 'react-router-dom';
import { Modal} from 'react-bootstrap';
import AuthService from "../../Services/AuthService";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vnewpassword  = (value) => {
    if (value.length <6 ){
      return (
        <div className="alert alert-danger" role="alert">
               The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
const ResetPassword = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [oldpassword, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const User=AuthService.getProfile();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const oldpassword = e.target.value;
    setPassword(oldpassword);
  };

  const onChangeNewPassword= (e) => {
    const newpassword = e.target.value;
    setNewpassword(newpassword);
  };



  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.changepassword(username,oldpassword,newpassword).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          handleShow();
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
  const ReloadPage = () => {
		handleClose();
 window.location.reload();
	};
  return (
    <div className="container-fluid"> 
    <div className="col-md-6 mt-4">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <Input
                  type="text"
                  className="form-control input-dangnhap-dangky"
                  name="username"
                  value={User.username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                  placeholder="Tên Đăng Nhập"

                />
              </div>

              <div className="form-group">
                <Input
                  type="password"
                  className="form-control input-dangnhap-dangky"
                  name="oldpassword"
                  value={oldpassword}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="Mật Khẩu Cũ"
                />
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  className="form-control input-dangnhap-dangky"
                  name="newpassword"
                  value={newpassword}
                  onChange={onChangeNewPassword}
                  validations={[required, vnewpassword]}
                  placeholder="Mật Khẩu Mới"
                />
              </div>
              <div className="form-group text-center">
                <button className="form-submit-button">Đổi Mật Khẩu</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
 
 
    		<Modal dialogClassName="messmodal" show={show} onHide={handleClose}>
			<div className="icon-box">
					<i className="ft-check text-center"></i>
				</div>	
				<Modal.Body>
				<p className="text-center mt-4">Đổi mật khẩu thành công</p>
			</Modal.Body>

            <button className="btn btn-success btn-block" type="button" onClick={ReloadPage}>OK</button>
			</Modal>
    </div>
    
  );
};

export default ResetPassword;