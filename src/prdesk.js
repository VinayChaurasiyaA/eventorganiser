import React from 'react'
import prdesk2 from './Images/prdesk2.png';
import prpoints from './Images/prpoints.png';

export default function Prdesk() {
  return (
    <div className="prdesk">
      <div>
      <h1 className="prheading">PR DESK </h1>
      <p className="prname1">MOKSHIT DOSHI</p>
      <p className="prnamecn1">9324147596</p>
      <p className="prname2">HIRAL JADEJA</p>
      <p className="prnamecn2">8104097198</p>
      <p className="prname3">KHUSHI JAIN</p>
      <p className="prnamecn3">9892717210</p>
      <p className="prname4">JAIMIN UPADHYAY</p>
      <p className="prnamecn4">9082272503</p>
      <p className="prname5">DAKSH THAKER</p>
      <p className="prnamecn5">9004286466</p>
      <p className="prname6">PARTH PAWAR</p>
      <p className="prnamecn6">9004316687</p>
      <img src={prdesk2} alt="prdesk" className="prdesk2" ></img>
      </div>
      <div>
       <h1 className="prpoints">PR POINTS</h1>
       <img src={prpoints} alt="prpoints" className="prpointsimg"></img> 
      </div>
      
        
      
    </div>
  
  )
}

                       