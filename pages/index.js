import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Index() {
  return (
    <div>
      <Title>My page</Title>
    </div>
  );
}

export default Index;
