import { FormHTMLAttributes} from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    func?: (info: string) => void,
    type: 'search' | 'login'
}