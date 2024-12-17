import { Link, useNavigate } from "react-router-dom";

function home() {
    const navigate = useNavigate();

    return (
        <>
            this is a home page.
            <br/><br />

            <Link to={'/about'}>link to about</Link>
            <br/><br />

            <button onClick={() => navigate('/about/1')}>useNavigate</button>
            <br/><br />

            <Link to={'/about?keyword=allnew'}>Query Params</Link>
            <br/><br/>

            <a href="/test">하이퍼링크의 경우 페이지 새로 고침 현상이 발생한다.</a>
        </>
    );
}

export default home