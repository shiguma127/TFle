import { Center, Link, Divider } from "@chakra-ui/react";
const Header: React.VFC = () => {
  return (
    <div className="header">
      <Center>
        <Link fontSize="6xl" style={{ textDecoration: "none" }}>
          TFle
        </Link>
      </Center>
      <Divider />
    </div>
  );
};

export default Header;
