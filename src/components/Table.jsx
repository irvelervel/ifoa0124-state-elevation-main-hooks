import { ListGroup } from 'react-bootstrap'

const Table = function ({ selected, changeAppState }) {
  const checkSelected = (value) => (value === selected ? 'selected' : '')

  return (
    <>
      <ListGroup className="text-dark">
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Uno' })}
          onClick={() => {
            // dal componente figlio noi invochiamo la prop "changeAppState", che farà un "this.setState" in App, il componente padre
            changeAppState('Uno')
          }}
          className={checkSelected('Uno')}
        >
          Uno
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => changeAppState('Due')}
          className={checkSelected('Due')}
        >
          Due
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => changeAppState('Tre')}
          className={checkSelected('Tre')}
        >
          Tre
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">
        Stato del componente App: {selected || 'undefined'}
      </p>
    </>
  )
}

export default Table
