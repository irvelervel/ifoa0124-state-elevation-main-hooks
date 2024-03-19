import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { useState } from 'react'

const App = function () {
  // se lo stato vivesse qua, lo potremmo ri-passare in basso come prop sia a Table che a Detail

  // poichè App era un componente a funzione, siamo stati costretti a convertirlo in un componente a classe
  // in modo da poter spostare qui lo stato di Table

  const [selected, setSelected] = useState(undefined)

  const changeAppState = (newSelectedValue) => {
    // newSelectedValue può essere "Uno", "Due" o "Tre"
    setSelected(newSelectedValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Table selected={selected} changeAppState={changeAppState} />
              {/* Table riceve quale sia l'elemento selezionato tramite PROP */}
            </Col>
            <Col className="my-auto">
              <Detail selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
