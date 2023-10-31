import './App.css'
import Cartao from './components/Cartao'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Slides from './components/Slides'

function App() {


  return (
    <>
      <h1>Aula - Bootstrap</h1>

      <div className='row d-flex justify-content-evenly'>
        <Cartao />
        <Cartao />
        <Cartao />
      </div>

      <Menu />
      <Slides />
      <div className="row">
        <div className="col-5">Col-3</div>
        <div className="col-2">Col-3</div>
        <div className="col-2">Col-3</div>
        <div className="col-3">Col-3</div>
      </div>

      <div className="bg-primary text-white mt-5">Color Primary</div>
      <div className="bg-secondary text-warning mb-5">Color Primary</div>
      <div className="bg-success text-white ms-5">Color Primary</div>
      <div className="bg-danger me-5">Color Primary</div>
      <div className="bg-warning ms-5">Color Primary</div>
    
      <button className='btn btn-primary'>Clique aqui</button> {/*tamanho normal */}
      <button className='btn btn-success btn-sm'>Clique aqui</button> {/*small */}
      <button className='btn btn-warning btn-lg'>Clique aqui</button> {/*large */}

      <Lista />
    </>
  )
}

export default App
