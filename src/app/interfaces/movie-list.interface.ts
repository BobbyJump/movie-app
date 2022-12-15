import { IMovie } from "./movie.interface";

export interface IMovieList {
    page: number;
    results: IMovie[];
    total_pages: number;
}