import { getCache, setCache } from "../common/cache";

export const index = (req, res, next) => {
    let message = 'read content from cache';
    let content = getCache('cache');
    if(!content) {
        setCache('cache', 'this is cache content', 10);
        message = 'no cache available';
    }
  res.status(200).send(message);
}
