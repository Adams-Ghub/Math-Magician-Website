import { useEffect, useState } from 'react';
import '../css/quote.css';

function Quote() {
  const [info, setInfo] = useState({
    loading: 'loading...',
    error: null,
    quote: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'xCLkSI42UwwiL0aUBSRxdg==cm9h7DS0qcaBr11g',
          },
        });

        const data = await request.json();
        setInfo({ ...info, quote: data[0].quote });
      } catch (error) {
        setInfo({ ...info, error });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="major-container">
      {info.error || info.quote || info.loading}
    </div>

  );
}
export default Quote;
