import React from 'react';
import { statsData } from '../utilities/data';
import StatCard from '../components/StatCard';

const Stats = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted by Thousands of Users Across Bangladesh
                </h2>
                <p className="text-lg font-bold opacity-70 max-w-2xl mx-auto mb-12">
                    Join a growing community of users who trust BillEZ for fast, secure, and hassle-free utility bill payments.
                </p>


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        statsData.map(data => <StatCard key={data.id} data={data}></StatCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;

