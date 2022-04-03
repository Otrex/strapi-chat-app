import useStore from "../../hooks/useStore";

const Loading = () => {
  const { loadState } = useStore();
  return <>{loadState.loading ? <h1> Loading.... </h1> : <></>}</>;
};

export default Loading;
