import Star from "./Star";
import { useState } from 'react';

function StarRating({ ratingWords }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const updateRating = (index) => {
        setSelectedIndex(index);
    }

    return (
        <div>
            <div>
                {ratingWords.map((ratingWord, index) => (
                    <Star
                        key={index}
                        index={index}
                        updateRating={updateRating}
                        classProp={index <= selectedIndex ? 'selected' : 'not-selected'}
                    >
                    </Star>
                ))}
            </div>
            <h2>{selectedIndex >= 0 ? ratingWords[selectedIndex] : ''}</h2>
        </div>
    )
}

export default StarRating