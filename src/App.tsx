import { useState } from 'react';
import styles from './App.module.css';
import logoImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem/GridItem';

import { levels, calculateImc, Level} from './helpers/imc';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showImc, setShowImc] = useState<Level | null>(null);

  const handleCalculate = () => {
    if(heightField > 0 && weightField > 0) {
      setShowImc(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setShowImc(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt="logoImc" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde
            para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex. 1.5 (em metros)" 
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            />
          
          <input 
            type="number"
            placeholder="Digite o seu peso. Ex. 75.3  (em kg)" 
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            />
            
          <button onClick={handleCalculate}>Calcular meu IMC</button>
          
        </div>
        <div className={styles.rightSide}>
          {!showImc &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {showImc &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width="25" />
              </div>
              <GridItem item={showImc} />
            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default App;