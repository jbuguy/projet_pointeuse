

import './App.css'
import Menu from './components/Menu'

function App() {

  return (
      <>
          <Menu
              user={{
                  img: "/userplaceholder.jpg",
                  name: "aziz manager",
                  type: "HR Administrator",
              }}
          />
      </>
  );
}

export default App
