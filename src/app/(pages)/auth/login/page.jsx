import LeftPanel from '../components/LeftPanel';
import LoginPanel from '../components/LoginPanel';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-bg-base">
            <LeftPanel />
            <LoginPanel />
        </div>
    );
}