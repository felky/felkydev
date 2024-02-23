export interface IPost {
    id: number;
    title: string;
    date: string;
    rating: string;
    content: string[];
    heroImage: string;
}

export interface IPosts {
    posts: IPost[]
}