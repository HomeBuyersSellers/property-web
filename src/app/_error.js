
function ErrorPage({ statusCode }) {
  return (
    <div>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : 'An error occurred on the client'}
      </h1>
    </div>
  );
}

export async function getServerSideProps({ res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
}

export default ErrorPage;
