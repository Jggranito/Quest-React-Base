import './App.css';
import Button from './componets/Button/button';
import Paragraph from './componets/paragraph/paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Está página transforma qualquer texto em uppercase (letras maiúsculas)</h2>
        <Paragraph color='#40407a' textTransform='upperCase'/>
        <Button label="Botão clique aqui" text='Cliqui aqui!'/>
      </header>
    </div>
  );
}

export default App;