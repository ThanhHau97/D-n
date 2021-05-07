import url from './AxiosConfig';
// ----------------------PRODUCT-----------------------
//Lấy dữ liệu toàn sản phẩm
const getAll = () => {
  return url.get("/all/product/true");
};

//Tìm sản phẩm theo tên sản phẩm
const get = (id, data) => {
  return url.get(`/all/product/${id}`,data);
};
// ----------------------CUSTOMER-----------------------
//Lấy dữ liệu khách Hàng
const getCustomer = ()=> {
  return url.get(`/account/cus`);
};
const UpdateCustomer = (id,data)=> {
  return url.put(`user/account/${id}`,data);
};
// ----------------------TYPE-----------------------
//Lấy dữ liệu Loại
const getType= ()=> {
  return url.get(`/all/category`);
};

const getSize = () => {
  return url.get("/all/size");
};
// ----------------------ORDER-----------------------
//Tạo order
const createOrder = (data) => {
	return url.post('/user/order', data);
};
const GetOrder = (data) => {
	return url.post('/user/order', data);
};
const GetOrderXuly = (id_cus) => {
	return url.get(`/user/order?id_cus=${id_cus}`);
};
// ----------------------ORDER STATUS-----------------------
//Tạo order
const GetOrderStatus = () => {
	return url.get('/user/order_status');
};
const DeleteOrder = (id) =>{
  return url.get(`/user/order_status/fail?id=${id}`);
}
// ----------------------Ship Info-----------------------
//Tạo order
const GetShipInfo = (data) => {
	return url.post('/user/ship',data);
};
//------------STORE--------------
const getStore = () => {
	return url.get('/all/store');
};
//------------Voucher--------------
const getVoucher = () => {
	return url.get('/user/voucher');
};
//------------ACCOUNT--------------
const getProfile = (username) => {
	return url.get(`user/account/searchAccountByUsername/${username}`);
};

export default {
  getAll,
  get,
  getType,
  getCustomer,
  getSize,createOrder,
  getStore,
  getProfile,
  UpdateCustomer,
  GetOrderStatus,
  GetShipInfo,
  GetOrder,
  getVoucher,
  GetOrderXuly,
  DeleteOrder

};