import './App.css'
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [photo , setPhoto] = useState("")
  const [result , setResult] = useState([])

  const changePhoto =()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=qbkT0FLnlwG4qtYOKpvkf76JPIucyn-K29fksvslkus`)
    .then((response)=>{
      setResult(response.data.results);
    })
  }

  return (
    <>
      <div className='contaier'>
          <input type="text" className='form-control' value={photo} onChange={(e) =>{
            setPhoto(e.target.value)
          }}/>
          <button type='submit' onClick={changePhoto} >Search Photo</button>
      </div>

      <div className='main'>
        <div className='row'>
          { result.map((value) => {
            return (
              <div className='column'>
                <a href='#'>
                  <img src={value.urls.small}    />
                </a>
              </div>
            )
          })}

          

        </div>


      </div>
    </>
  );
}

export default App;
