import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Card from './Card';

const HomeCard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/all-products`)
            .then(res => res.json())
            .then(data => {

                setItems(data);

            });
    }, []);
    return (
        <div> 
            <h1 className='text-center mt-12 text-4xl font-semibold'>
            Featured Products</h1>
            <h1 className='text-center mt-2'>Highlighting Outstanding Products for Your Inspiration</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-12 mx-[2%] sm:mx-[4%]">
                {
                    items.slice(0, 8).map(item => <Card
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default HomeCard;