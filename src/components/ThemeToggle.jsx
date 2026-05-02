'use client'

import { useEffect, useState } from "react";
import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <Switch>
            {({ isSelected }) => (
                <>
                    <Switch.Control
                        className={`h-7.75 w-12.75 ${isSelected ? "bg-accent-gold shadow-glow" : ""}`}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        <Switch.Thumb
                            className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                        >
                            <Switch.Icon>
                                {isSelected ? (
                                    <Sun className="size-4 text-accent-gold" />
                                ) : (
                                    <Moon className="size-4 text-accent-gold" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    );
};

export default ThemeToggle;