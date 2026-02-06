import React from "react";
import { Button } from "./ui/button";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={onClose}
    >
        <div
        className="relative w-full max-w-md bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
        >
        <Button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl font-bold transition-colors"
            onClick={onClose}
            aria-label="Close modal"
        >
            ×
        </Button>

        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>

        <form className="space-y-4">
            <div>
            <input
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <Button
            type="submit"
            className="w-full hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium"
            >
            Sign In
            </Button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
            Sign up
            </a>
        </p>
        </div>
    </div>
    );
};

export default LoginModal;