import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean,
    img: string,
    type: string,
}