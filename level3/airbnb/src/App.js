
import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'
import Card from './components/Card'
import Data from './components/Data'


function App() {

    const cards = Data.map( (item, i) => 
    <Card 
    key={i} 
    id={item.id}
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    openSpots={item.openSpots}
  
    
    />
    )
    console.log(cards)
        return (
          <div className="App">
    <Nav />
    <Body />
    <section className="cards-list">
                {cards}
    </section>
    </div>
  );
}

export default App;

