import { createMemoryHistory, createBrowserHistory } from "history";

//  process.env.NODE_ENV === 'test'? createMemoryHistory():
const history = createBrowserHistory();

export default history;
