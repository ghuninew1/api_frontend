// import { useNavigate } from "react-router-dom";
import Button from "#components/Button";
import { useFB } from "#hook/useFB";

function LoginFacebook() {
    // const navigate = useNavigate();
    const { userFB, loginFB, logoutFB } = useFB();

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(50vh)]">
            <span className="mb-4">
                <h1 className="text-3xl font-bold">Login Facebook</h1>
            </span>
            {userFB ? (
                <div className="flex flex-col items-center justify-center">
                    <Button
                        onClick={() => {
                            logoutFB();
                        }}
                        variant="warning"
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <Button onClick={loginFB} variant="primary">
                    Login
                </Button>
            )}

            {userFB ? (
                <div className="flex flex-col justify-center gap-3 w-2/3 text-sm">
                    <p>accessToken: {userFB.accessToken}</p>
                    <p>expiresIn: {userFB.expiresIn}</p>
                    <p>signedRequest: {userFB.signedRequest}</p>

                    <p>id: {userFB.id}</p>
                    <p>userID: {userFB.userID}</p>
                    <p>name: {userFB.name}</p>
                    <p>email: {userFB.email}</p>
                    <p>picture: {userFB?.picture?.data?.url}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <p>Not login</p>
                </div>
            )}
        </div>
    );
}

export default LoginFacebook;
