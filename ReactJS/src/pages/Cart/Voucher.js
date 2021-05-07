import React,{useEffect, useState} from 'react'
import Voucher from '../../components/Axios/Service'
import './Voucher.css'
export default function EVoucher() {
    useEffect(() => {
		GetVoucher();
	}, []);
    const [voucher,setVoucher]=useState([]);
	const GetVoucher = () => {
		//Load sản phẩm từ api Product và sử dung useEffect để quản lí vòng đời
		Voucher.getVoucher()
			.then((response) => {
				setVoucher(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}
    function handleInputChange(evt) {
		const value = evt.target.value;
		setVoucher({
			...voucher,
			[evt.target.name]: value,
		});
	}
    const EVoucher =voucher.map((item,index)=>{
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
                <input type="checkbox" className='voucher-checkbox' id='vouchercheck1' name='vouchercheck'
                 onClick={() => handleInputChange(item.price)} />
                <label htmlFor='vouchercheck1' class='label-sizenho'></label>
            </div>
        </div>
        )
    })
    return (
        <div>

<a type="button" name="chonmakhuyenmai" id="chonmakhuyenmai_div" data-toggle="modal" data-target="#exampleModall">
  Chọn Mã Khuyến Mãi
</a>


<div className="modal fade" id="exampleModall"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <div className='row'>
                    <div className='col-md-8'>
                        <h5>Chọn E-Wallet Voucher</h5>
                    </div>
                </div>
                <div className='voucher-scroll'>
                {EVoucher}
                </div>
      </div>
      <div class="modal-footer">
           <a type='button' className='voucher-cancel-button close' data-dismiss="modal" aria-label="Close">TRỞ LẠI</a>
                <a type='button' className='voucher-ok-button'>OK</a>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
