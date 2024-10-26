import Header from "@/components/Header"; // Adjust the path if necessary
import Footer from "@/components/Footer"; // Adjust the path if necessary

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
