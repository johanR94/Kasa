import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children} {/* Affichage des enfants (les routes) */}
      <Footer />
    </>
  );
}
