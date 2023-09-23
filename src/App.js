
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';



function App() {

  return (
    <div className="App">
      <Header />
      <div className='separador'></div>
      <Main />
      <Footer />
    </div>

  );
}

export default App;

/*
API key:
- Your API key is 8408b16d6947bbaf9cd85740ce3fba64
- Within the next couple of hours, it will be activated and ready to use
- You can later create more API keys on your account page
- Please, always use your API key in each API call

fetch('https://api.openweathermap.org/data/2.5/weather?q={London}&appid={8408b16d6947bbaf9cd85740ce3fba64}')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/

