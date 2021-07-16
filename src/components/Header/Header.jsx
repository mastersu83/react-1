import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				className={classes.img}
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png'
				alt=''
			/>
			<div className='title'>Title</div>
		</header>
	);
};

export default Header;
