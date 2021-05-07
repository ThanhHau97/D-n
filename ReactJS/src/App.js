import Header from './Main/Header';
import Footer from './Main/Footer';
import List from './Context';
import Pages from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
	return (
		<div>
			<Router>
				<List>
					<Header />
					<Pages />
					<Footer />
				</List>
			</Router>
		</div>
	);
}

export default App;
