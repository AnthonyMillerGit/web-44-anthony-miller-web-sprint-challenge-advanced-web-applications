import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'

import {axiosWithAuth} from '../helpers/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const history = useHistory()

  useEffect(() => {
    axiosWithAuth().get('/colors')
    .then(res => {
        console.log(res.data)
        setColorList(res.data)
        history.push('/bubble-page')
    })
    .catch(err => {
        console.log(err)
        history.push('/')
    })
}, [])

  return (
    <div>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
