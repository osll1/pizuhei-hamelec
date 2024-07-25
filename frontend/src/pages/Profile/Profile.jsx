// import React, { useState, useEffect } from 'react';
// import './Profile.css';
// import axios from 'axios';

// const Profile = ({ user }) => {
//   const [profileImage, setProfileImage] = useState(null);
//   const [purchases, setPurchases] = useState([]);
//   const [trackingInfo, setTrackingInfo] = useState([]);

//   useEffect(() => {
//     // Load purchases from backend
//     axios.get(`/api/purchases?email=${user.email}`)
//       .then(response => {
//         console.log('Purchases:', response.data); // Debug log
//         setPurchases(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching purchases:', error);
//       });

//     // Load tracking info from backend
//     axios.get(`/api/tracking?email=${user.email}`)
//       .then(response => {
//         console.log('Tracking info:', response.data); // Debug log
//         setTrackingInfo(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching tracking info:', error);
//       });
//   }, [user.email]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('profileImage', file);

//     axios.post('/api/uploadProfileImage', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     .then(response => {
//       setProfileImage(URL.createObjectURL(file));
//     })
//     .catch(error => {
//       console.error('Error uploading image:', error);
//     });
//   };

//   return (
//     <div className="profile-page">
//       <h1>פרופיל אישי</h1>
//       <div className="profile-info">
//         <div className="profile-image">
//           {profileImage ? <img src={profileImage} alt="Profile" /> : <div className="placeholder">אין תמונה</div>}
//           <input type="file" onChange={handleImageUpload} />
//         </div>
//         <div className="profile-details">
//           <h2>{user.username}</h2>
//           <p>{user.email}</p>
//         </div>
//       </div>
//       <div className="profile-purchases">
//         <h2>הרכישות שלי</h2>
//         <ul>
//           {Array.isArray(purchases) && purchases.length > 0 ? (
//             purchases.map((purchase, index) => (
//               <li key={index}>
//                 <p>מוצר: {purchase.productName}</p>
//                 <p>תאריך רכישה: {purchase.date}</p>
//                 <p>סטטוס: {purchase.status}</p>
//               </li>
//             ))
//           ) : (
//             <p>אין רכישות להציג</p>
//           )}
//         </ul>
//       </div>
//       <div className="profile-tracking">
//         <h2>עקוב אחר משלוח</h2>
//         <ul>
//           {Array.isArray(trackingInfo) && trackingInfo.length > 0 ? (
//             trackingInfo.map((track, index) => (
//               <li key={index}>
//                 <p>מספר משלוח: {track.trackingNumber}</p>
//                 <p>סטטוס: {track.status}</p>
//                 <p>תאריך: {track.date}</p>
//               </li>
//             ))
//           ) : (
//             <p>אין משלוחים לעקוב</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

const Profile = ({ user }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [trackingInfo, setTrackingInfo] = useState([]);

  useEffect(() => {
    // Load purchases from backend
    axios.get(`/api/purchases?email=${user.email}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log('Purchases:', response.data); // Debug log
        setPurchases(response.data);
      })
      .catch(error => {
        console.error('Error fetching purchases:', error);
      });

    // Load tracking info from backend
    axios.get(`/api/tracking?email=${user.email}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log('Tracking info:', response.data); // Debug log
        setTrackingInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching tracking info:', error);
      });
  }, [user.email]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', file);

    axios.post('/api/uploadProfileImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setProfileImage(URL.createObjectURL(file));
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });
  };

  return (
    <div className="profile-page">
      <h1>פרופיל אישי</h1>
      <div className="profile-info">
        <div className="profile-image">
          {profileImage ? <img src={profileImage} alt="Profile" /> : <div className="placeholder">אין תמונה</div>}
          <input type="file" onChange={handleImageUpload} />
        </div>
        <div className="profile-details">
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile-purchases">
        <h2>הרכישות שלי</h2>
        <ul>
          {Array.isArray(purchases) && purchases.length > 0 ? (
            purchases.map((purchase, index) => (
              <li key={index}>
                <p>מוצר: {purchase.productName}</p>
                <p>תאריך רכישה: {new Date(purchase.orderDate).toLocaleDateString()}</p>
                <p>סטטוס: {purchase.status}</p>
              </li>
            ))
          ) : (
            <p>אין רכישות להציג</p>
          )}
        </ul>
      </div>
      <div className="profile-tracking">
        <h2>עקוב אחר משלוח</h2>
        <ul>
          {Array.isArray(trackingInfo) && trackingInfo.length > 0 ? (
            trackingInfo.map((track, index) => (
              <li key={index}>
                <p>מספר משלוח: {track.trackingNumber}</p>
                <p>סטטוס: {track.status}</p>
                <p>תאריך: {new Date(track.date).toLocaleDateString()}</p>
              </li>
            ))
          ) : (
            <p>אין משלוחים לעקוב</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

