import React from 'react';
import './About.css';
export default function About() {
    return (
        <div className="container">
            <button type="button" className="btn_about mb-3">Giới Thiệu</button>
                <div className="Store_all ml-3 mr-3">
                    <div className="store_content">
                        <h5 className="title_store text-center">COFFEE SƠN</h5>
                        <p className="content_store ml-4">Với những nghệ nhân rang tâm huyết và đội ngũ Coffee Sơn tài năng cùng những câu chuyện cà phê đầy cảm hứng, ngôi nhà 13 Đường số 7, phường Linh Chiểu,TP.Thủ Đức, Thành Phố Hồ Chí Minh là không gian dành riêng cho những ai trót yêu say đắm hương vị của những
                            hạt cà phê tuyệt hảo.</p>
                    </div>
                    <div className="store_image text-center">
                    <img
							src={process.env.PUBLIC_URL + 'Asset/images/LogoMain.png'}
							alt="Giới Thiệu"
						/>
                    </div>
                </div>
        </div>
    )
}
