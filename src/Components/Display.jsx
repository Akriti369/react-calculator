import styles from "./display.module.css"
function Display({displayValue}){
    return(
        <div className={styles.input}>
            <input type="text" value={displayValue} readOnly/>
        </div>
    );
}
export default Display;