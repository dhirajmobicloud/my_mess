import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { TelephoneFill, GeoAltFill } from "react-bootstrap-icons";

const Mess = () => {

    const param = useParams();
    const [mess, setMess] = useState({})
    const getMessData = async () => {
        let data = await fetch(`https://teal-zealous-lemur.cyclic.app/mess/${param.id}`, {
            method: "get"
        })
        let result = await data.json()
        setMess(result)
    }

    const banner_style ={
        backgroundImage: `url(${`https://teal-zealous-lemur.cyclic.app/imgs/${mess.image}`})`
    }

    useEffect(() => {
        getMessData()
        // eslint-disable-next-line
    }, [])


   

    return (
        <MESS>
            <div className='banner' style={banner_style}>
                
                <h3 >{mess.messname} </h3>
            </div>

            <section className='contact   '>

                <div className='container d-flex '>
                    <div className='address my-2'>
                        <h3>Contact</h3>

                        <p>{mess.address}</p>
                        <h5> Phone : {mess.phone}</h5>
                        <a href={`tel:+91-${mess.phone}`} className='btn btn-sm btn-success'> <TelephoneFill className='icon' /> Call now</a>
                        <a target="blank" href={mess.location} className='btn btn-sm btn-danger'> <GeoAltFill className='icon' /> Get direction</a>

                    </div>
                    <div className='open-hours d-flex my-2'>
                        <h3>Open Hours</h3>
                        <ul>
                            <li> Mon:	12:00 AM – 12:00 PM</li>
                            <li>Tue:	12:00 AM – 12:00 PM</li>
                            <li>Wed:	12:00 AM – 12:00 PM</li>
                            <li>Thu:	12:00 AM – 12:00 PM</li>
                            <li>Fri:	12:00 AM – 12:00 PM</li>
                            <li>Sat:	4:00 – 7:00 PM</li>
                            <li>Sun:	4:00 – 7:00 PM</li>

                        </ul>

                    </div>

                </div>

            </section>

        </MESS>


    )
}

export default Mess

const MESS = styled.div`
background-color: #000;
padding-top: 20px;
.banner{
	height: 50vh;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat; 
    display: flex;
    margin-bottom: 25px;
}

.banner img{
    width: 50vw;
    margin: auto;
}

.banner h3{
    margin: auto;
    font-size: 3rem;
    font-style: italic;
    text-decoration: underline;
    font-weight: 900;
    color: #fff;
    text-shadow: 3px 2px 2px   #000;
    /* width: 50vw; */
   
    text-align: center;
    padding: 15px;
    background-color: rgb(22 21 21/50%);
    /* border-radius: 20px; */
}

.container{
    justify-content: space-between;
}

.contact{
    background-color: #0b0a0a;
    padding: 20px 0 20px 0;
}

.contact h3{
 
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    text-shadow: 1px 1px 1px   #fff;
    padding: 5px;
}

.contact p{
    text-align: center;
    padding: 0 10px 0 10px;
    color: #fff;
    line-height: 2;
}

h5{
    text-align: center;
    color: #fff;
    margin-bottom: 0;
}

a{
    width: 100%;
    margin: 10px auto ;
    /* padding: 10px; */
}

.icon{
    font-size: 2rem;
    padding: 5px;
}

.address{
    background-color: #000;
    height: 310ppx;
    width: 40vw;
    border-radius:20px;
    padding: 20px;
   
}

.open-hours{
    background-color: #000;
    height: 310px;
    width: 40vw;
    border-radius:20px;
    flex-direction: column;
    padding: 20px;
}



.open-hours ul{
    margin: 0 auto;
}

.open-hours ul li{
color: #fff;
line-height: 2;

}

@media (max-width: 767px) {

    .container{
    flex-direction: column;
}

    .address{
    background-color:#111010;
    height: 100%;
    width: auto;
}

.open-hours{
    background-color: #111010;
    height: 100%;
    width: auto;
}

.banner h3{
        width: 100vw;
    }
}

`