import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Bounties from './components/Bounties.js';
import AddBountyForm from './components/AddBountyForm.js'


function App() {
  
  const [jediBounties, setJediBounties] = useState([])
  const [sithBounties, setSithBounties] = useState([])

  function getBounties(){
    axios.get('/jedi')
    .then(res => setJediBounties(res.data))
    .catch(err => console.log(err))
    axios.get('sith')
    .then(res => setSithBounties(res.data))
    .catch(err => console.log(err))
  }

  function addJedi(newJedi){
    axios.post('/jedi', newJedi)
      .then(res => 
        setJediBounties(prevJedis => [...prevJedis, res.data]))
      .catch(err => console.log(err))
  }

  function deleteJediBounty(jediId){
    axios.delete(`/jedi/${jediId}`)
      .then(res => {
        setJediBounties(prevJediBounty => prevJediBounty.filter(jedi => jedi._id !== jediId))
      })
      .catch(err => console.log(err))

  }

  function deleteSithBounty(sithId) {
    axios.delete(`/sith/${sithId}`)
    .then(res => {
    setSithBounties(prevSithBounty => prevSithBounty.filter(sith => sith._id !== sithId))
    })
    .catch(err => console.log(err))
  }

  function editJediBounty(updates, jediId){
    axios.put(`/jedi/${jediId}`, updates)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }



  useEffect(() => {
    getBounties();
  }, [])


  return (
    <div className="bounty-container">
      <AddBountyForm  
      submit={addJedi}
      btnText="Add Movie"
      />
      { jediBounties.map(jediBounty => <Bounties 
      {...jediBounty} 
      key={jediBounty.lastName} 
      deleteJediBounty={deleteJediBounty}
      editJediBounty={editJediBounty}
      />)}
      { sithBounties.map(sithBounty => <Bounties {...sithBounty} key={sithBounty.lastName} deleteSithBounty={deleteSithBounty}/>)}
    </div>
  );
}

export default App;