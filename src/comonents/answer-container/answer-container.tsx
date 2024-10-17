import styles from './answer.module.css'
const AnswerContainer = ({answer, index, onClick}) => {
    return(
        <div className={styles.container} onClick={onClick}>
          <div> <h2>{index}</h2></div>
          
            <h2>{answer}</h2>
        </div>
    )
}
export default AnswerContainer;