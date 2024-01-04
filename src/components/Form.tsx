import {useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import {fetchSearchMovies} from "../store/moviesThunks";
import MovieList from "./MovieList";

const Form = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>('');
    const onChangeInput = (name: string) => {
        if(name.length >= 3) {
            dispatch(fetchSearchMovies(name));
        }
        setValue(name);
    };
    return (
        <div className="d-flex flex-column col-4 m-4">
            <form className="d-flex" role="search">
                <input
                    className="form-control m-2"
                    type="search"
                    placeholder="search"
                    aria-label="Search"
                    value={value}
                    onChange={(e) => onChangeInput(e.target.value)}
                />
            </form>
            <MovieList searchData={value}/>
        </div>
    );
};

export default Form;