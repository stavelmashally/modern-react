import { Link as RLLink, LinkProps } from '@tanstack/react-location';

interface Props extends LinkProps {}

const getActiveStyle = () => ({
  className: 'active',
});

export const Link = ({ ...props }: Props) => {
  return <RLLink {...props} getActiveProps={getActiveStyle} />;
};
