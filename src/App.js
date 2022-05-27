import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'
import Filter from './Filter/Filter'

function App(){

  const title = "GameSnoop"


  return(
    <div className="App">
      <Navbar />
      <div className="content">
        <Filter/>
        <Servers/>
      </div>
    </div>
  )
}

export default App