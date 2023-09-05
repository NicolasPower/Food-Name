import { useState } from "react"
import { useEffect } from "react";

function Name() {
    const [nameData, setNameData] = useState(null);
    const [name, setName] = useState(null);
    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');
  
    useEffect(() => {
      fetch('https://v2.namsor.com/NamSorAPIv2/api2/json/origin/' + firstName + '/' + lastName, {
        method: 'GET',
        headers: { 'X-API-KEY': '2332cfd4e8ddf0ebfe675cee251d65e9' },
      })
        .then((response) => response.json())
        .then((json) => {
          setNameData(json);
          sessionStorage.setItem('nameData', JSON.stringify(json));
          setName(firstName + ' ' + lastName);
        })
        .catch((err) => console.error(err));
    }, [firstName, lastName]);
  
    return <p className='p-1'>{name}</p>;
  }

export default Name