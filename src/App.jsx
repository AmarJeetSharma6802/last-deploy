import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]); 
  // const [loading ,setLoading] =useState('')

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/companyDetails');
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingData();
  }, []);

  return (
    <>
      <div className="box">
        {data.map((item, index) => {
          return (
            <div key={item.id || index} className='box1'> {/* Use item.id if available */}
              <h2>{item.comments[0].user}</h2>
              <p>{item.comments[0].text}</p> {/* Display the actual comment text */}
              <p>{JSON.stringify(item.metadata)}</p>
            </div>
          );
        })}

        
      </div>
    </>
  );
}

export default App;
