import React from 'react';
import Features from '../components/Features';

const WhyChooseUs = () => {

    const features = [
        {
            icon: '📦',
            title: 'One Platform for All Your Bills',
            description:
                'Pay electricity, gas, water, internet, and more — all from one place.',
        },
        {
            icon: '🔒⚡',
            title: 'Secure & Fast Payments',
            description:
                'Your transactions are protected with bank-level security and processed instantly.',
        },
        {
            icon: '💰🚫',
            title: 'No Extra Charges',
            description:
                'We never add hidden fees. What you see is what you pay.',
        },
        {
            icon: '🔔📅',
            title: 'Track & Get Reminders',
            description:
                'Never miss a due date again. Set reminders and track your payment history easily.',
        },
    ];


    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose BillEZ?
                </h2>
                <p className="opacity-70 font-black mb-12 max-w-2xl ">
                    A smarter way to manage utility bills — simple, secure, and stress-free.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => <Features key={index} feature={feature}></Features>)}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

