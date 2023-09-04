import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/actions";

function Filter() {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);

    const handleFilterButtonClick = () => {
        setIsLiked(!isLiked);
        dispatch(setFilter(isLiked ? "all" : "liked"));
    };

    return (
        <div className="filter">
            <button onClick={handleFilterButtonClick}>
                {isLiked ? "All" : "Liked"}
            </button>
        </div>
    );
}

export default Filter;