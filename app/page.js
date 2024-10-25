// components/Layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Homepage from "@/components/HomePage";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Homepage></Homepage>
            <Footer />
        </div>
    );
};

export default Layout;
