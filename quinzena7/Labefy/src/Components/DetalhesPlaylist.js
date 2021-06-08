import React from "react"
import './detalhesPlaylist.css'
import axios from 'axios'

export default class DetalhesPlaylist extends React.Component{

componentDidMount = () => {
    this.mostraNomePlaylist()
 }

 mostraNomePlaylist = () =>{
     const id = "44c95337-3390-46d5-9c17-869d995817a3"
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
        headers:{
           Authorization: 'luis-andrade-munoz'
          }

    }).then((res) => {
      console.log(res.data)
    }).catch((error) => {
     console.log(error.response.data)
  })
} 
    render(){
        return(
            <div className="details">
                <p>Oi</p>
                <div className="conatiner-detalhes">
                    
                </div>
            </div>
        )
    }
}
