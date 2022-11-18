import { IGenre } from "./genre.interface";
import { ILanguage } from "./language.interface";
import { IProductionCompany } from "./production-company.interface";
import { IProductionCountry } from "./production-country.interface";
import { ICreator } from "./creator.interface";
import { ILastEpisode } from "./last-episode.interface";
import { INetwork } from "./network.interface";
import { ISeason } from "./season.interfacce";

export interface ITvShowDetails {
    backdrop_path: string;
    created_by: ICreator[];
    episode_run_time: number[];
    first_air_date: string;
    genres: IGenre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: ILastEpisode;
    name: string;
    next_episode_to_air: any;
    networks: INetwork[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    seasons: ISeason[];
    spoken_languages: ILanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number
}





