import axios from 'axios';

const KEY = "AIzaSyDkXSn-T3f7dnD4V2wIhSigtojX2wlsyaw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
