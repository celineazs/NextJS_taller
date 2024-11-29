"use client";
import { AcademicCapIcon, LightBulbIcon, PencilIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
interface SidebarProps {
    onFilterChange: (filterId: number) => void;
}

const Sidebar = ({ onFilterChange }: SidebarProps) => {
    const categories = [
        { id: 0, label: "Todo", color: "bg-pink-300", icon: <AcademicCapIcon className="h-6 w-6" /> },
        { id: 1, label: "Ideas", color: "bg-pink-700", icon: <LightBulbIcon className="h-6 w-6" /> },
        { id: 2, label: "Pendientes", color: "bg-pink-300", icon: <PencilIcon className="h-6 w-6" /> },
        { id: 3, label: "Hechas", color: "bg-pink-700", icon: <CheckCircleIcon className="h-6 w-6" /> },
    ];

    const handleFilterClick = (filterId: number) => {
        onFilterChange(filterId);
    };

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-pink-400 to-pink-500 text-white p-8 rounded-xl shadow-2xl space-y-8">
            <div className="flex items-center space-x-4 border-b-2 border-white pb-6 mb-6">
                <svg
                    className="w-10 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504-1.125-1.125-1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                    />
                </svg>
                <p className="text-3xl font-bold">Mis notas</p>
            </div>

            <div className="flex flex-col space-y-5">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleFilterClick(category.id)}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-lg hover:bg-white hover:text-pink-500 transition-all"
                    >
                        <span
                            className={`${category.color} rounded-full p-2 shadow-md`}
                        >
                            {category.icon}
                        </span>
                        <span>{category.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

