import styles from '@/styles/Home.module.css'

const Welcome = () => {
    return (
        <>
            <h1 className={styles.welcome} onClick={(e) => {
                e.preventDefault();
                window.location.href = 'buysellee://articles';
            }}
            >
                Welcome to Jejemonizer</h1>
            <h2 className={styles.disclaimer}>I don&#39;t know how you plan to use this, but this is just for fun. Maybe for password generation?</h2>
        </>
    )
}

export default Welcome