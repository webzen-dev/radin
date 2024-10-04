import Image from "next/image";
import Link from "next/link";
import logo from "../../public/ret.png"
const custom404 = () => {
  return (
    <div className="undefind">
      <div className="box">
        <h2>404</h2>
        <span>Undefind this page :)</span>
        <Link href={"/"}> go Home Page</Link>
      </div>
        <Image src={logo} alt="logo image" className="logo"/>
    </div>
  );
};

export default custom404;
