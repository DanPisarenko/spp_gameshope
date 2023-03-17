import {useState, useEffect} from 'react'
import {getCards} from "../api.js"
import Card from "./Card"
import './style_comps.css'


export default function Catolog() {

    const [pords, setProds] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);


useEffect(() => {
    const setNewCards = async () => {
        let res = await getCards();
        setIsLoaded(true);
        console.log(res);
        setProds(res);
    };
    setNewCards();
}, []);


if (!isLoaded) {
    return(
<div className='loading_block'>
  <div className='bb'>
    <h2>Пожалуйста подождите, данные загружаются</h2>
    <p>Примечание: Данные могут загружаются примерно 20 сек-1 мин.</p>
  </div>
</div>
    );
  } else {
    return (
        <div className="cards_main">
        <div className="ff">

        {pords.map((el, index) => {return <Card key={index} prod={el}/>})}
      </div>
      </div>
    );
  }



}