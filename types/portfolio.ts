export type Author = {
    name: string;
    image: string;
    bio?: string;
    _id?: number | string;
    _ref?: number | string;
  };
  
  export type Portfolio = {
    _id: number;
    title: string;
    slug?: any;
    // tag:string;
    urlLink?:any;
    metadata?: string;
    body?: string;
    mainImage?: any;
    author?: Author;
    tags: string[];
     systemTags: string[];
    platformsTag: string[];
    publishedAt?: string;
  };
   
