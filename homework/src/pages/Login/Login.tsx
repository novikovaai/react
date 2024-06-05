import Form from "../../components/Form/Form.tsx";
import Heading from "../../components/Heading/Heading.tsx";

export function Login() {
    return <>
        <Heading>Вход</Heading>
        <Form
            type={'login'}
        />
        </>;
}