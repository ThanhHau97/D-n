import React, { useEffect, useState } from 'react'
import DataOrderStatus from '../../components/Axios/Service'
import AuthService from '../../Services/AuthService';
import { Modal } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import './Order_Success.css'
const OrderStatus=()=> {
	// 
	useEffect(() => {
		getUser()
	}, []);
	const [Order, setOrder] = useState([]);
	const [currentUser, setCurrentUser] = useState(undefined);
	const [UserInfo, setUserInfo] = useState('');
	const [detailOrder, setDetailOrder] = useState([]);
	let orderByindex = -1;
// 
	const getUser = () => {
		const user = AuthService.getProfile();
		DataOrderStatus.GetOrderXuly(user.id)
		.then((response) => {
			setOrder(response.data);
			console.log(response.data);
		})
		.catch((e) => {
			console.log(e);
		});
	};

	// 
	const OrderXuly = Order.map((item, index) => {
			if(item.order_Status.status===2){
				return (
					<div className="card mb-4 card-div ">
						<div className="col-md-12 row">
							<div className="col-md-12">
							ID:{item.id}
								<p className="text-product mt-4">Ngày tạo:{item.date_created}</p>
								<p className="text-product">
									Phương thức thanh toán: {item.payment}
								</p>
								<button className="btn_order_status outfix" type="button" onClick={() => setActiveTutorial(item.id)}> Chi tiết</button>
							</div>
						</div>
					</div>
				)
			}	
			
	})
	let sum =0;
	const menuItems = Order.map((item,i) => {
		const subMenuItems = item.orders_Detail.map((subItem, index) => {
			if (item.id === detailOrder) {
				sum +=subItem.products.price * subItem.amount;
				orderByindex = i;
				console.log(sum)
				return (
					<>
					<tr key={index}>
							<td>{subItem.products.name}</td>
							<td>{subItem.sizes.type}</td>
							<td>{subItem.amount}</td>
							<td><NumberFormat style={{ background: 'none', border: 'none' }} value={subItem.products.price} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'} /></td>
							<td>{subItem.products.categories.type}</td>
							<td><NumberFormat style={{ background: 'none', border: 'none' }} value={subItem.products.price * subItem.amount} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'} /></td>
						</tr>
								</>
				);
			} else
				return (<></>);
		});

		return (
			<>{subMenuItems}</>
		);
	});
	const [show, setShow] = useState(false);
	const handleCloseModal = () => setShow(false);
	const handleShowModal = () => setShow(true);
	const setActiveTutorial = (id) => {
		setDetailOrder(id);
		handleShowModal();
	};
const detailOrderStatus = () => {
	if (orderByindex > -1) {
		return(
		<>
			<h2 className="text-center">Hóa Đơn</h2>
			<div className="row mt-3 mb-2" >
				<div className="col-sm-4">
					<strong>Ngày tạo đơn:</strong> {Order[orderByindex].date_created}
				</div>
				<div className="col-sm-4">
					<strong>Tên khách hàng:</strong> {Order[orderByindex].ship_Info.name_cus}
				</div>
				<div className="col-sm-4">
					<strong>SĐT khách hàng:</strong> {Order[orderByindex].ship_Info.phone_cus}
				</div>
			</div>
			<div className="row  mt-2 mb-3" >
				<div className="col-sm-4">
					<strong>Địa chỉ KH:</strong> {Order[orderByindex].ship_Info.address}
				</div>
				<div className="col-sm-4">
					<strong>Voucher:</strong> {Order[orderByindex].vouchers!==null ?<NumberFormat style={{background:'none',border:'none'}} value={Order[orderByindex].vouchers.value} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'} />:"Không có"}
				</div>
				<div className="col-sm-4">
					<strong>Phí vận chuyển: </strong><NumberFormat style={{background:'none',border:'none'}} value={15000} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'} />
				</div>
				<div className="col-sm-4">
					
				</div>
				<div className="col-sm-4">
					
				</div>
				<div className='col-sm-4'>
									<strong>Tổng tiền: <NumberFormat style={{background:'none',border:'none'}} value={
									Order[orderByindex].vouchers!==null? sum +15000 - Number(Order[orderByindex].vouchers.value):sum +15000
								} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'} /></strong>
									</div>  
			</div>
		</>);
	};
};
	return (
		<div className="content_scroll">
			
			{OrderXuly}
						<Modal
							dialogClassName="dialogModalOrderStatus"
							show={show}
							onHide={handleCloseModal}
							keyboard={false}
						>
							<Modal.Body>
								<div className="container">
									{detailOrderStatus()}
									<table className="table table-hover text-center">
										<thead>
											<tr >
												<th>Sản Phẩm</th>
												<th>Size</th>
												<th>Số Lượng</th>
												<th>Giá</th>
												<th>Loại</th>
												<th>Thành Tiền</th>
											</tr>
										</thead>
										<tbody>
											{menuItems}
										</tbody>

									</table>
                                   
									{/* <hr></hr>
                                    <p className="text-bold-400 text-right"> <strong>Tạm Tính:</strong> {listItem.total}VNĐ</p>
                                       <p className="text-bold-400  text-right"> <strong>Thuế GTGT:</strong> {1000}VNĐ</p>
                                <hr></hr>
                                <p className="text-right"> <strong>Tổng cộng:</strong> {listItem.total-1000}VNĐ</p> */}
		
								</div>



							</Modal.Body>
						</Modal>
</div>

	)
}
export default OrderStatus;
