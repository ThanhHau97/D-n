import React,{useEffect,useContext} from 'react'
import axiosInstance from '../../components/Axios/Service';
import listContext from '../../ContextConfig';
import NumberFormat from 'react-number-format';
import toast, { Toaster } from "react-hot-toast";
import './FlashSale.css'
export default function FlashSale() {
    const [list, setList] = React.useState([]);
	useEffect(() => {
		axiosInstance.getAll().then((res) => {
			setList(res.data);
			console.log(res.data)
		});
	}, []);
	
	const ListSale = list.slice(0,8).map((item, index) => {
        if(item.status===1){
		return (
            <div key={index} className="card_product" >
            <div className="card_highlight_div ml-3">
                <div className="card-body">
                <img
                           	src={item.image}
                                alt={item.name}
                                style={{ width: '100%', height: '240px', paddingTop: '10px' }}
                            />
                    <h6 className="product mt-2 pl-2 ml-0 text-uppercase">{item.name}</h6>
                    <div className="star-rating">
                        <ul className="list-inline pl-2">
                            <li className="list-inline-item">
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li className="list-inline-item">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li className="list-inline-item">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li className="list-inline-item">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li className="list-inline-item">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <p className="pl-2 price"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} suffix={" đ"} /></p>
                    <div className="reveal">  <AddProduct pd={item} />  </div>  
                </div>  
            </div>
        </div>
        
		);
	}else{
        <></>
    }});
    return (
        <div className="container">
            	<button className="btn_Falshsale mb-3 ml-2 text-uppercase mt-4">Nổi Bật</button>
               <div className="row">{ListSale}</div> 	
        </div>
    )
}
// Tạo nút thêm mới sản phẩm vào giở hàng sử dung dữ liệu dừ Context
function AddProduct(props) {
	const stt = useContext(listContext);
	return (
        <>
		<button className="add_to_cart" onClick={() => stt.addProduct(props.pd)}>
			<i class="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp;Mua Hàng
		</button>
        	<Toaster position="top-right" className="nofitication"
             reverseOrder={false} />
            </>
	);
}
