import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

const styles = {
    starStyle: {
        color: 'orange'
    }
}

const Rating = (props) => {
    const [rating, setRating] = useState(props.rating);
    return (
        <div style={styles.starStyle}>
            <h1>Rating: {rating}</h1>
            {
                rating >= 1 ? (
                    <IoIosStar className='text-warning' onClick={() => setRating(1)} />
                ) : (
                    <IoIosStarOutline onClick={() => setRating(1)} />
                )
            }
            {
                rating >= 2 ? (
                    <IoIosStar className='text-warning' onClick={() => setRating(2)} />
                ) : (
                    <IoIosStarOutline onClick={() => setRating(2)} />
                )
            }
            {
                rating >= 3 ? (
                    <IoIosStar className='text-warning' onClick={() => setRating(3)} />
                ) : (
                    <IoIosStarOutline onClick={() => setRating(3)} />
                )
            }
            {
                rating >= 4 ? (
                    <IoIosStar className='text-warning' onClick={() => setRating(4)} />
                ) : (
                    <IoIosStarOutline onClick={() => setRating(4)} />
                )
            }
            {
                rating >= 5 ? (
                    <IoIosStar className='text-warning' onClick={() => setRating(5)} />
                ) : (
                    <IoIosStarOutline onClick={() => setRating(5)} />
                )
            }
        </div>
    );
}

export default Rating;