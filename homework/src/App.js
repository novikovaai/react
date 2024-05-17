import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import Form from './components/Form/Form';
import Menu from './layouts/Menu/Menu';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import MovieList from './components/MovieList/MovieList';
import { UserContextProvider } from './context/user.context';
function App() {
    const data = {
        mainPage: {
            title: 'Поиск',
            text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
    };
    const toSearch = (info) => {
        console.log(info);
    };
    return (_jsx(UserContextProvider, { children: _jsxs(_Fragment, { children: [_jsxs(Menu, { children: [_jsx(Navigation, {}), _jsx(Profile, {})] }), _jsx(Heading, { children: data.mainPage.title }), _jsx(Paragraph, { children: data.mainPage.text }), _jsx(Form, { type: 'search', func: toSearch }), _jsx(Form, { type: 'login' }), _jsx(MovieList, {})] }) }));
}
export default App;
