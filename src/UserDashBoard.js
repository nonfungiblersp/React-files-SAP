import React,{useState} from "react";
import axios from 'axios';
import './ProfileApp.css';
const UserDashboard = () => {
    const [userData,setuserData] = useState(null);
    const [error,setError] = useState(null);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setuserData(response.data.data);
        setError(null);
        } catch (error) {
            setError(error.response.data.error);
            setuserData(null);
        }
    };

    const handleButtonClick = async (id) => {
        if (id === 100){
            setError('Error occured. Please try again later.');
            setuserData(null);
        }
        else{
            await fetchData(id);
        }
    };
    

    return(
        <div>
            <div>
                <button onClick={() => handleButtonClick(1)}>1</button>
                <button onClick={() => handleButtonClick(2)} >2</button>
                <button onClick={() => handleButtonClick(3)}>3</button>
                <button onClick={() => handleButtonClick(4)}>4</button>
                <button onClick={() => handleButtonClick(100)}>100</button>
            </div>
            <div>
                <ul>
                    <li>Email : {userData && userData.email}</li>
                    <li>Name: {userData && `${userData.first_name} ${userData.last_name}`} </li>
                    {userData && <img src={userData.avatar} alt="user Avatar"/>}
                </ul>
                {error && <div className="alert"> {error} </div> }
            </div>
        </div>
    )
}

export default UserDashboard;