import styles from './answer.wrapper.module.css'
const AnswerWrapper = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}
export default AnswerWrapper;