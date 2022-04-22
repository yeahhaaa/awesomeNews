import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  border-bottom: 1.5px solid lightgray;
  &:hover {
    color: gray;
  }
  p {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  } ;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <p>For Papa</p>
        <h1>Awesome News</h1>
      </HeaderBlock>
    </>
  );
};

export default Header;
