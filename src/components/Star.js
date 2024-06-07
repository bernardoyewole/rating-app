import { FaStar } from "react-icons/fa";

function Star({ updateRating, index, classProp }) {
    const handleClick = () => {
        updateRating(index);
        // console.log(index);
    }

    return (
        <FaStar className={classProp} onClick={handleClick} />
    )
}

export default Star