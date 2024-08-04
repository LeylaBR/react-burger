import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile.module.css'

const Profile = () => (
        <div className={styles.profile}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
                Личный кабинет
            </p>
        </div>
    )

export default Profile
