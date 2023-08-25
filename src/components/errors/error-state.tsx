export default function ErrorState({ error }: { error: string }) {
  return (
    <div className="error-state">
      <p>{error}</p>
      <p>Check your internet connection and try again.</p>
    </div>
  );
}
