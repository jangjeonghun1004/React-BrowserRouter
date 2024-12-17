import { useParams, useLocation } from "react-router-dom";

const about = () => {
    const {id} = useParams();
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const keyword = queryParam.get('keyword');

    return (
        <>
            <p>this is a about page.</p>
            <p>id = {id} by useParams</p>
            <p>query value = {keyword}</p>
        </>
    );
}

export default about