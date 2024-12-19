import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import { links, social } from "../../models/data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const {
	nav_center,
	nav_header,
	img_logo,
	toggle_btn,
	links_container,
	nav_links,
	show_container,
	social_links,
} = styles;

export default function Header() {
	const [showLinks, setShowLinks] = useState(false);
	return (
		<nav>
			<div className={nav_center}>
				<div className={nav_header}>
					<img src={logo} alt='logo' className={img_logo} />
					<button
						className={toggle_btn}
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>

				<div
					className={
						showLinks
							? `${links_container} ${show_container} `
							: `${links_container}`
					}
				>
					<ul className={nav_links}>
						{links.map(({ id, url, text }) => {
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className={social_links}>
					{social.map(({ id, url, icon }) => {
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
