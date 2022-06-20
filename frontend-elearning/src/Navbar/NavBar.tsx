import "./NavBar.css";
import NavbarBtn from "../NavbarBtn/NavbarBtn";

export default function NavBar(props: any) {
  const navBtns = props.links.map((link: any) => (
    <NavbarBtn text={link.text} href={link.linkUrl} />
  ));

  return (
    <div className="navbar">
      <div className="col navbar-left">
        <a href="/" className="nav-left-part">
          DB E-Learning App
        </a>
      </div>
      <div className="col navbar-right">
        {/* <NavbarBtn text="Login" href="/" />
        <NavbarBtn text="Register" href="/" /> */}
        {navBtns}
      </div>
    </div>
  );
}
