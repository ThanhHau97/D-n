import React, { useState, useRef, useEffect, useContext } from 'react';
import axiosInstance from '../../components/Axios/Service';
import listContext from '../../ContextConfig';
import './Voucher.css';

const SearchbarDropdown = (props) => {
	const [ Product, setProduct ] = useState([]);
	const { options, onInputChange } = props;
	const ulRef = useRef();
	const inputRef = useRef();
	const stt = useContext(listContext);

	useEffect(() => {
		axiosInstance.getAll().then((res) => {
			setProduct(res.data);
			const search = res.data.map((item) => {
				return defaultOptions.push(item.name);
			});
		});

		inputRef.current.addEventListener('click', (event) => {
			event.stopPropagation();
			ulRef.current.style.display = 'flex';
			onInputChange(event);
		});
		ulRef.current.addEventListener('click', (event) => {
			ulRef.current.style.display = 'none';
		});
	}, []);
	return (
		<div className="search-bar-dropdown mb-2">
			<input
				id="search-bar"
				type="text"
				className="form-control"
				placeholder="Search"
				ref={inputRef}
				onChange={onInputChange}
				autocomplete="off"
			/>
			<ul id="results" className="list-group" ref={ulRef}>
				{options.map((option, index) => {
					return (
						<button
							type="button"
							key={index}
							onClick={(e) => {
								inputRef.current.value = '';
								console.log(option);
								for (let count = 0; count < Product.length; count++) {
									if (option === Product[count].name) {
										stt.addProduct(Product[count]);
									}
								}
							}}
							className="list-group-item list-group-item-action"
						>
							{option}
						</button>
					);
				})}
			</ul>
		</div>
	);
};

const defaultOptions = [];
// const push =
// for (let i = 0; i <products; i++) {
//   defaultOptions.push(`option ${i}`);
//   defaultOptions.push(`suggesstion ${i}`);
//   defaultOptions.push(`advice ${i}`);
// }

function SearchBar() {
	const [ options, setOptions ] = useState([]);
	const onInputChange = (event) => {
		const value = event.target.value;

 if(value!==''){
		setOptions(defaultOptions.filter((option) => option.includes(value)));
		  console.log(options)
		}else{
      setOptions(defaultOptions.filter((option) => option.includes(null)));
    }
	};

	return (
		<div className="container row">
			<div className="col-md-12">
				<SearchbarDropdown options={options} onInputChange={onInputChange} />
			</div>
		</div>
	);
}

export default SearchBar;
