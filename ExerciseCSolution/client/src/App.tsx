import { StrictMode, useEffect, useRef } from 'react';
import { WsClientProvider } from "ws-request-hook";
import CollaborativeWhiteboard from "./CollaborativeWhiteboard";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const clientIdRef = useRef(uuidv4());
    const clientId = clientIdRef.current;

    useEffect(() => {
        console.log("Client ID generated: " + clientId);
    }, [clientId]);

    return (
        <StrictMode>
            <WsClientProvider url={`ws://localhost:8181?id=${clientId}`}>
                <div className="min-h-screen bg-gray-50">
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-4 px-4">
                            <h1 className="text-2xl font-bold text-gray-900">
                                Collaborative Whiteboard
                            </h1>
                        </div>
                    </header>

                    <main className="max-w-7xl mx-auto py-6 px-4">
                        <CollaborativeWhiteboard />
                    </main>

                    <footer className="bg-white shadow mt-auto">
                        <div className="max-w-7xl mx-auto py-4 px-4 text-center text-gray-600">
                            Collaborative Drawing App
                        </div>
                    </footer>
                </div>
            </WsClientProvider>
        </StrictMode>
    );
}