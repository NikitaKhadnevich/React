import styled from 'styled-components';

import { withAdditionalComponent } from '../../hocs/withAdditionalComponent';

export const StyledHeaderWrapper = styled.header`
  margin: 10px;
  padding: 20px;
  width: 100%;
  background: orange;
  position: relative;

  > .header__title {
  }

  * {
    padding: 10px;
    border: 1px solid red;
  }

  &:hover {
    background-color: brown;
  }

  &::before {
    position: absolute;
    content: ' ';
    width: 100%;
    height: 20px;
    background-color: red;
  }
`;

export const StyledTitle = styled.h1``;

function Header({ count }) {
  return (
    <StyledHeaderWrapper>
      <StyledTitle className='header__title'>Title</StyledTitle>
      <p>
        Text
        <span>Sub text</span>
      </p>
      <p>{count}</p>
    </StyledHeaderWrapper>
  );
}

export default withAdditionalComponent(Header);
