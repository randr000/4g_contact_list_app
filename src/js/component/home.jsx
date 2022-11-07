import React, { useContext } from "react";
import { AppContext } from './AppContext.jsx';

//create your first component
const Home = () => {

	const {store, dispatch} = useContext(AppContext);
	
	return (
		<></>
	);
};

export default Home;
