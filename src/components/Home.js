import React from "react";
import nature from '../images/nature.jpg'

function Home() {
    const getStyle=()=>{
        return{
            borderBottom:'1px #ccc dotted',
            backgroundImage: `url(${nature})`,
            backgroundSize: 'cover',
            height:'720px',
            padding:'100px 20px',
            margin:'auto',
            textAlign:'center'
        }
    }

    const getContentStyle=()=>{
        return{
            color:'#fff',
            fontStyle:'bold',
            fontSize:'50px',
            backgroundColor:'rgba(0,0,0,0.44)',
            padding:'100px',
            margin:'auto',
            borderRadius:'20px'

        }
    }


    return(
        <div className="homepage" style={getStyle()}>
            <div className="content" style={getContentStyle()}>
                <h1>Welcome to the React website</h1>
                <h5 className="success button" >React Router</h5>
            </div>


        </div>
    )
}

export default Home;
