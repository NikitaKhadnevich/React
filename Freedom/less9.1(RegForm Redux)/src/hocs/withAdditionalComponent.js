export const withAdditionalComponent = (Component) => (props) => {
  return (
    <>
      <Component {...props} />
      <p>Additional block</p>
    </>
  );
};
