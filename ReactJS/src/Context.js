import React, { useState, useEffect } from 'react';
import listContext from './ContextConfig';
import toast from 'react-hot-toast';
//tạo ra hàm context để chia sẽ dữ liệu
const sucessNotify = () => toast.success('Mua thành công!');
function Store({ children }) {
	//Khởi tạo biến state
	const initialState = {
		cart: JSON.parse(localStorage.getItem('cart')) || [],
		cartCount: 0,
		addProduct: addProduct,
		increment: increment,
		decrement: decrement,
		removeProduct: removeProduct,
		size: size,
		getCart: getCart,
		updateSize:updateSize
	};

	//Tạo state mới và setstate từ biến initialstate
	const [ appstate, setState ] = useState(initialState);
	// Tất cả các components được bọc bởi hàm List ở router
	return <listContext.Provider value={appstate}>{children}</listContext.Provider>;

	// Chức năng thêm mới sản phẩm và cập nhật số lượng sản phẩm trong giỏ hàng
	function addProduct(product) {
		let newList = appstate.cart;
		const newItem = {
			amount: 1,
			products: {
				id: product.id,
				name: product.name,
				price: product.price,
				image: product.image,
				categories: {
					type: product.categories.type
				}
			},
			sizes: {
				id: 1, //id
				prices: product.prices, //giá
				types: product.types //loại
			}
		};
		//nếu giỏ hàng có sản phẩm  thì cập nhật số lượng.Còn không có sản phẩm thì thêm vào giỏ hàng

		newList.push(newItem);
		sucessNotify();

		localStorage.setItem('cart', JSON.stringify(appstate.cart));

		const response = getCart();

		setState({ ...appstate, cart: response, cartCount: getCartCount() });
	}

	function updateSize(value, index, size, idsize){

		appstate.cart[index].sizes.prices=value;
		appstate.cart[index].sizes.types=size;
		appstate.cart[index].sizes.id=idsize;

		localStorage.setItem('cart', JSON.stringify(appstate.cart));

		const response = getCart();

		setState({ ...appstate, cart: response, cartCount: getCartCount() });
	}

	function getCart() {
		return JSON.parse(localStorage.getItem('cart')) || [];
	}

	function increment(index) {
		let newList = appstate.cart;
		newList[index].amount++;
		localStorage.setItem('cart', JSON.stringify(appstate.cart));

		const response = getCart();

		setState({ ...appstate, cart: response, cartCount: getCartCount() });
	}

	function decrement(index) {
		let newList = appstate.cart;
		if (newList[index].amount === 1) {
			removeProduct(index);
		} else {
			newList[index].amount--;
		}
		localStorage.setItem('cart', JSON.stringify(appstate.cart));

		const response = getCart();

		setState({ ...appstate, cart: response, cartCount: getCartCount() });
	}
	

	function size(index, value, size) {
		let newList = appstate.cart;
		newList.map((item, i) => {
			if (i === index) {
				item.size = size;
				item.value = value;

				console.log(item.size);
			}
		});
		setState({ ...appstate, cart: newList, cartCount: getCartCount() });
	}

	// Xóa Sản Phẩm và Cập nhật lại số lượng trong giỏ hàng

	function removeProduct(index) {
		const cartList = appstate.cart;
		cartList.splice(index, 1);
		localStorage.setItem('cart', JSON.stringify(appstate.cart));
		const response = getCart();

		setState({ ...appstate, cart: response, cartCount: getCartCount() });
		// localStorage.removeItem('cart');
		// setState({ ...appstate, cart: cartList, cartCount: getCartCount() });
	}
	// Chức năng cập nhật số lượng sản phẩm

	function getCartCount() {
		if (appstate.cart.length > 0) {
			const count = appstate.cart.reduce((total, item) => Number(total) + Number(item.amount), 0);
			return count;
		} else {
			return 0;
		}
	}
}
export default Store;
