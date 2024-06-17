import {Movie} from "./Movie.ts";

export interface Search {
    Search: Movie[];
    totalResults: string;
    Response: string;
}