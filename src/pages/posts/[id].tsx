import { fetchData } from '../../api';

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const post = await fetchData(`posts/${id}`);
  return {
    props: { post,},
  };
}

export default function postDetail({ post }: { post: { id: number; title: string; body: string } }) {
  return (
    <div>
      <h1 >{post.title}</h1>
      <p >{post.body}</p>
      <p >ID : {post.id}</p>
    </div>
  );
}
