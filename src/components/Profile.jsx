import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.profile}>
			<div>
				<img
					className={classes.img}
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
	);
};

export default Profile;
