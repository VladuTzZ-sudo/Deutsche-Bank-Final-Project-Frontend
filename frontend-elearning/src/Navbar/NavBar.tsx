import styles from "./NavBar.module.css";
import NavbarBtn from "../NavbarBtn/NavbarBtn";

export default function NavBar(props: any) {
	const navBtns = props.links.map((link: any) => (
		<NavbarBtn text={link.text} href={link.linkUrl} />
	));

	return (
		<div className={styles["navbar"]}>
			<div className={`col ${styles["navbar-left"]}`}>
				<a href="/" className={styles["nav-left-part"]}>
					DB E-Learning App
				</a>
			</div>
			<div className={`col ${styles["navbar-right"]}`}>
				{/* <NavbarBtn text="Login" href="/" />
        <NavbarBtn text="Register" href="/" /> */}
				{navBtns}
			</div>
		</div>
	);
}
