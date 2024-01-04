
import {useAppSelector} from "../app/hooks";
import {selectMoviesList} from "../store/movieSlice";
import {NavLink} from "react-router-dom";
import React from "react";

interface Props {
    searchData: string;
}
const MovieList: React.FC<Props> = ({searchData}) => {

    const movieList = useAppSelector(selectMoviesList);
    return (
        <>
            {movieList && searchData && (
                <div className="m-2">
                    <ul className="list-group">
                        {movieList.map(movie => (
                            <NavLink to={'shows/' + movie.id}>{movie.name}</NavLink>
                        ))}
                    </ul>
                </div>
            )}
        </>

    );
};

export default MovieList;