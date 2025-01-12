import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

// now we can easily create custom hooks to fetch data
const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;