import { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  if (!food_list) return <p>Loading...</p>;
  
  return (
    <div className='food-display'>
      <h2>Top dishes near you</h2>

      <div className='food-display-list'>
        {food_list
          .filter(item => category === "All" || category === item.category)
          .map(item => (
            <FoodItem key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default FoodDisplay
