import Servers from './Servers/Servers'
import Navbar from './Navbar/Navbar'

function App(){

  const title = "GameSnoop"


  return(
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Add a filter component here */}
        <Servers/>
      </div>
    </div>
  )
}

export default App