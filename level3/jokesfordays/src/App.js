import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes'
import JokesData from './components/JokesData'

function App() {
  const  jokeElements = JokesData.map( joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline}/>
  })
  
  return (
    <div className="App">
      {jokeElements}
    </div>
  );
}

export default App;


{/* <Jokes 
punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
isPun={true}
upvotes={10}
downvotes={2}

/>
<Jokes 
setup="I got my daughter a fridge for her birthday."
punchline="I can't wait to see her face light up when she opens it."
isPun={false}
/>
<Jokes
setup="How did the hacker escape the police?"
punchline="He just ransomware!"
isPun={true}
/>
<Jokes 
setup="Why don't pirates travel on mountain roads?"
punchline="Scurvy."
isPun={true}
/>
<Jokes 
setup=" Why do bees stay in the hive in the winter?"
punchline="Swarm."
isPun={true}
/>
<Jokes 
setup="What's the best thing about Switzerland?"
punchline="I don't know, but the flag is a big plus!"
isPun={false}
/> */}