export default function Page({ params }: { params: { game: string } }) {
  return <div>My Post: {params.game}</div>;
}
