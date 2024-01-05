
import {useAppSelector} from "../app/hooks";
import {selectFetchLoading, selectMoviesList} from "../store/movieSlice";
import {NavLink} from "react-router-dom";
import React from "react";
import Spinner from "./Spinner";

interface Props {
    searchData: string;
}
const MovieList: React.FC<Props> = ({searchData}) => {
    const moviesLoading = useAppSelector(selectFetchLoading);
    const movieList = useAppSelector(selectMoviesList);
    return (
        <>
            {moviesLoading ? <Spinner/> : movieList && searchData && (
                <div className="m-2">
                    <ul className="list-group">
                        {movieList.map((movie, index) => (
                            <li className="list-group-item" aria-disabled="true" key={index}>
                                <NavLink to={'/shows/' + movie.id}>{movie.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>

    );
};

export default MovieList;