import { motion } from "framer-motion";
import { Book, Kanban, PenTool, Users, User, Star, TrendingUp, Lightbulb, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/LearnSpace logo.png";


export default function Home() {
    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Computer Science Student",
            content: "LearnSpace transformed how I organize my study materials. The Kanban board keeps me on track with all my assignments.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Williams",
            role: "Self-Taught Developer",
            content: "The BookSpace feature helped me discover amazing programming resources I never knew existed. Highly recommended!",
            rating: 5
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Product Manager",
            content: "As someone juggling multiple projects, the Whiteboard feature is invaluable for brainstorming and planning.",
            rating: 4
        }
    ];

    // Statistics data
    const stats = [
        { value: "10K+", label: "Active Users" },
        { value: "500+", label: "Resources" },
        { value: "50+", label: "Contributors" },
        { value: "4.8", label: "Average Rating" }
    ];

    // Features data
    const features = [
        {
            icon: <Kanban className="w-8 h-8" />,
            title: "Kanban Board",
            description: "Organize your tasks with drag-and-drop simplicity. Visualize your workflow and boost productivity."
        },
        {
            icon: <Book className="w-8 h-8" />,
            title: "BookSpace",
            description: "Access curated learning resources and books categorized by topics and difficulty levels."
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "Whiteboard",
            description: "Brainstorm ideas visually with our collaborative whiteboard tool. Perfect for planning and creativity."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community",
            description: "Connect with fellow learners and contributors. Share knowledge and grow together."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Progress Tracking",
            description: "Monitor your learning journey with detailed analytics and achievement badges."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Smart Recommendations",
            description: "Get personalized learning suggestions based on your interests and progress."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            {/* Navbar */}
            <nav className="flex justify-between px-6 md:px-10 py-6 items-center bg-white shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img src={Logo} alt="LearnSpace logo" className="w-10 h-10 object-contain" />
                    <h1 className="text-2xl font-bold text-indigo-600">LearnSpace</h1>
                </div>

                <div className="hidden md:flex gap-6 lg:gap-8 text-lg">
                    <Link to="/" className="text-indigo-600 font-medium">Home</Link>
                    <Link to="/kanban" className="hover:text-indigo-600 transition-colors">Kanban</Link>
                    <Link to="/books" className="hover:text-indigo-600 transition-colors">BookSpace</Link>
                    <Link to="/whiteboard" className="hover:text-indigo-600 transition-colors">Whiteboard</Link>
                    <Link to="/contributors" className="hover:text-indigo-600 transition-colors">Contributors</Link>
                    <Link to="/owner" className="hover:text-indigo-600 transition-colors">About</Link>
                </div>

                <div className="md:hidden">
                    <button className="text-gray-600 hover:text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-10 md:mt-20 px-4"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                    Your Personal Learning & <br className="hidden md:block" />
                    <span className="text-indigo-600">Productivity Hub</span>
                </h2>
                <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                    Organize your tasks, learn efficiently, and collaborate effortlessly with our all-in-one platform designed for modern learners.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link
                            to="/kanban"
                            className="px-8 py-4 bg-indigo-600 text-white rounded-xl shadow-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Enter Workspace
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link
                            to="/books"
                            className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl shadow-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
                        >
                            Explore Resources
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <div className="mt-16 md:mt-24 bg-indigo-600 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center text-white"
                            >
                                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                                <div className="text-lg md:text-xl mt-2">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 md:mt-24 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Powerful Features for Modern Learners</h2>
                        <p className="text-xl text-gray-600 mt-4">
                            Everything you need to organize, learn, and grow in one unified platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all"
                            >
                                <div className="bg-indigo-100 p-4 rounded-full text-indigo-600">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mt-6">{feature.title}</h3>
                                <p className="text-gray-600 mt-3">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-20 md:mt-24 bg-gray-50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Users Say</h2>
                        <p className="text-xl text-gray-600 mt-4">
                            Join thousands of satisfied learners who transformed their study habits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg"
                            >
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mt-4 italic">"{testimonial.content}"</p>
                                <div className="mt-6 flex items-center">
                                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                                        <span className="text-indigo-800 font-bold">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 md:mt-24 bg-gradient-to-r from-indigo-500 to-purple-600 py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Learning?</h2>
                    <p className="text-xl text-indigo-100 mt-4 max-w-3xl mx-auto">
                        Join our community of learners and start organizing your educational journey today.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mt-10"
                    >
                        <Link
                            to="/kanban"
                            className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-xl shadow-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Started Now
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Feature Highlights Section */}
            <div className="mt-20 md:mt-24 px-4 md:px-8 pb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center text-indigo-600 mb-4">
                                <Globe className="w-6 h-6 mr-2" />
                                <span className="font-semibold">COLLABORATIVE LEARNING</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Learn Together, Grow Faster</h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Connect with peers, share resources, and collaborate on projects. Our platform fosters a community-driven approach to learning where everyone contributes to collective growth.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-green-100 rounded-full p-2 mt-1">
                                        <Award className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="ml-4 text-gray-700">Peer-reviewed study materials</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 rounded-full p-2 mt-1">
                                        <Award className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="ml-4 text-gray-700">Collaborative project spaces</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 rounded-full p-2 mt-1">
                                        <Award className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="ml-4 text-gray-700">Knowledge sharing forums</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="bg-white rounded-full p-6 inline-block shadow-lg">
                                    <Users className="w-16 h-16 text-indigo-600 mx-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mt-6">Community Driven</h3>
                                <p className="text-gray-600 mt-2">Join 500+ contributors shaping the future of learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-6 md:mb-0">
                            <img src={Logo} alt="LearnSpace logo" className="w-10 h-10 object-contain" />
                            <h1 className="text-2xl font-bold text-white">LearnSpace</h1>
                        </div>
                        <div className="flex gap-8 text-lg">
                            <Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link>
                            <Link to="/kanban" className="hover:text-indigo-300 transition-colors">Kanban</Link>
                            <Link to="/books" className="hover:text-indigo-300 transition-colors">BookSpace</Link>
                            <Link to="/contributors" className="hover:text-indigo-300 transition-colors">Contributors</Link>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400">
                        © {new Date().getFullYear()} LearnSpace • Built with passion for learners worldwide
                    </div>
                </div>
            </footer>
        </div>
    );
}