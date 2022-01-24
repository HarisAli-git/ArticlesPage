import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to training!"
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <Navbar></Navbar>
        <h1>{title}</h1>
        <Home />
        <p>Likes {likes} times</p>
        <p>Random Number: {Math.random() * 12}</p>
        <a href={link}>Click Me</a>
      </div>
    </div>
  );
}

export default App;
