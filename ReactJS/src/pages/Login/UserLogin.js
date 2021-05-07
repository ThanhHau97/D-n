import React, { useState, useRef } from "react";
import './Style.css';
import { Modal,Button } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useHistory,Link } from 'react-router-dom';
import AuthService from "../../Services/AuthService";
import Forgot from './Forgot_Password'
export default function Example(props) {

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
      Không được để trống
        </div>
      );
    }
  };
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          history.push("/");
          window.location.reload();
          
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	const ReloadPage = () => {
		handleClose()

	};
  return (
    <>
      <a href="###"  className="nav-link text-uppercase item-menu  header-borderEffect" onClick={handleShow}>
        Đăng nhập
      </a>

      <Modal show={show} onHide={handleClose}>
      <ModalHeader style={{ paddingLeft: '125px', paddingTop: '20px', paddingBottom: '20px', borderBottom: '0 none',backgroundColor:'rgb(175, 105, 35)' }} closeButton >
                            <a href='/'>    	<img
							className="logo_header"
							style={{ width: '150px', height: '30px', marginLeft:'50px'}}
							src={process.env.PUBLIC_URL + '/Asset/images/Logo1.png'}
							alt="Logo"
						/></a>
                        </ModalHeader>
        <Modal.Body> 
        <div className="col-md-12 m-auto text-center">
           <Form className="form-signin" onSubmit={handleLogin} ref={form}>
             <h4 className="text-center text-uppercase"> Đăng Nhập</h4>
          <div className="form-group">

            <Input
              type="text"
            	className="form-control input-dangnhap-dangky"
              name="username"
              value={username}
              placeholder="Tên đăng nhập"
              onChange={onChangeUsername}
              validations={[required]}
            
            />
              <i class="fa fa-user" id="input_img_username" aria-hidden="true" />
          </div>

          <div className="form-group">
            <Input
              type="password"
            	className="form-control input-dangnhap-dangky"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Mật Khẩu"
           
            />
               <i class="fa fa-lock" id="input_img_password" aria-hidden="true" />
          </div>
          <p className="text-center text-right float-right " >
                  <Link to="/forgotpassword" className="link_forgot" onClick={handleClose}>Quên mật khẩu</Link>
								</p>
                <br></br>
                <br></br>
                <div className="form-group text-center">
												<button 
													className="form-submit-button"
													disabled={loading}
												>
													{loading && (
														<span className="spinner-border spinner-border-sm text-danger" />
													)}
													<span>Đăng Nhập</span>
												</button>
											</div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
