import React from 'react'
import axios from 'axios'
const baseUrl = 'https://mighty-badlands-73447.herokuapp.com';
 export default  class BaseService extends React.Component {
   
      postDataHeaderless(url,data) {
        data.createddDt=new Date();
        return axios.post(`${baseUrl}/${url}`,data);
      }
 }
