import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: red;
`;

const ButtonLink = styled(Link)`
  background: red;
`;

export { ButtonLink };
export default Button;
