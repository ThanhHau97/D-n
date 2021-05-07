import React, { useEffect, useState } from "react";
import AuthService from "../../Services/AuthService";
import Data from "../../components/Axios/Service";
import { Modal } from 'react-bootstrap';
import './UserInfo.css'
const Profile = (props) => {
  const initialproducttate = {
    name: "",
    phone: "",
    picture: "",
    birthday: "",
    gender: "",
  };
  function genderOption() {
    if (UserInfo.gender == true) {
      return (
        <div className="form-group row ">
          <label className="col-sm-3 control-label">Giới Tính:</label>
          <div class="form-check form-check-inline ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="nam"
              value="true"
              checked
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="nam">
              Nam
                    </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="nu"
              value="false"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="nu">
              Nữ
                    </label>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form-group row ">
          <label className="col-sm-3 control-label">Giới Tính:</label>
          <div class="form-check form-check-inline ml-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="nam"
              value="true"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="nam">
              Nam
                    </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="nu"
              value="false"
              checked
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="nu">
              Nữ
                    </label>
          </div>
        </div>
      )
    }
  }
  useEffect(
    () => {
      getUser();
    }, []
  );
  const currentUser = AuthService.getProfile();
  const [UserInfo, setUserInfo] = useState(initialproducttate);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const getUser = () => {
    Data.getProfile(currentUser.username, currentUser)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  function handleInputChange(evt) {
    const value = evt.target.value;
    setUserInfo({
      ...UserInfo,
      [evt.target.name]: value
    });
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Thecoffeeson');
    setLoading(true);
    const res = await fetch('https://api.cloudinary.com/v1_1/minhchon/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

  function UpdateProfile() {
    // getBirthday();
    var data = {
      name: UserInfo.name,
      phone: UserInfo.phone,
      picture: image != '' ? image : UserInfo.picture,
      birthday: UserInfo.birthday,
      gender: UserInfo.gender
    };
    // console.log(birthday.birthday_day +"-"+birthday.birthday_month+"-"+birthday.birthday_year)
    console.log(data)
    Data.UpdateCustomer(UserInfo.id, data)
      .then((response) => {
        handleMessageShow()
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // Modal
	const [showmes, setShowmes] = useState(false);
	const handleMessageClose = () => setShowmes(false);
	const handleMessageShow = () => setShowmes(true);
	const ReloadPage = () => {
    handleMessageClose()
	};
  return (
    <div className="container"  style={{marginTop:'30px'}}>
      <h5>Cập nhật thông tin : {UserInfo.username}</h5>
      {UserInfo ? (
        <form>
          <div className="form-group row">
									<label className="col-sm-3 control-label">Hình Ảnh:</label>
									<div className="image-upload-wrap ml-2">
										<input
											className="file-upload-input"
											type="file"
											name="picture"
											onChange={uploadImage}
										/>
										<div class="drag-text" />
										{loading ? (
											<h6 className="spinner-border text-primary">
									
												<span class="sr-only">Loading...</span>
											</h6>
										) : (
                      <img
                      src={image !== '' ? image : UserInfo.picture}
                      alt={UserInfo.name}
                      style={{ width: '100%', height: '300px' , borderRadius: '60%' }}
                    />
										)}
									</div>
								</div>
          {/* Họ và Tên*/}
          <div className="form-group row">
            <label className="col-sm-3 control-label">Name:</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={UserInfo.name}
                onChange={handleInputChange}
                placeholder="Họ và tên"
                autoComplete='off'
                style={{backgroundColor:'white',color:'#001100'}}
              />
            </div>
          </div>
          <div className="form-group row ">
            <label className="col-sm-3 control-label">Ngày Sinh:</label>
            <div className="col-sm-9">
              <input
                type="date"
                className="form-control"
                id="birthday"
                name="birthday"
                value={UserInfo.birthday}
                onChange={handleInputChange}
                placeholder="Ngày Sinh"
                style={{backgroundColor:'white', color:'#001100'}}
              />
            </div>
          </div>
          {/* Giới Tinh*/}
          {genderOption()}
          {/* số điện thoại */}
          <div className="form-group row ">
            <label className="col-sm-3 control-label">Số Điện Thoại:</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={UserInfo.phone}
                onChange={handleInputChange}
                placeholder="Số Điện Thoại"
                style={{backgroundColor:'white', color:'#001100'}}
              />
            </div>
          </div>
          <div className="container  mt-4" style={{marginLeft:'270px'}}>
            <button type="submit" className="btn btn-sm btn-danger" onClick={UpdateProfile}>Cập Nhật</button>
          </div>

        </form>

      ) : (
        <></>
      )}
      		<Modal dialogClassName="messmodal" show={showmes} onHide={handleMessageClose}>
			<div className="icon-box">
					<i className="ft-check text-center"></i>
				</div>	
				<Modal.Body>
				<p className="text-center mt-4">Thêm Thành Công</p>
			</Modal.Body>
            <button className="btn btn-success btn-block" type="button" onClick={ReloadPage}>OK</button>
			</Modal>
    </div>

  );
};

export default Profile;