import {useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import {fetchSearchMovies} from "../store/moviesThunks";

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
        <div>
            <form className="d-flex col-3" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="search"
                    aria-label="Search"
                    value={value}
                    onChange={(e) => onChangeInput(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Form;