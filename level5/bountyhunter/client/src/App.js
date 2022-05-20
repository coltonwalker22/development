import {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header/Header.js'
import Bounties from './components/Bounties/Bounties.js'
import AddBountyForm from './components/AddBountyForm/AddBountyForm.js';

import './components/Header/header.css'
import './components/AddBountyForm/addbountyform.css'
import './components/Bounties/bounties.css'
import './App.css'

function App() {

  const [bounties, setBounties] = useState([]);

    // AXIOS REQUESTS
  function getBounties(){
    axios.get('/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err.res.data.errMsg))
  }

  function addBounty(newBounty){
    axios.post('/bounties', newBounty)
    .then(res =>  setBounties(prevBounty => [...prevBounty, res.data]))
    .catch(err => console.log(err.res.data.errMsg))
  }

  function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err.res.data.errMsg))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res => console.log(res))
    .catch(err => console.log(err.res.data.errMsg))
  }

  useEffect(() => {
    getBounties();
  }, [])


  function handleFilter(e){
    if(e.target.value === "reset"){
      getBounties()
    } else {
    axios.get(`/bounties/search/type?type=${e.target.value}`)
      .then(res => setBounties(res.data))
      .catch(err => console.log(err.res.data.errMsg))
    }
  }

  console.log(setBounties)
  return (
    <>
    <Header />
    <div className="bounty-container">
      <AddBountyForm
      submit={addBounty}
      btnText="Add Bounty"
      />

    <div className="filter-container">
      <h3>Filter by Alignment:</h3>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Alignments</option>
        <option value="jedi">jedi</option>
        <option value="sith">sith</option>
      </select>

    </div>
      {bounties.map(bounty => <Bounties
      {...bounty}
      key={bounty.lastName}
      deleteBounty={deleteBounty}
      editBounty={editBounty}
      />)}
    </div>
 
    </>
  );
}

export default App;
