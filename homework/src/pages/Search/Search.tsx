import Heading from "../../components/Heading/Heading.tsx";
import Paragraph from "../../components/Paragraph/Paragraph.tsx";
import Form from "../../components/Form/Form.tsx";
import MovieList from "../../components/MovieList/MovieList.tsx";
import {Movie} from "../../interfaces/Movie.ts";
import type {Search} from "../../interfaces/Search.ts";
import {useState} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../helpers/API.ts";
import {NotFound} from "../../components/NotFound/NotFound.tsx";
import style from '../../components/NotFound/NotFound.module.css';
import styles from "../../components/NotFound/NotFound.module.css";

export function Search() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const toSearch = async (request: string) => {
        try {
            setLoading(true);
            const {data} = await axios.get<Search>(`${PREFIX}&s=${request}`);
            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                throw data
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setError('Ошибка');
            setLoading(false);
            return;
        }
    };



    return <>
        <Heading>Поиск</Heading>
        <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
        <Form
            type={'search'}
            func={toSearch}
        />
        {error && <NotFound/>}
        {!loading && <MovieList movies={movies} />}
        {loading && <p className={styles['p']}>Загружаем фильмы...</p>}
        </>;
}