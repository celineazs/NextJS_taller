"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { NoteData } from "./types/Note";
import NoteList from "./components/note-list/NoteList";
import Sidebar from "./components/sidebar/Sidebar";
import { PlusIcon } from '@heroicons/react/20/solid';

export default function Home() {
    const [notes, setNotes] = useState<NoteData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterId, setFilterId] = useState<number>(0);

    useEffect(() => {
        const fetchNotes = async () => {
            setIsLoading(true);
            const query = supabase
                .from("notes")
                .select("*")
                .order("created_at", { ascending: false });

            if (filterId !== 0) query.eq("category", filterId);

            const { data, error } = await query;

            if (error) {
                console.error("Error fetching notes:", error.message);
            } else {
                const processedNotes = (data || []).map((note) => ({
                    ...note,
                    created_at: new Date(note.created_at),
                }));
                setNotes(processedNotes);
            }

            setIsLoading(false);
        };

        fetchNotes();
    }, [filterId]);

    const handleAddNote = async () => {
        const newNote = {
            title: "",
            content: "",
            category: 1,
            created_at: new Date().toISOString(),
            status: 0,
        };

        const { data, error } = await supabase
            .from("notes")
            .insert(newNote)
            .select()
            .single();

        if (error) {
            console.error("Error adding note to Supabase:", error.message);
        } else if (data) {
            setNotes((currentNotes) => [
                { ...data, created_at: new Date(data.created_at) },
                ...currentNotes,
            ]);
        }
    };

    const updateNote = async (updatedNote: NoteData) => {
        const updatedNotes = notes.map((note) =>
            note.id === updatedNote.id ? updatedNote : note
        );
        setNotes(updatedNotes);

        await supabase
            .from("notes")
            .update({
                title: updatedNote.title,
                content: updatedNote.content,
                category: updatedNote.category,
                status: updatedNote.status || 0,
            })
            .eq("id", updatedNote.id);
    };

    const deleteNote = async (noteId: number) => {
        setNotes(notes.filter((note) => note.id !== noteId));
        const { error } = await supabase
            .from("notes")
            .delete()
            .eq("id", noteId);

        if (error) {
            console.error("Error deleting note:", error.message);
        }
    };

    return (
        <div className="flex flex-row h-screen bg-gradient-to-t from-pink-300 to-pink-500 rounded-3xl">
            <div className="max-w-60 border-r shadow-md bg-pink-300 text-white rounded-l-3xl">
                <Sidebar onFilterChange={setFilterId} />
            </div>
            <div className="flex flex-col w-full bg-rose-100 text-gray-800 p-6 rounded-r-3xl relative">
                <div className="flex-1 p-4" onDoubleClick={handleAddNote}>
                    {isLoading
                        ? skeletonLoader()
                        : notes.length === 0
                        ? (
                            <p className="text-xl font-semibold text-pink-500 animate-pulse">
                                No hay notas con esta categoría...
                            </p>
                        )
                        : (
                            <NoteList
                                notes={notes}
                                onUpdateNote={updateNote}
                                onDeleteNote={deleteNote}
                            />
                        )}
                </div>
                <div className="absolute bottom-6 right-6">
                    <button
                        onClick={handleAddNote}
                        className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all flex items-center"
                    >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

const skeletonLoader = () => {
    return (
        <div className="w-full h-screen flex p-4">
            <div className="space-y-2.5 animate-pulse w-full">
                <div className="flex items-center w-full space-x-4">
                    <div className="shadow-sm rounded-md h-44 bg-pink-200 w-full"></div>
                    <div className="shadow-sm rounded-md h-44 bg-pink-300 w-full"></div>
                    <div className="shadow-sm rounded-md h-44 bg-pink-400 w-full"></div>
                    <div className="shadow-sm rounded-md h-44 bg-pink-500 w-full"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

