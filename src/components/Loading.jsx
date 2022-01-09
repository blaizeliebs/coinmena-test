import styled, { keyframes } from 'styled-components';

const skeletonShimmer = keyframes`
	0% { background-position: 100% 0; }
	100% { background-position: -100% 0; }
`;

const Loader = styled.div`
    animation: ${skeletonShimmer} 2s linear infinite;
    background: #f6f7f8;
    background: linear-gradient(to right, #212529 8%, #161B22 18%, #212529 33%);
    background-size: 275% 104px;
    border-radius: 20px;
    margin: 0 auto 5px;
    float: left;
    width: ${({ smallHeader }) => (smallHeader ? 20 : 100)}%;
    height: ${({ height }) => (height ? height : 15)}px;
    margin-top: ${({ larger }) => (larger ? 20 : 0)}px;
}`;

const LoaderContent = styled.div`
  width: 100%;
  float: left;
  height: 300px;
  margin-top: 10px;
`;

const Loading = () => (
  <LoaderContent>
    <Loader smallHeader height='40' />
    <Loader height='30' />
    <Loader />
    <Loader />
    <Loader larger height='30' />
    <Loader />
    <Loader />
    <Loader larger height='30' />
    <Loader />
    <Loader />
  </LoaderContent>
);

export default Loading;
