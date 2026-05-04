import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-bg-base">
            <LeftPanel />
            <RightPanel />
        </div>
    );
}