import {useState} from 'react';
import ShowDownload from "../../src/components/Download";

const DownloadPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password === 'Miec266') {
            setIsAuthorized(true);
        } else {
            alert('密码错误');
        }
    };

    return (
        <div>
            {!isAuthorized ? (
                <>
                    <div className="container">
                        <div className="d-flex mt-12 row justify-content-center align-items-center">
                            <img className="w-50 col-md-8" src="/img/miec.png" alt="Logo"/>
                            <div className="col-md-8 justify-content-center align-items-center mt-12">
                                {!isAuthorized ? (
                                    <form onSubmit={handleSubmit} className="form-inline">
                                        <div className="form-group mx-sm-3 mb-2">
                                            <label htmlFor="password" className="sr-only">密码</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="密码"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-2">提交</button>
                                    </form>
                                ) : (
                                    <ShowDownload />
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <ShowDownload />
            )}
        </div>
    );
};

export default DownloadPage;
