import {useState, useEffect} from 'react'

function Profile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = { 
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://www.mecallapi.com/api/auth/user", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log('error', error));
      }, [])
  return (
    <div>Profile</div>
  )
}

export default Profile