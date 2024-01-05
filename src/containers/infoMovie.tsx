import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMovie} from "../store/movieSlice";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchMovie} from "../store/moviesThunks";


const InfoMovie = () => {
    const movie = useAppSelector(selectMovie);
    const {id} = useParams() as {id:string};
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovie(id));
    }, [dispatch,id]);

    const movieHTML: {__html: string | TrustedHTML} | undefined = {__html: movie? movie.summary : ''};
    return (
        <>
            {movie && (
                <div className="d-flex m-5">
                    <div>
                        {movie.image ? (<img src={movie.image?.medium} alt="img"/>) :
                            <img src='https://imgs.search.brave.com/msPo427vI9GlRcyk2p-2_q_MCb44mDlBV6x_FSeScaU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk5LzkzLzMx/LzM2MF9GXzQ5OTkz/MzExN19aQVVCZnYz/UDFIRU9zWkRybmti/TkN0NGpjM0FvZEFy/bC5qcGc' alt='img'/>}
                    </div>
                    <div>
                        <h4>{movie.name}</h4>
                        <ul>{movie.genres.map(item => (
                            <li key={Math.random()}>{item}</li>
                        ))}</ul>
                        <p>{movie.language}</p>
                        <p>{movie.premiered}</p>
                        <div dangerouslySetInnerHTML={movieHTML}></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InfoMovie;