import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
	const { level } = useContext(ChallengesContext);

	return(
		<div className={styles.profileContainer}>
			<img src="https://avatars.githubusercontent.com/u/70731847?s=400&u=b3f3cf67a4aeb02476e8f21ba9534e50d18d33ef&v=4" alt="Nícolas Ortiz"/>
			<div>
				<strong>Nícolas Ortiz</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level {level}
					</p>
			</div>
		</div>
	);
}
