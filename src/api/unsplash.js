import axios from 'axios';

export default axios.create({

    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID i5KOd99hFiJfpWFh9dWk7aYDR_fpCEoYunX9jK_GHX4'
      }
});