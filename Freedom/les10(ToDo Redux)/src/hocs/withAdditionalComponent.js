export const withAdditionalComponent = (Component) => (props) => {
  return (
    <>
      <Component {...props} />
    </>
  );
};
