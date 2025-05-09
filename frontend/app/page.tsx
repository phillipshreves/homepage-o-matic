'use client';

import {useState, useEffect} from 'react';

export default function Home() {
    return (
        <main className="min-h-screen p-8">
            <div className="gradient-bg fixed inset-0 -z-10"/>

            <div className="max-w-7xl mx-auto space-y-8">
                <header className="text-center">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Homepage-o-matic
                    </h1>
                    <p className="text-lg text-gray-500">
                        A tool to easily configure your homepage.
                    </p>
                </header>

                <div className="glass-card p-6 space-y-6"></div>
            </div>

            <footer className="mt-8 text-center text-sm text-gray-500 space-y-1">
                <p>Homepage-o-matic by Phillip Shreves</p>
                <p><a href="https://github.com/phillipshreves/homepage-o-matic">https://github.com/phillipshreves/homepage-o-matic</a></p>
                <p>Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0)</p>
            </footer>
        </main>
    );
}

