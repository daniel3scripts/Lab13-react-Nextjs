import { useRouter } from "next/router";
const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    return ( <
        div >
        <
        h1 > Posts < /h1> <
        p > ID: { id } < /p> < /
        div >
    )

}
export default Post;