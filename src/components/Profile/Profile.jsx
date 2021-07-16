import MyPosts from './MyPosts/MyPosts';
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
			<MyPosts />
		</div>
	);
};

export default Profile;
