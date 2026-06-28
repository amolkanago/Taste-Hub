import React, { useEffect, useState } from 'react'
import './List.css'
import { url } from '../../assets/assets'
import { toast } from 'react-toastify';

const List = () => {

  const [list,setList] = useState([]);
  
  const fetchList = async () => {
    const response = await fetch(`${url}/api/food/list`)
    const responseData = await response.json();
    if(responseData.success)
    {
      setList(responseData.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await fetch(`${url}/api/food/remove`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: foodId
      })
    })
    const responseData = await response.json();
    await fetchList();
    if (responseData.success) {
      toast.success(responseData.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
        <p>All Foods List</p>
        <div className='list-table'>
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p className='cursor' onClick={()=>removeFood(item._id)}>x</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default List
