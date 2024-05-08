export const Parent = ({ children }) => {
  //   console.log("children parent", children);
  //   console.log(`children.props`, children.props);

  const handleClick = () => {
    console.log(`children.props`, children.props);
    // children.props.onNotify("hola desde adentro");
    const {
      props: { onNotify },
    } = children;
    if (onNotify) {
      onNotify("hola desde el parent");
    }
  };

  return (
    <>
      <h1>Parent</h1>
      {children}
      <button onClick={handleClick}>acción del padre</button>
    </>
  );
};
