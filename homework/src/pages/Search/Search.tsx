import Heading from "../../components/Heading/Heading.tsx";
import Paragraph from "../../components/Paragraph/Paragraph.tsx";
import Form from "../../components/Form/Form.tsx";
import MovieList from "../../components/MovieList/MovieList.tsx";

export function Search() {
    const toSearch = (info: string) => {
        console.log(info);
    };

    return <>
        <Heading>Поиск</Heading>
        <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
        <Form
            type={'search'}
            func={toSearch}
        />
        <MovieList/>
        </>;
}