import {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useLayoutEffect,
    useReducer,
    useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";

const asyncReducer = (state, action) => {
    switch (action.type) {
        case "pending":
            return {
                ...state,
                status: "pending",
            };
        case "resolved":
            return {
                ...state,
                status: "resolved",
                data: action.datas,
            };
        case "rejected":
            return {
                ...state,
                status: "rejected",
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type ${action.type}`);
    }
};
// Either memoize the asyncCallBack or importing the asyncCallback ensures stability of the function across every render which is not we wanted to do
const useAsync = (initialState = {}, asyncCallBack) => {
    const [state, dispatch] = useReducer(asyncReducer, initialState);
    useLayoutEffect(() => {
        dispatch({ type: "pending" });
        const promise = asyncCallBack();
        promise
            .then((postsData) => {
                return postsData.json();
            })
            .then((res) => {
                // console.log(data);
                dispatch({ type: "resolved", datas: [...res.todos] });
                // setPosts((prevPosts) => [...prevPosts, ...data.todos]);
            })
            .catch((er) => {
                // console.log("ERROR", er.message);
                dispatch({ type: "rejected", error: er.message });
                // setError(error);
            });
    }, [asyncCallBack]);
    return state;
};

const Posts = forwardRef(function Posts(props, ref) {
    const containerRef = useRef();
    const initialState = {
        status: "pending",
        data: [],
        error: null,
    };
    const scrollToTop = () => {
        containerRef.current.scrollTop = 0;
    };

    useImperativeHandle(ref, () => ({
        scrollToTop,
    }));
    const memoizedCallBack = useCallback(() => {
        return fetch("https://dummyjson.com/todos");
    }, []);
    const { status, data, error } = useAsync(initialState, memoizedCallBack);
    const postsList = data.map((post) => {
        const idForItem = uuidv4();
        return <li key={idForItem}> {post.todo} </li>;
    });

    if (status === "pending") {
        return <h2>Fetching posts</h2>;
    } else if (status === "resolved") {
        return (
            <div
                ref={containerRef}
                className="postlist-container"
                style={{ overflowY: "scroll", height: "350px" }}
            >
                <h1>Posts list</h1>
                <ul> {postsList}</ul>
            </div>
        );
    } else if (status === "rejected") {
        return <p>Oops ran out !!! {error}</p>;
    }
});
export default Posts;
