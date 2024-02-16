export interface PersonalInfo{
    FullName : string;
    SheridanEmail: string;
    SheridanLogin: string;
    SheridanID: string;
    HomeCountry: string;
    CurrCity: string;
    MovieFav: string;
    BookFav: string;

}

export interface NoblePrizes{
    year: string;
    category: string;
    laureates: (Laureates)[];
}

export interface Laureates{
    id: string;
    firstname: string;
    surname: string;
    motivation: string;
    share: string;
}