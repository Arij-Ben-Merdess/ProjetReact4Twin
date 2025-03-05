// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from 'react-bootstrap'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
// import Form from './Components/Form'
// import Hello from './Components/Hello'
// import ComponentFonc from './Components/ComposantFonc'
// import ComposantClass from './Components/ComposantClass'
// import ListManager from './Components/ListManager'
// import NotesManager from './Components/NotesManager'
// import ColorBox from './Components/ColorBox'
// import Event from './Components/Event'
import Events from './Components/Events'
import Products from './Components/Products'
//import Home from './Components/Home'
//import NotFound from './Components/NotFound'
import React, { useState } from 'react'
import { Suspense } from 'react'
import NavigationBar from './Components/NavigationBar'
import EventDetails from './Components/EventDetails'
import AddEvent from './Components/AddEvent'
import { getallEvents } from './services/api'

const Home = React.lazy(() => import("./Components/Home"));
  const Hello = React.lazy(() => import("./Components/Hello"));
  const NotFound = React.lazy(() => import("./Components/NotFound"));

function App() {
  //const [count, setCount] = useState(0)
  const [events, setEvents] = useState([]);
 
  const handleEventAdded = async () => {
    const data = await getallEvents();
    setEvents(data);
  }
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
{/*<Hello />
<Form label="Firstname"/>
<Button/>
<ComponentFonc />
<ComposantClass />
<ListManager />
<NotesManager></NotesManager>
<ColorBox></ColorBox>*/}
{/* <Products /> */}
{/* <NavigationBar/> */}
<Link to="/add-event" >Add Event</Link><br />
<Link to="/home" >Home</Link>


<Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path="/hello" element={<Hello/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/events" element={<Events/>} />

      <Route path="/add-event" element={<AddEvent onEventAdded={handleEventAdded}/>} />
      <Route path="/event-details/:id" element={<EventDetails />} />
      {/* <Route path="*" element={<NotFound/>} /> */}
    </Routes>
    
</Suspense>

</>
  )
}

export default App
