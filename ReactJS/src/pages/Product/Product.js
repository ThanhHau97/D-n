import React, { useEffect, useContext,useState } from 'react';
import listContext from '../../ContextConfig';
import Scrollspy from 'react-scrollspy';
import axiosInstance from '../../components/Axios/Service';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useHistory} from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import Search from './SearchProduct';
import './Product.css'
function List(props) {
	const initialproducttate = {
		id: '',
		name: '',
		image: '',
		price: '',
		status: '',
		categories: {
			id: ''
		}
	};
	const [list, setList] = useState([]);
	const [product, setProduct] = useState([]);
	const [ search, setsearch ] = useState(initialproducttate);
	const history = useHistory();
	useEffect(() => {
		axiosInstance.getType().then((res) => {
			setList(res.data);
			console.log(res.data)
		});
	}, []);

	useEffect(() => {
		axiosInstance.getAll().then((res) => {
			setProduct(res.data);
			console.log(res.data)
		});
	}, []);
	const ListType = list.map((item, index) => {
		return (
			<div key={index} >
				<li className="title_menu">
					<a className="menu_scroll_link active text-uppercase" href={"#" + item.id}>
						{item.type}
					</a>
				</li></div>
				
		);
		
	});
	const indexCategory=[];

	const ListID = list.map((item, index) => {
		indexCategory.push(item.id);
		return (
			<div key={index} >
						{item.id}
				</div>
		);
	});


	const TypeContent = list.map((itemtype, index) => {
		const ListProduct = product.map((itemproduct, index) => {
			if (itemproduct.categories.id === itemtype.id) {
				return (
					<div key={index} className="card-product ml-3">
						<Link to={"/product/" + itemproduct.id}>
						<img
							src={itemproduct.image}
							alt={itemproduct.name}
							style={{ width: '100%', paddingTop: '20px' }}
						/>
						</Link>
						
						<div className="card-body">
							<h6 className="product_item pl-2 ml-0 text-uppercase">{itemproduct.name}</h6>
							<p className="pl-2 price_product"><NumberFormat value={itemproduct.price} displayType={'text'} thousandSeparator={true} suffix={" đ"} />  </p>
							<AddProduct pd={itemproduct} />&nbsp;
						</div>
					</div>
				);
			}
			else return (<></>);
		});
		return (
			<section >
				<div className="Vector">&nbsp;</div>
				<button
					id={itemtype.id}
					className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text-uppercase pl-4 button_product_div"
				>
					{itemtype.type}
				</button>
				<div className="row">{ListProduct}</div>
			</section>
		);
	});




	return (
		<div className="bg_product"> 
			<div>
				<img src={process.env.PUBLIC_URL + './Asset/images/Hinh_Banner03.jpg'} style={{ width: '100%', height: 350 }} alt="Image1" />
			</div>
			<div className="container bg_product" >
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 list_menu">
					<form className="">
						<label className="float-left">Tìm Kiếm: </label>
						{/* <input type="text" className="form-control" onChange={(event) => handleSearch(event)} /> */}
						<Search/>
						</form>
						
						<Scrollspy className="scroll_spy"
							items={indexCategory}
							currentClassName="is-current"
							offset={200}
							style={{
								position: 'sticky',
								top: 100,
							}}
						>
							{ListType}
						</Scrollspy>
					</div>
					<div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 list_sp">
				
						{TypeContent}
					</div>
			
				</div>
			</div>
		</div>
	);
}
// Tạo nút thêm mới sản phẩm vào giở hàng sử dung dữ liệu dừ Context
function AddProduct(props) {
	const stt = useContext(listContext);
	return (
		<>
		
	<button className="add-to-cart btn-sm button_cart"  onClick={() => stt.addProduct(props.pd)}>
			Mua Hàng
		</button>
		<Toaster />
		</>
	);
}

export default List;
