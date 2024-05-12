import Container from "./Container";
import Footer from "./Footer";
import "98.css";

const Component: React.FC<X> = ({ children }) => {
  return (
    <div className="font-sans">
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Component;
