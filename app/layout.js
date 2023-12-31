"use client";
import NavBar from "@/components/NavBar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import useLayoutStore from "@/store/UseLayoutStore";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
	const { showLayout } = useLayoutStore();

	return (
		<html lang="en">
			<body>
				{showLayout && (
					<header>
						<NavBar />
					</header>
				)}
				<main>{children}</main>
				{showLayout && <Footer />}
			</body>
		</html>
	);
}
