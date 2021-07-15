import './App.css';

const App = () => {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img
					className='header__img'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png'
					alt=''
				/>
				<div className='title'>Title</div>
			</header>
			<nav className='nav'>
				<div>Profile</div>
				<div>Messages</div>
				<div>News</div>
				<div>Music</div>
				<div>Settings</div>
			</nav>
			<div className='content'>
				<div>
					<img
						className='content__img'
						src='https://7oom.ru/wp-content/uploads/peizaji-01.jpg'
						alt=''
					/>
				</div>
				<div>
					My posts
					<div>New post</div>
					<div>
						<div>post1</div>
						<div>post2</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
