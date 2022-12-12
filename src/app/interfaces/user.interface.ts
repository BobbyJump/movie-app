import { IMovie } from "./movie.interface";
import { ITvShow } from "./tv-show.interface";

export interface IUser {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}