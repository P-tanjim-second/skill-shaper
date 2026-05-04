'use client'
import { authClient, useSession } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function RightPanel() {
    const [showPass, setShowPass] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const { refetch } = useSession()

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email(userData);

        if (data) {
            toast.success("Login Successful");
            await refetch();
            router.replace(callbackUrl);
        }

        if (error) {
            if (error.code === "UNAUTHORIZED") {
                toast.danger("Email or password is incorrect");
            } else {
                toast.danger("Something went wrong. Login Failed");
            }
        }
    };

    const handleGoogleSign = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    }

    return (
        <div className="flex flex-1 items-center justify-center px-8 py-14 min-h-screen bg-bg-elevated">
            <div className="w-full max-w-110 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2
                        className="font-family-display font-bold text-tx-primary tracking-tight text-[clamp(32px,3.5vw,48px)] leading-hero"
                    >
                        Welcome back
                    </h2>
                    <p className="font-family-body text-tx-secondary text-body">
                        Log in to continue your learning journey.
                    </p>
                </div>

                <div className="flex flex-col gap-5">

                    <div className="flex flex-col gap-2">

                        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                            >
                                <Label className="text-tx-secondary font-family-mono text-label">Email</Label>
                                <Input placeholder="john@example.com" className={'h-12 focus-within:ring-1 focus-within:ring-accent-gold'} />
                            </TextField>
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type={`${showPass ? 'text' : 'password'}`}
                            >
                                <Label className="text-tx-secondary font-family-mono text-label">Password</Label>
                                <div className="relative">
                                    <Input placeholder="Enter your password" className={'h-12 absolute w-full focus-within:ring-1 focus-within:ring-accent-gold'} />
                                    <div type={'button'} className="absolute right-3 cursor-pointer top-3.75" onMouseDown={(e) => e.preventDefault()} onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <Eye></Eye> : <EyeOff></EyeOff>
                                        }
                                    </div>
                                </div>
                                {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
                                {/* <FieldError /> */}
                            </TextField>
                            <div className="flex justify-end mt-10">
                                <Link
                                    href="/forgot-password"
                                    className="font-family-sans font-semibold text-accent-gold text-small hover:text-accent-glow transition-colors duration-200"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="flex gap-2">
                                <button type="submit"
                                    className="w-full relative overflow-hidden group cursor-pointer h-13 rounded-xl font-family-sans font-bold text-body bg-accent-gold text-bg-base flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                                >
                                    <span
                                        className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                                        style={{
                                            transform: 'skewX(-20deg)',
                                        }}
                                    />
                                    Login
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </Form>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-px bg-border" />
                            <span className="font-family-body text-tx-tertiary text-small">OR</span>
                            <div className="flex-1 h-px bg-border" />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleSign}
                            className="w-full cursor-pointer h-13 rounded-xl font-family-sans font-medium text-body bg-bg-card border border-border text-tx-primary flex items-center justify-center gap-3 hover:border-border-hover hover:bg-bg-subtle transition-all duration-200"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>

                <p className="text-center font-family-body text-tx-secondary text-small">
                    Don&apos;t have an account?{' '}
                    <Link
                        href={'/auth/register'}
                        className="font-family-sans font-semibold text-accent-gold hover:text-accent-glow transition-colors duration-200"
                    >
                        Sign up
                    </Link>
                </p>

            </div>
        </div>
    );
}