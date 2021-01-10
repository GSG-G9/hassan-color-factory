import { Link } from 'react-router-dom';
import './style.css';
function Home({ colors }) {
	return (
		<section className='header'>
			<header className='header-background'>
				<div className='header-text'>
					<p>Welcome to the color factory</p>
					<button>
						<Link to='/color/new'>Add Color</Link>
					</button>
				</div>
			</header>
			<main className='header-select-color'>
				<p>Please Select a Color :</p>
				<ul className='header-ul'>
					{colors.map((color, index) => (
						<li key={index}>
							<Link className='color-link' to={`/color/${color.name}`}>
								{color.name}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</section>
	);
}

export default Home;
