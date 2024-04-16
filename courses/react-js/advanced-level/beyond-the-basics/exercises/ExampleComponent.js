import React, {useEffect, useState} from 'react';

const ExampleComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
        <div>Component unmounted</div>;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <p>
            <b>Email:</b> {userData.email}, <b>Phone:</b> {userData.phone}
          </p>
          <p>
            <b>Website:</b> {userData.website}, <b>Company:</b>{" "}
            {userData.company.name}
          </p>
          <p>
            <b>City:</b> {userData.address.city}, <b>Zipcode:</b>{" "}
            {userData.address.zipcode}
          </p>
          <p>
            <b>Latitude:</b> {userData.address.geo.lat}, <b>Longitude:</b>{" "}
            {userData.address.geo.lng}
          </p>

          <button onClick={() => setUserData(null)}>Clear user data</button>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default ExampleComponent;
