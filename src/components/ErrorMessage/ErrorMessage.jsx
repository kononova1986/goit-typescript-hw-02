export default function ErrorMessage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <p style={{ fontWeight: '700px', fontSize: '24px' }}>
        Oops something went wrong, please reload the page!
      </p>
    </div>
  );
}
