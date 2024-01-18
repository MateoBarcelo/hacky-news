import { Router, Route, Link } from 'wouter'
import Home from './pages/Home'
import NewDetail from './pages/NewDetail'
import './App.css'

function App() {

  return (
    <>
      <div className="flex items-center justify-center space-x-4 [&>h2]:text-lg mb-6">
          <h2><a href="https://news.ycombinator.com/newest" target="_blank">new</a></h2>
          <h2><a href="https://news.ycombinator.com/submit" target="_blank">login</a></h2>
          <Link to='/'><h1 className="text-4xl px-4 hover:cursor-pointer py-6 font-semibold text-center text-white">Hacky News</h1></Link>
          <h2><a href="https://news.ycombinator.com/front" target="_blank">past</a></h2>
          <h2><a href="https://news.ycombinator.com/ask" target="_blank">ask</a></h2>
      </div>
      <Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/item">
            <NewDetail />
          </Route>
      </Router>
    </>
  )
}

export default App
