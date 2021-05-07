import React, { Component } from 'react';
//import thư viên router chuyển trang
import { Route, Switch, NotFoundRoute } from 'react-router-dom';
//import trang home
import Home from '../pages/Home/Banner';
//import trang Cart
import Cart from '../pages/Cart/Cart';
//import trang product
import Product from '../pages/Product/Product';
//import trang product
import ProductDetail from '../pages/Product/ProductDetail';
//import trang contact
import Contact from '../pages/Contact/Contact';
//import trang about
import About from '../pages/About/About';
//import trang user
import User from '../pages/Manager_Info/UserManager';
import Login from '../pages/Login/UserLogin';
import Forgot from '../pages/Login/Forgot_Password';
export default class route extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Cart">
						<Cart />
					</Route>
					<Route exact path="/product">
						<Product />
					</Route>
					<Route path="/product/:id" component={ProductDetail} />

					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/user" component={User} />
					<Route path="/login" component={Login} />
					<Route path="/forgotpassword" component={Forgot} />
				</Switch>
			</div>
		);
	}
}
