import styles from "./Button.module.css";

function Buttons({ onButtonClick }) {
const buttons = [
  'AC', 'DEL', '%', '/',
  '7',  '8',   '9', '*',
  '4',  '5',   '6', '-',
  '1',  '2',   '3', '+',
  '00', '0',   '.', '='
];

  return (
    <div className={styles.Buttonsdisplay}>
      {buttons.map((btn) => (
        <button
          key={btn}
          className={styles.button}
          onClick={() => onButtonClick(btn)}
          style={
     btn === '='
    ? { backgroundColor: '#c94a4a', color: 'white', boxShadow: '0 3px 0 #963232' }
    : btn === 'AC' || btn === 'DEL'
    ? { backgroundColor: '#ffd1d1', color: '#b83232' }
    : {}
}
        >
         {btn === 'DEL' ? <i className="fa-solid fa-delete-left"></i> : btn}
        </button>
      ))}
    </div>
  );
}

export default Buttons;