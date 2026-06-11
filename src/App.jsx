import "./App.css";
import Reason from "./component/reason/Page";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Reason /> }  />
    </Routes>
  )
}

export default App;
