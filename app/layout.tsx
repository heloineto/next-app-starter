import { ReactNode } from 'react';
import './globals.css';

interface Props {
    children: ReactNode;
}

function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head />
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
