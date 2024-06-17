import {Await, useLoaderData} from "react-router-dom";
import {MovieFull} from "../../interfaces/MovieFull.ts";
import {Suspense} from "react";
import styles from './Movie.module.css';

export function Movie() {
      const data = useLoaderData() as { data: MovieFull };

        return <>
        <Suspense fallback={<>Загрузка...</>}>
            <Await resolve={data.data}>
                {({data}: {data: MovieFull}) => (
                    <p className={styles['movie']}>Movie - {data.Title}</p>
                )}
            </Await>
        </Suspense>
    </>;;
}