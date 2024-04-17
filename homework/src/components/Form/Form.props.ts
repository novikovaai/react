import { FormHTMLAttributes} from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    func?: () => {}
    type: 'search' | 'login'
}