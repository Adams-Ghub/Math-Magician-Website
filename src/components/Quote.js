import { useEffect, useState } from 'react';
import styles from '../css/Quote.module.css';

function Quote() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'xCLkSI42UwwiL0aUBSRxdg==cm9h7DS0qcaBr11g',
          },
        });

        const data = await request.json();
        setInfo(data[0].quote);
        setIsLoading(false);
      } catch (error) {
        setHasError(error);
      }
    };
    fetchData();
  }, [setInfo, setIsLoading]);

  if (hasError) {
    return (
      <div className={styles['error-container']}>
        Error!!! Something went wrong
      </div>
    );
  }

  if (isLoading) return <div className={styles['loading-container']}>Loading...</div>;

  return (
    <div className={styles['major-container']}>
      {info}
    </div>

  );
}
export default Quote;
