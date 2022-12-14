import styled from "styled-components";
import { PencilSquare } from 'react-bootstrap-icons'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'



const Profile = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const onChangeHandler = () => {

    }

    // const Toastoptions= {
    //     position:"top-center",
    //     autoClose: 6000,
    //     pauseOnHover: true,
    //     draggable:true,
    //     theme :"dark"

    // };

    const getProfile = () => {

        let auth_token = localStorage.getItem('auth_token')

        if (auth_token) {
            let token_key = JSON.parse(auth_token)
            console.log(token_key.token)

            fetch('https://teal-zealous-lemur.cyclic.app/profile', {
                method: "GET", headers: {
                    "authorization": "Bearer " + token_key.token
                }
            }).then((res) => {
                return res.json()
            }).then((res1) => {
                setUser(res1)
               
            })
        } else {
            navigate('/login')
        }


    }
    console.log(user)

    useEffect(() => {
        getProfile()
        console.log("hello")
        // eslint-disable-next-line
    }, [])

    const image_style = {
        backgroundImage: `url(${`https://teal-zealous-lemur.cyclic.app/imgs/${user.image}`})`
    }

    return (
        <PROFILE>
            <div className="container">
                <div className="image py-3" style={image_style} >
                    {/* <img className="py-3" src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" alt="" /> */}
                    <form>
                        <label htmlFor="banner" >Update your mess banner...</label>
                        <input className=" my-2" id="banner" type="file" />
                        <button type="button" className="btn btn-sm btn-warning">Update</button>
                    </form>
                </div>

                <div className="Deatails py-3 px-2 my-4 mx-4 row g-3 ">
                    <div className="edit">
                        <samp data-bs-toggle="modal" data-bs-target="#exampleModal">Edit details  <PencilSquare /></samp>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Edit your details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body row g-3">


                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label">Name of your mess</label>
                                            <input required onChange={onChangeHandler} name="messname" value={""} type="text" className="form-control" id="name" placeholder="Enter name here" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="type" className="form-label">Type</label>
                                            <select required onChange={onChangeHandler} name="type" value={""} id="type" className="form-select">
                                                <option value={"Veg/Non-Veg"}>Veg / Non-veg</option>
                                                <option value={" Only Veg"}>Only Veg</option>
                                                <option value={" Only Non-Veg"}>Only Non-Veg</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="inputAddress" className="form-label">Address</label>
                                            <input required onChange={onChangeHandler} name="address" value={""} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="location" className="form-label">Location URL</label>
                                            <input required onChange={onChangeHandler} name="location" value={""} type="text" className="form-control" id="location" placeholder="Google map link etc" />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="phone" className="form-label">Phone no</label>
                                            <input required onChange={onChangeHandler} name="phone" value={""} type="text" className="form-control" id="phone" placeholder="Enter phone no" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input required onChange={onChangeHandler} name="email" value={""} type="email" className="form-control" id="email" placeholder="Enter email" />
                                        </div>
                                        <div className="col-4">

                                            <label className="form-label" htmlFor="openTime">
                                                Mess open at
                                            </label>
                                            <input required onChange={onChangeHandler} name="open" value={""} className="form-control" type="time" id="openTime" />

                                        </div>

                                        <div className="col-4">

                                            <label className="form-label" htmlFor="closeTime">
                                                Mess close at
                                            </label>
                                            <input onChange={onChangeHandler} name="close" value={""} className="form-control" type="time" id="closeTime" />

                                        </div>






                                    </div>
                                    <div className="modal-footer">
                                        {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button> */}
                                        <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <hr />
                    <div className="col-md-6">
                        <h4> Mess name </h4>
                        <p>{user.messname}</p>
                    </div>
                    <div className="col-md-6">
                        <h4> Type </h4>
                        <p>{user.type}</p>
                    </div>
                    <div className="col-md-6">
                        <h4> Address </h4>
                        <p>{user.address}</p>
                    </div>

                    {/* <div className="col-md-6">
                        <h4> Location link </h4>
                        <p></p>
                    </div> */}

                    <div className="col-md-6">
                        <h4> Phone no </h4>
                        <p>{user.phone}</p>
                    </div>

                    <div className="col-md-6">
                        <h4> Email address </h4>
                        <p>{user.email}</p>
                    </div>

                    <div className="col-md-6">
                        <h4> Mess open at </h4>
                        <p>{user.open}</p>
                    </div>

                    <div className="col-md-6">
                        <h4> Mess close at  </h4>
                        <p>{user.close}</p>
                    </div>
                    <hr />


                    <div className=" col-md-12">

                        <h3> Daily Updates </h3>

                    </div>

                    <div className=" col-md-12">

                        <h5> Lunch and Dinner time </h5>

                    </div>

                    <div className="col-md-3">
                        Lunch time <input className="form-control" onChange={onChangeHandler} type="" name="" value="" placeholder="eg. 12 pm to 3 pm" />
                    </div>

                    <div className="col-md-3">
                        Dinner time <input className="form-control" onChange={onChangeHandler} type="" name="" value="" placeholder="eg. 7 pm to 10 pm" />
                    </div>
                    <div className="col-md-3">
                        Lunch Price <input className="form-control" onChange={onChangeHandler} type="" name="" value="" placeholder="" />
                    </div>

                    <div className="col-md-3">
                        Dinner Price <input className="form-control" onChange={onChangeHandler} type="" name="" value="" placeholder="" />
                    </div>

                    <hr />

                    <div className="col-md-12">
                        <h5> Today's Menu</h5>
                    </div>

                    <div className="col-md-3">
                        <label className="form-controlo">Lunch menu</label>
                        <textarea className="form-control" rows="" cols="" placeholder=" please update it on daily basis Eg. bhaji , chapati ect" />
                    </div>

                    <div className="col-md-3">
                        <label className="form-controlo">Dinner menu</label>
                        <textarea className="form-control" rows="" cols="" placeholder=" please update it on daily basis Eg. bhaji , chapati ect" />
                    </div>

                    <div className="edit" >
                        <button type="button" className="btn btn-sm btn-warning">Update</button>
                    </div>

                    {/* <div className="col-md-3">
                    Friday <input type="" name="" value=""/>
                    </div>

                    <div className="col-md-3">
                    Saturday <input type="" name="" value=""/>
                    </div> */}

                </div>

                <h2>Gallary</h2>
                <hr />
                <div className=" gallary row g-3">
                    <div className="col-md-4 py-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" className="card-img-top" alt="..." />
                            <div className="card-body position-absulute">
                                <a href="/" className="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" className="card-img-top" alt="..." />
                            <div className="card-body position-absulute">
                                <a href="/" className="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" className="card-img-top" alt="..." />
                            <div className="card-body position-absulute">
                                <a href="/" className="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" className="card-img-top" alt="..." />
                            <div className="card-body position-absulute">
                                <a href="/" className="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" className="card-img-top" alt="..." />
                            <div className="card-body position-absulute">
                                <a href="/" className="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-2">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" className="card-img-top" alt="..." />
                            <div className="card-body position-absulute">
                                <a href="/" className="btn btn-sm btn-danger">remove</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 py-2 d-flex">
                        <label className="upload-label bg-warning" htmlFor="upload-photo">Add More</label>
                        <input className="upload-photo" type="file" name="photo" id="upload-photo" />
                    </div>

                </div>

            </div>
            {/* <ToastContainer /> */}
        </PROFILE>
    )
}

export default Profile;

const PROFILE = styled.div`
/* background-color: #000; */
background-color: aliceblue;

.container{
    /* background-color: aliceblue; */
 
    display: flex;
    flex-direction: column;
}

.container h3{
    text-align: center;
}

.container h2{
    text-align: center;
}

.image{
    display: flex;
    /* flex-direction: column; */
    /* margin: auto; */
    /* background-image: url("https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020"); */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 400px;
    margin-top: 20px;
    border-radius: 20px;
    
}

.image form{
    /* width: 500px; */
    margin: auto;
    text-align: center;
    background-color: rgba(0 0 0/50%);
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}

.image input{
    border-radius: 20px;
    color: #fff;
}

.image label{
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
    color: #fff;
}

.image img{
    /* width: 100vw; */
    width: -webkit-fill-available;
    margin: auto;
    border-radius: 50px;

}

.Deatails{
    /* background-color: #b0dada; */
    background-color: #d2f1f1;
    border-radius: 20px;
}

.Deatails h4 , p {
    padding: 0;
    margin: 2px;
}

input{
    border: none;
}

input:focus,
textarea:focus{
    border: none;
    box-shadow: none;
    
}

.Deatails  p{
    padding: 5px 5px 5px 10px;
    color: #000;
    background-color: lightgray;
    border-radius: 10px;
    text-align: center;
}

.Deatails h4 {
    /* border-bottom: solid #000 1px; */
    /* text-align: center; */
    /* border-top: solid #000 1px; */
}

.edit{
    display: flex;
    justify-content: end;

}

.edit samp{
    cursor: pointer;
}

.modal-body input{
    border: solid 1px;
}

.gallary .card{
    margin: auto;
}

.gallary .card-body{
    position: absolute;
    bottom: 0;
}

.upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}

.upload-label{
    margin: auto;
    /* color: #fff; */
    padding: 5px 10px;
    cursor: pointer;
   /* font-weight: bold; */
   /* border: solid yellowgreen 1px; */
   /* background-color: red; */
   border-radius: 20px;
   
}

    
`