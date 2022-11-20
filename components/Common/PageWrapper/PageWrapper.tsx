import { deviceWidthQuery } from '@/constants/styles';
import styled from 'styled-components'

const PageWrapper = styled.main`
  padding: 25px;
  background-image: url('images/background.png');
  height: 100%;
  background-size: 100% 100%;

  @media ${deviceWidthQuery.tablet} {
    padding: 50px;
  }
`;

export default PageWrapper
