export default function Home({ params }: { params: { id: string } }) {
  console.log(params);
  return <h2>app {params.id}</h2>;
}
