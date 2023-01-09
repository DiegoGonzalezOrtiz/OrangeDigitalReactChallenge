import { WebSite } from "../types";

const fetchMultiMedia = () : Promise<WebSite> => {
    return fetch('/api/multiMedia')
    .then(res=>res.json());
}

export default fetchMultiMedia;