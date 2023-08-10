import React from "react";

const Home = () => {
  return <wrapper classNmae="test">Home</wrapper>;
};

const wrapper = wrapper.section`
background-color:${({ theme }) => theme.color.bg};
width:30rem,
height:20rem
`;

export default Home;
