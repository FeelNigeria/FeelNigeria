import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <>
            {/* <Spinner /> */}
            <TopBar />
            {/* <NavBar /> */}
            {/* <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">About Us</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">About</li>
                    </ol>
                </div>
            </div> */}
            {/* Add About content here */}
            <Footer />
        </>
    );
};

export default About;