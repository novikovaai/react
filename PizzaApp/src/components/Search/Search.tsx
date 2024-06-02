import cn from 'classnames';
import style from './Search.module.css';
import { SearchProps } from './Search.props.ts';
import {forwardRef} from 'react';

const Search = forwardRef<HTMLInputElement, SearchProps>(
	function Input({isValid = true, className, ...props}, ref) {

		return (
			<div className={style['search_top']}>
				<input ref={ref} className={cn(style['search'], className, {
					[style['invalid']]: !isValid
				})} {...props}/>
				<img src={'/search-icon.svg'} className={style['search_icon']}/>
			</div>

		);
	}
);

export default Search;