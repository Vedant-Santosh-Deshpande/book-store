import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
    <>
        <Navbar/>
        <div className="bg-pink-50 py-16 px-6 md:px-12 mt-15">
            <div className="max-w-6xl mx-auto text-center">
                <div className="text-4xl font-bold text-pink-500">About Us</div>
                <p className="pt-5 text-gray-600 text-lg">
                    Welcome to <span className="font-semibold">bookStore</span>, your go-to platform for curated courses and insightful book discussions. 
                    Our mission is to ignite the love of learning by offering expert resources, engaging content, and a thriving community of readers and writers.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">Expert-Curated Courses</h3>
                    <p className="mt-2 text-gray-600">
                        Our courses are designed by industry experts to help you explore literature, improve writing, and dive into insightful discussions.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">Community of Readers</h3>
                    <p className="mt-2 text-gray-600">
                        Connect with passionate readers and aspiring writers. Share your thoughts, engage in discussions, and enhance your storytelling skills.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">Your Learning, Your Way</h3>
                    <p className="mt-2 text-gray-600">
                        Learn at your own pace with flexible courses. Whether you're a beginner or an expert, there's something for everyone.
                    </p>
                </div>
            </div>
        </div>
    </>
        
    );
};

export default About;
