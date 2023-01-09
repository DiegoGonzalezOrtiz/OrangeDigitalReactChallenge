export interface WebSite {
    PagenName: string;
    UserDetails?: (UserDetailsEntity)[] | null;
    VideoDetails?: (VideoDetailsEntityOrPicturesDetailsEntity)[] | null;
    PicturesDetails?: (VideoDetailsEntityOrPicturesDetailsEntity)[] | null;
  }
   interface HeaderInfo {
    hidden: boolean;
    UserDetails?: (UserDetailsEntity)[] | null;
  }
  interface UserDetailsEntity {
    name?: string;
    description?: string;
    image?: string;
  }
  export interface VideoDetailsEntityOrPicturesDetailsEntity {
    name: string;
    url: string; 
    description: string;
  }

  export = UserDetailsEntity;
  export = HeaderInfo;


  