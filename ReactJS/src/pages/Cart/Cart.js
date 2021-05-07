import React, { useContext, useEffect, useState,useRef } from 'react';
import './Voucher.css';
import listContext from '../../ContextConfig'
import Data from '../../components/Axios/Service';
import SearchBar from './SearchBar';
import AuthService from "../../Services/AuthService";
import AuthCart from "../../Context";
import { Modal } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { isEmpty } from 'validator';
// import CheckButton from 'react-validation/build/button';
export default function Cart(props) {
	//Order
	const ordercart =  {
			payment: 1,
		   customers: {
			   id: ""
			   },
		   vouchers: null,
		   orders_Detail: [
			   {         
				   amount: "",
				   sizes: {
					   id: ""             
				   },
				   products: {
					   id: ""               
				   }
			   }
		   ],
		   ship_Info:{
            name_cus: "",
            address: "",
            phone_cus: "",
            note: "",
            price: 15000.0
		   }
	   
    }
	const initialproducttate = {
		name: "",
		phone: "",
		picture: "",
		birthday: "",
		gender: "",
	  };
	const { cart, updateSize } = useContext(listContext);
	const [size, setSize] = React.useState([]);
	// const [thanhtoan, setthanhtoan] = React.useState([cart]);
	const [state, setState] = React.useState([cart]);
	const [Order, setOrder] = useState(ordercart);
	const [ShipInfo, setShipInfo] = useState([]);
	const [Name, setName] = useState('');
	const [Phone, setPhone] = useState('');
	const [Address, setAddress] = useState('');
	const [Note, setNote] = useState('');
	const [Notification, setNotification] = useState([]);
	let [ShipFee] = useState(0);
	// const [idOrderShip, setidOrderShip] = useState([]);
	//Profile
	const currentUser = AuthService.getProfile();
// if(currentUser){
// 		 	setName(currentUser.name)
// 	 	setPhone(currentUser.phone)
// }
useEffect(() => {
	const currentUser = AuthService.getProfile();

    if (currentUser) {
		setName(currentUser.name)
		setPhone(currentUser.phone)
    }
  }, []);
	//  useEffect(()=>{
	// 	setName(currentUser.name)
	// 	setPhone(currentUser.phone)
	// },[])
	// Check thanh Toán
	const CheckUser = AuthService.getCurrentUser();
    
	//Voucher
	const [vouchers,setVouchers]=useState([]);
	const [voucher,setVoucher]=useState([]);
	const [indexvoucher, setindexVoucher] = useState(0);
	const required = (value) => {
		if (isEmpty(value)) {
			return <small className="form-text text-danger">Không được bỏ trống</small>;
		}
	  }
	  const minLength = (value) => {
		if (value.trim().length <0 && value.trim().length >10) {
			return <small className="form-text text-danger">Nhập sai số điện thoại</small>;
		}
	  }
	useEffect(() => {
		getSize();
		GetVoucher()
	}, []);
	const getSize = () => {
		Data.getSize().then((res) => {
			setSize(res.data);
			console.log(res.data)
		})
			  .catch((e) => {
				  console.log(e);
			  });
	  };
	  
	  //Set HandInputChange order
	function handleInputChange(value, index, size,idsize) {
		updateSize(value, index, size, idsize);
	}
	//Voucher

	const GetVoucher = () => {
		Data.getVoucher()
			.then((response) => {
				setVouchers(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}
    function handleVoucherChange(index,value) {
		setindexVoucher(index)
	}

	function handleChangeName(evt) {
		const value = evt.target.value;
		setName(
			value
		);
	}
	
	function handleChangePhone(evt) {
		const value = evt.target.value;
		setPhone(
			value
		);
	}
	function handleChangeAddress(evt) {
		const value = evt.target.value;
		setAddress(
			value
		);
	}
	function handleChangeNote(evt) {
		const value = evt.target.value;
		setNote(
			value
		);
	}
	// function handleChangeorder(evt) {
	// 	const value = evt.target.value;
	// 	setOrder({
	// 		...order,
	// 		value
	// 	});
	// }
	const EVoucher =vouchers.map((item,index)=>{
        return(
            <div className='row voucher'>
            {/* Sản phẩm chi tiết */}
            <div className='col-md-3 text-center voucher-tieude'>
                <p>MIỄN PHÍ VẬN CHUYỂN</p>
            </div>
            <div className='col-md-7 voucher-noidung'>
                <p>Tất cả các hình thức thanh toán</p>
                <p>Số lượng: {item.quanity}</p>
                <p>Ngày hết hạn:{item.end_time}</p>
                <p>Giá:{item.value}</p>
            </div>
            <div className='col-md-2 text-center voucher-checkbox-div'>
                <input type="radio" className='voucher-checkbox' id={"voucher"+index} name="voucher"
                 onClick={()=>handleVoucherChange(index,item.value)} />
                <label htmlFor={"voucher"+index} class='label-sizenho'></label>
            </div>
        </div>
        )
    })
	//Order
	const order = cart.map((item, index) => {
		const Size = size.map((itemsize, i) => {		
				return(
				<div className="col-md-2">
					<input
						type="radio"
						className="radio-size"
						name={'size' + index}
						id={index + 'size' + i} defaultChecked={itemsize.id === item.sizes.id} defaultValue={itemsize.price}
						onClick={() => handleInputChange(itemsize.price, index, itemsize.type ,itemsize.id)}
					/>
					<label htmlFor={index + 'size' + i} class="label-sizenho">
						{itemsize.type}
					</label>
				</div>
			);
		});
		return (
			<div className="row sanpham-giohang">
				{/* Sản phẩm chi tiết */}
				<div className="col-md-3 text-center" key={index}>
					<img
						alt={item.products.name}
						src={item.products.image}
						id="giohang-hinhsanpham"
					/>
				</div>
				<div className="col-md-9">
					<div className="row" style={{ paddingTop: '10px',marginLeft:10 }}>
						<h5>{item.products.name}</h5>
					</div>
					<div className="form-group row ml-2" id="giohang-size">
						SIZE:
						{Size}

					</div>
					{/* <div className="row">
						<input className="form-control" placeholder="Ghi chú" id="giohang-ghichu" />
					</div> */}
					<br />
					<div className="amout row">
						<label className="ml-3">Số Lượng:</label>
						<a className="btn-soluong-tru pl-4" href="##%">
							<Decrement pd={index} />
						</a>
						<input id="amout-bag" value={item.amount} />
						<a className="btn-soluong-cong" href="##">
							<Increment pd={index} />
						</a>
					</div>
					<br />
				</div>
			</div>
		)	
	});
	//Show Cart trống
	const cartNull=() =>{
		return(
			<div className="container">
			<p className="text-center mt-4"><img
							src={process.env.PUBLIC_URL + '/Asset/images/carts.png'}
							style={{ width: '50px',height: '50px' }}
						/></p>
		<h6 className="text-center">
		
			Chưa có sản phẩm trong giỏ hàng của bạn</h6>
	</div>
		)	
		
	}

	const cartlist = cart.map((itemCart, index) => {
		const asize = size.slice(0, 1).map((itemsize, index1) => {
			return (
				<tr key={index} style={{verticalAlign:'middle'}}>
					<td style={{fontSize:'12px',fontWeight:'bold'}} width="250px">{itemCart.products.name}</td>
					<td  style={{verticalAlign:'middle'}}>{'x' + itemCart.amount}</td>
					<td  style={{verticalAlign:'middle'}}>{itemsize.type}</td>
					<td  style={{verticalAlign:'middle'}}><NumberFormat value={itemCart.products.price} displayType={'text'} thousandSeparator={true} /></td>
					<td  style={{verticalAlign:'middle'}}>{<Removebutton product={itemCart} />}</td>
				</tr>
			);
		});

		if (!itemCart.sizes.prices > 0) {
			return (
				<>{asize}</>
			)
		} else {
			return (
				<tr key={index}>
					<td>{itemCart.products.name}</td>
					<td>{'x' + itemCart.amount}</td>
					<td>{itemCart.sizes.types}</td>
					<td>{itemCart.products.price * itemCart.sizes.prices}</td>
					<td>{<Removebutton product={itemCart} />}</td>
				</tr>
			);
		}
	});
// Thanh Toán
	function saveOrder() {
		console.log(cartlist)
		if(CheckUser===null){
			handleMessageShow();
		}else if(!cartlist.length>0){
			handleNuLLSPShow();
		}
			else if(Order===""){
				handleNuLLFieldShow()
		}else
			{
			var data =  {
				payment: 1,
				customers: {
					id: currentUser.id,
					name:currentUser.name,
					phone:currentUser.phone
					},
				vouchers: (voucher.length<1)?null:{id:voucher.id},
				orders_Detail: cart,
				ship_Info:{
				 name_cus: Name,
				   address: Address,
				   phone_cus:Phone,
				   note: Note,
				    price: 15000,
				}
			}
			// console.log(data)
			Data.createOrder(data)
				.then((response) => {
					handleShow();
					localStorage.removeItem('cart');
					setNotification(response.data)
					window.location.reload();
					console.log(response.data)
				})
				.catch((e) => {
				console.log(e)
				});
		}
	};
// set vourcher
		  function selectVoucher() {
			setVoucher(vouchers[indexvoucher]);
		};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  //   Load Page
	const ReloadPage = () => {
	  handleClose();
	  };
	  //Modal lỗi thanh toán
	  const [showmes, setShowmes] = useState(false);
		  const handleMessageClose = () => setShowmes(false);
		  const handleMessageShow = () => setShowmes(true);
		  	  //Modal lỗi thanh toán
	  const [showNuLLSP, setShowNuLLSP] = useState(false);
	  const handleNuLLSPClose = () => setShowNuLLSP(false);
	  const handleNuLLSPShow = () => setShowNuLLSP(true);
	  		  	  //Modal lỗi trường
					  const [showNuLLField, setShowNuLLField] = useState(false);
					  const handleNuLLFieldClose = () => setShowNuLLField(false);
					  const handleNuLLFieldShow = () => setShowNuLLField(true);
	return (
		<div>
			<img
				src={process.env.PUBLIC_URL + './Asset/images/Hinh_Banner03.jpg'}
				style={{ width: '100%', height: 350 }}
				alt="Image1"
			/>

			<div className="container">
				{/* div tổng của xác nhận thông tin với giỏ hàng */}
				<div className="row mt-5 mb-5">
					{/* div tổng bên trái */}
					<div className="col-md-8 pr-5">				
	  <SearchBar/>    
				{/* div scroll bar sản phẩm chi tiết */}

						<div className="sanpham-giohang-scroll">{(cart.length>0)?order:cartNull()}</div>

						{/* div tổng của xác nhận thông tin đơn hàng */}
						<div className="row" id="divxacnhan">
							<div className="col-md-12">
								<div className="sanpham-giohang-hr">
									<h3>Xác nhận thông tin đơn hàng</h3>
								</div>
								<form>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											id="diachi"
											name="address"
											placeholder="Địa chỉ giao hàng"
											onChange={handleChangeAddress}
											validations={[required]}
										/>
									</div>
									<div className="form-group row">
										<div className="col-md-6">
											<input
												type="text"
												className="form-control"
												id="hoten"
												name="name_cus"
												placeholder="Họ tên"
												value={Name}
												onChange={handleChangeName}
												validations={[required]}
											/>
										</div>
										<div className="col-md-6">
											<input
												type="text"
												className="form-control"
												name="phone_cus"
												id="sodienthoai"
												placeholder="Số điện thoại"
												value={Phone}
												onChange={handleChangePhone}
												validations={[required,minLength]}
											/>
										</div>
									</div>
									<div className="form-group">
										<input type="text"
										 className="form-control" 
										id="ghichu" 
										name="note"
										onChange={handleChangeNote} placeholder="Ghi chú" />
									</div>
							
								</form>
								<div className="sanpham-giohang-hr">
									<h3>Phương thức thanh toán</h3>
								</div>
								<div className="form-group row">
									<div className="col-md-6">
										<input
											type="radio"
											className="radio-phuongthucthanhtoan"
											name="phuongthucthanhtoan"
											id="thanhtoankhinhanhang"
											defaultChecked
										/>
										<img
											src={process.env.PUBLIC_URL + '/Asset/icon/cash-payment.png'}
											className="img_phuongthucthanhtoan"
											alt="Icon"
										/>
										<label htmlFor="thanhtoankhinhanhang">Thanh toán khi nhận hàng</label>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4 text-center" id="divthanhtoan">
						<div className="sanpham-giohang-hr">
							<h3>Giỏ hàng</h3>
						</div>
						<div className="divtablegiohang">
							<table class="table table-striped">
								<thead>
									<tr>
										<th>Tên</th>
										<th width="90px">Số lượng</th>
										<th width="90px">Size</th>
										<th>Giá</th>
										<th>Hủy</th>
									</tr>
								</thead>
								<tbody>{cartlist}</tbody>
							</table>
						</div>
						<div className="sanpham-giohang-hr" />
						<div className="row">
							<div className="col-md-4 text-left">
								<p>Tạm tính</p>
							</div>
							<div className="col-md-4">
								<p>{cart.reduce((sum, i) => (sum += i.amount), 0)}
								</p>
							</div>
							<div className="col-md-4 text-right">
								<p><NumberFormat value={cart.reduce((sum, i) =>
								(!i.sizes.prices > 0)?(sum += i.amount*i.products.price):(sum += i.amount * (i.products.price * i.sizes.prices)), 0)} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></p>
							</div>
						</div>

						<div className="row text-center">
							<div className="col-md-4 text-left">
								<p>Mã khuyến mãi</p>
							</div>
							<div className="col-md-8" >
							<a type="button" name="chonmakhuyenmai" id="chonmakhuyenmai_div" data-toggle="modal" data-target="#exampleModall">
  Chọn Mã Khuyến Mãi
</a>
							</div>
						</div>

						<div className="row text-center">
							<div className="col-md-4 text-left">
								<p>Phí vận chuyển</p>
							</div>
							<div className="col-md-4" />
							<div className="col-md-4 text-right">
								<p><NumberFormat value={(!cart.length>0)?ShipFee=0:ShipFee=15000} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></p>
							</div>
						</div>

						<div className="row text-center">
							<div className="col-md-4 text-left">
								<p>Khuyến mãi</p>
							</div>
							<div className="col-md-4" />
				
							<div className="col-md-4 text-right">
							<p className="khuyenmai"><NumberFormat value={voucher.value!==undefined?voucher.value:0} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></p>
				
							</div>
						</div>

						<div className="row text-center">
							<div className="col-md-4 text-left">
								<p>Tổng</p>
							</div>
							<div className="col-md-4" />
							<div className="col-md-4 text-right">
								<p className="tongtien"> 
									<NumberFormat value={(voucher.value!==undefined)?cart.reduce((sum, i) =>
								(!i.sizes.prices > 0)?(sum += i.amount*i.products.price):(sum += i.amount * (i.products.price * i.sizes.prices)), 0)+ShipFee - voucher.value:
								cart.reduce((sum, i) =>
								(!i.sizes.prices > 0)?(sum += i.amount*i.products.price):(sum += i.amount * (i.products.price * i.sizes.prices)), 0)+ShipFee}
										displayType={'text'} thousandSeparator={true} suffix={' đ'} /></p>
							</div>
						</div>
						
						<button className="btn btn-default" id="thanhtoan" type="button" onClick={saveOrder}>
							Thanh toán
						</button>
						{/* <CheckButton style={{ display: "none" }}  /> */}

						{
						(Notification[0])?
						<Modal dialogClassName="messmodal" show={show} onHide={handleClose}>   
				<div className="icon-box">
			<i class="fa fa-check" aria-hidden="true"></i>
				</div>
				<Modal.Body>
					<p className="text-center mt-4">{Notification[1]}</p>
				</Modal.Body>
				<button className="btn btn-success btn-block" type="button" onClick={ReloadPage}> 
				OK
			</button>				
			</Modal>
			:
			<Modal dialogClassName="messmodal" show={show} onHide={handleClose}>   
			<div className="icon-boxx">
		<i class="fa fa-times" aria-hidden="true"></i>
			</div>
			<Modal.Body>
				<p className="text-center mt-4">{Notification[1]}</p>
			</Modal.Body>
			<button className="btn btn-danger btn-block" type="button" onClick={ReloadPage}> 
			OK
		</button>				
		</Modal>
						}

						
			<div className="modal fade" id="exampleModall"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <div className='row'>
                    <div className='col-md-6'>
                        <h5>Chọn E-Wallet Voucher</h5>
                    </div>
                </div>
                <div className='voucher-scroll'>
                {EVoucher}
                </div>
      </div>
      <div class="modal-footer">
           <a type='button' className='voucher-cancel-button close' data-dismiss="modal" aria-label="Close">TRỞ LẠI</a>
                <a type='button' className='voucher-ok-button' data-dismiss="modal" aria-label="Close" onClick={selectVoucher}>OK</a>
      </div>
    </div>
  </div>
</div>
					</div>
				</div>
			</div>
			<Modal dialogClassName="messmodal" show={showmes} onHide={handleMessageClose}>
			<div className="icon-boxx">
			<i className="fa fa-times" aria-hidden="true"></i>
				</div>	
				<p className="text-center caption">Đăng nhập để thanh toán</p>
 <button className="btn btn-danger btn-sm btn-block" type="button" onClick={handleMessageClose}>OK</button>
			</Modal>
			<Modal dialogClassName="messmodal" show={showNuLLSP} onHide={handleNuLLSPClose}>
					<div className="icon-boxx">
					<i className="fa fa-times" aria-hidden="true"></i>
						</div>	
						<p className="text-center caption">Chưa có sản phẩm trong giỏ hàng</p>
		 <button className="btn btn-danger btn-sm btn-block" type="button" onClick={handleNuLLSPClose}>OK</button>
					</Modal>
					<Modal dialogClassName="messmodal" show={showNuLLField} onHide={handleNuLLFieldClose}>
					<div className="icon-boxx">
					<i className="fa fa-times" aria-hidden="true"></i>
						</div>	
						<p className="text-center caption">Chưa nhập thông tin giao hàng</p>
		 <button className="btn btn-danger btn-sm btn-block" type="button" onClick={handleNuLLFieldClose}>OK</button>
					</Modal>
		</div>
	
		
	);
}
function Increment(props) {
	const stt = useContext(listContext);
	return (
		<a href="###" className="btn-soluong-cong" onClick={() => stt.increment(props.pd)}>
			<div>+</div>
		</a>
	);
}
function Decrement(props) {
	const stt = useContext(listContext);
	return (
		<a href="##" className="btn-soluong-tru" onClick={() => stt.decrement(props.pd)}>
			<div>-</div>
		</a>
	);
}

function Removebutton(props) {
	const state = useContext(listContext);
	return (
		<button type="button" onClick={() => state.removeProduct(state.cart.indexOf(props.product))}>
			X
		</button>
	);
}

