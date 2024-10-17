import styles from './title.module.css'
 const PageTitle = ({question}) => {
    return(
        <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.container}`}>{question}</h1>
        </div>
    )
}
export default PageTitle;