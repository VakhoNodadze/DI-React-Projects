import React, { useState, useEffect } from 'react';

import API from '../../services/API';

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      // const response = await API.post('/products', {
      //   page_size: 10,
      //   page_number: 1,
      //   keyword: 'samsung',
      // });
      const response = await API.get('/product/4421');
    }

    fetchData();
  }, []);

  return <h1 style={{ color: '#000' }}> Dashboard</h1>;
};

export default Dashboard;
