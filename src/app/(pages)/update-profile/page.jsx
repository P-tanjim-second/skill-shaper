'use client';

import { useState } from 'react';
import { Form, Input, Label, TextField, toast } from '@heroui/react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { authClient, useSession } from '@/lib/auth-client';

const defaultPfImage = "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export default function UpdateProfile() {
    const [loading, setLoading] = useState(false);
    const {refetch} = useSession()

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            setLoading(true);

            await authClient.updateUser({
                name: data.name,
                image: data.image || defaultPfImage,
            });

            if (data.email) {
                await authClient.changeEmail({
                    newEmail: data.email,
                    callbackURL: '/profile',
                });
            }
        } finally {
            setLoading(false);
            refetch();
            toast.success("Profile Updated successfully")
        }
    };

    return (
        <Form
            onSubmit={onSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-5 p-6 rounded-2xl bg-bg-card border border-white/5 shadow-lg"
        >
            <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">Update Profile</h2>
                <p className="text-sm text-tx-secondary">
                    Keep your account details up to date
                </p>
            </div>

            <TextField name="name" isRequired>
                <Label className="text-sm text-tx-secondary">Name</Label>
                <Input
                    placeholder="Your name"
                    className="h-12 rounded-xl focus:ring-2 focus:ring-accent-gold"
                />
            </TextField>

            <TextField name="image">
                <Label className="text-sm text-tx-secondary">Profile Image URL</Label>
                <Input
                    placeholder="https://..."
                    className="h-12 rounded-xl focus:ring-2 focus:ring-accent-gold"
                />
            </TextField>

            <TextField name="email" type="email">
                <Label className="text-sm text-tx-secondary">Email</Label>
                <Input
                    placeholder="john@example.com"
                    className="h-12 rounded-xl focus:ring-2 focus:ring-accent-gold"
                />
            </TextField>


            <button
                type="submit"
                disabled={loading}
                className="w-full h-12 cursor-pointer rounded-xl bg-accent-gold text-black font-semibold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition"
            >
                {loading ? 'Saving...' : 'Save Changes'}
                <ArrowRight size={16} />
            </button>
        </Form>
    );
}