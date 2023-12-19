import { useNavigate } from "react-router-dom";
import Button from "#components/Button";
import { useGoogle } from "#hook/useGoogle";
import { useEffect } from "react";

export default function LoginGoogle() {
    const navigate = useNavigate();
    const { userGoogle, loginGg, logoutGg, isLogin } = useGoogle();

    const handleLogin = async () => {
        if (!isLogin) {
            await loginGg();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-[50vh] bg-gray-900 text-white">
            <h1>Login Google</h1>
            {!userGoogle && <p>Not login</p>}
            {userGoogle && (
                <>
                    <p>{userGoogle?.name}</p>
                    <p>{userGoogle?.email}</p>
                    <p>{userGoogle?.id}</p>

                    <img src={userGoogle?.picture} alt="userGoogle" />
                </>
            )}

            <div className="flex flex-col items-center justify-center text-center mt-10 bg-gray-900 text-white gap-3">
                {userGoogle ? (
                    <Button variant="warning" onClick={() => logoutGg()}>
                        Logout
                    </Button>
                ) : (
                    <Button variant="danger" onClick={handleLogin}>
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
}
