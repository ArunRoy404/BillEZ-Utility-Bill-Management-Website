import React from 'react';
import Step from '../components/Step';

const HowItWorks = () => {
    const steps = [
        {
            icon: '🔐',
            title: 'Create Account',
            description:
                'Sign up in seconds using your email or Google account.',
        },
        {
            icon: '🧾',
            title: 'Add Your Bill',
            description:
                'Select the provider and enter your bill details.',
        },
        {
            icon: '💳',
            title: 'Pay Instantly',
            description:
                'Use your balance or card — fast & secure payments.',
        },
        {
            icon: '🔔',
            title: 'Track & Remind',
            description:
                'Set reminders and track your payment history easily.',
        },
    ];

    return (
        <section className="bg-white text-black py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                How It Works
            </h2>
            <p className="opacity-70 font-black  text-center mb-12 max-w-2xl mx-auto">
                Pay utility bills faster than ever — just follow these easy steps.
            </p>
            <div className="max-w-4xl mx-auto px-6 relative">
                <div className="line absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400"></div>

                {steps.map((step, index) => <Step key={index} step={step} index={index}></Step>)}

                <div className="text-center mt-16">
                    <a href="#_" className="relative bg-white inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-blue-400 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full font-bold text-lg ease">Get Started</span>
                        <span className="relative invisible font-bold">Button Text</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;