import React, { useState, useContext, useEffect } from 'react';
import listContext from '../../ContextConfig';
import Data from '../../components/Axios/Service';
import { useParams, withRouter } from 'react-router-dom';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import NumberFormat from 'react-number-format';
import toast, { Toaster } from "react-hot-toast";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  "./Product.css";

const ProductDetail = props => {
    const initialTutorial = {
        id: '',
        name: '',
        image: '',
        price: '',
        categories: {
            id: ''
        }
    };  
    const [currentTutorial, setProduct] = useState(initialTutorial);
    const getTutorial = id => {
        Data.get(id)
            .then((response) => {
                setProduct(response.data);
                console.log(response.data)
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(
        () => {
            getTutorial(props.match.params.id);
        }, [props.match.params.id]
    );
    const [product, setProductItem] =useState([]);
    useEffect(() => {
        Data.getAll().then((res) => {
            setProductItem(res.data);
            console.log(res.data)
        });
    }, []);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
//   const settings = {
//     // dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3400
//   };

    const ListProduct = product.map((itemproduct, index) => {
        if (itemproduct.categories.id === currentTutorial.categories.id) {
            return (
                <div key={index} className="card-product ml-3">
                    <img
                        src={itemproduct.image}
                        alt={itemproduct.name}
                        style={{ width: '100%', paddingTop: '20px' }}
                    />
                    <div className="card-body">
                        <h6 className="product_item pl-2 ml-0 text-uppercase">{itemproduct.name}</h6>
                        <p className="pl-2 price_product"><NumberFormat value={itemproduct.price} displayType={'text'} thousandSeparator={true} suffix={" đ"} /> </p>
                        <AddProduct product={itemproduct} />&nbsp;
						</div>
                </div>
         
            );
        }
        else {
            return <></>;
        } 
    });
    return (
        <div>
            <div>
            <img src={process.env.PUBLIC_URL + '/Asset/images/Hinh_Banner03.jpg'} style={{ width: '100%', height: 350 }} alt="Image1" />
            </div>
            <div className="container">
                {currentTutorial ? (
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 className="ml-4 mt-4 font-weight-bold">{currentTutorial.name}</h4>
                        <div className="row">
                            <div
                                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                                style={{
                                    background: 'white'
                                }}
                            >
                                <img
                                    src={currentTutorial.image}
                                    alt={currentTutorial.name}
                                    style={{ width: '100%', height: '90%', paddingTop: '20px' }}
                                />
                                <br />
                            </div>
                            <div
                                className="col-lg-6 col-md-6 col-sm-6 col-xs-6 "
                                style={{
                                    background: 'white'
                                }}
                            >
                                <h3 className="text-center text-uppercase name_detail font-weight-bold" >{currentTutorial.name}</h3>
                                <p className="price_detail" name="price"><NumberFormat value={currentTutorial.price} displayType={'text'} thousandSeparator={true} suffix={" Đ"} /></p>
                                <div className="pt-2">
                                    <AddProductDetail  product={currentTutorial} />
                                </div>
                                <p className="hotro mt-4">Hỗ trợ đặt hàng gọi:1900 1688</p>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div>
                        <br />
                        <p>Vui Long chọn lại sản phẩm</p>
                    </div>
                )}
            </div>
            <div className="text-center text-uppercase">
                <h4 className="mt-4 font-weight-bold">Có thể bạn Thích</h4>
                <div className="container">
                    <Carousel responsive={responsive}>
                    {ListProduct}
                    </Carousel> 
</div>
                </div>
            </div>

    );
}

function AddProduct(props) {
    const stt = useContext(listContext);
    return (
        <button className="add-to-cart btn-sm button_cart" onClick={() => stt.addProduct(props.product)}>
            Mua Hàng
        </button>
    );
}
function AddProductDetail(props) {
    const stt = useContext(listContext);
    return (
        <>
        <button className="add-to-cart btn-sm button_cart button_detail" onClick={() => stt.addProduct(props.product)}>
            Mua Hàng
        </button>
        <Toaster />
        </>
    );
}
export default ProductDetail;
