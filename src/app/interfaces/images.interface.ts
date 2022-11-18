import { IImage } from "./image.interface";

export interface IImages {
    id: number;
    backdrops: IImage[];
    posters: IImage[];
}