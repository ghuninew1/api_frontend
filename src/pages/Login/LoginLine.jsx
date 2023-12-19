import { useEffect, useCallback, useState } from "react";
import Button from "#components/Button";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "#contexts/useAuthContext";
import { useLineLiff } from "#hook/useLineLiff";
import Loading from "#components/Loading";

export default function LoginLine() {
    const { isUser, Auth } = useAuth();
    // const navigate = useNavigate();
    const { userLine, lineLogin } = useLineLiff();
    const [loadingLine, setLoadingLine] = useState(false);

    const handleLogin = useCallback(async () => {
        await Auth();
    }, [Auth]);

    useEffect(() => {
        if (userLine && !isUser.username && !isUser.isLine) {
            handleLogin();
        }
    }, [userLine, isUser, handleLogin]);

    const handleLineLogin = async () => {
        setLoadingLine(true);
        lineLogin();
    };

    console.log("userLine", userLine);

    return (
        <div className="flex flex-col items-center justify-center">
            {userLine && !isUser.username && !isUser.isLine && <Loading />}
            {isUser.username && !isUser.isLine && (
                <p className="text-sm mb-3">You are logged in with username</p>
            )}
            {isUser.username && isUser.isLine && (
                <p className="text-lg mb-3 text-green-600">
                    You are logged in with LINE
                </p>
            )}

            {isUser.isLine ? (
                <>
                    <p className="text-sm mb-3">Profile</p>
                    <img
                        className="w-40 h-40 rounded-full mb-3"
                        src={userLine?.pictureUrl}
                        alt={userLine?.displayName}
                    />
                    <p className="text-sm mb-3">{userLine?.displayName}</p>
                    <p className="text-sm mb-3">{userLine?.userId}</p>
                    <p className="text-sm mb-3">{userLine?.statusMessage}</p>
                </>
            ) : (
                <Button
                    variant="primary"
                    onClick={handleLineLogin}
                    loading={loadingLine}
                >
                    Login with LINE
                </Button>
            )}
        </div>
    );
}
