import { ITvShow } from "./tv-show.interface";

export interface ITvShowList {
    page: number;
    results: ITvShow[];
}