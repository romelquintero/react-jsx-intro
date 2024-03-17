function App() {
  return (
    <div>
      <Tweet
        name="Paul"
        username="-paul"
        date={new Date().toDateString()}
        message="Nice to be Front End Developer"
      />
      <Tweet
        name="Matthew"
        username="-matt"
        date={new Date().toDateString()}
        message="I love JavaScript"
      />
      <Tweet
        name="Mariah"
        username="-mariah"
        date={new Date().toDateString()}
        message="I love React"
      />
    </div>
  );
}
