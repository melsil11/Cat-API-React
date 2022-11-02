import CatIndex from "./CatIndex"
const Home = (props) => {
	const {msgAlert} = props

	return (
		<>
			<div className = 'container-md'>
			<h2>All the pets</h2>
			<CatIndex msgAlert={msgAlert}/>
			</div>
		</>
	)
}

export default Home
