export const getStaticPaths = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default Details;
