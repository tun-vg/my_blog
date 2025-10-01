import { useKeycloak } from "@react-keycloak/web";
import { TbWorld } from "react-icons/tb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdownMenu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CiPen, CiPenpot } from "react-icons/ci";

const Header = () => {
    const { keycloak } = useKeycloak();

    const navigate = useNavigate();

    const handleRedirectAdminPage = () => {
        navigate('/app');
    }

    return (
        <>
            {/* <div className="w-full h-64 bg-cover bg-center" style={{backgroundImage: url('https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif')}}> */}
            <div className="container-app w-full h-fit bg-cover bg-center shadow-lg pt-5 pb-5">
                <div className="flex justify-between items-center">
                    <h1>Blog</h1>
                    <div>
                        <ul className="flex gap-x-3">
                            <li>Tag1</li>
                            <li>Tag1</li>
                            <li>Tag1</li>
                            <li>Tag1</li>
                            <li>Tag1</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <div className="flex gap-x-6">
                        {/* <button className="flex gap-x-1 items-center">
                            <div className="bg-white rounded-3xl p-1">
                                <TbWorld />
                            </div>
                            <div>EN</div>
                        </button> */}

                        <div className="flex gap-x-1 items-center">
                            <button onClick={() => navigate('/bai-dang/tao-moi')} className="flex gap-x-1 items-center border-black-300 border-[1px] rounded-3xl px-4 py-2">
                                <CiPen />
                                Viết bài
                            </button>
                        </div>

                        {keycloak.authenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost">Hello, {keycloak.tokenParsed?.preferred_username}</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={handleRedirectAdminPage}>Trang quản lý</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('my-profile')} >Thông tin cá nhân</DropdownMenuItem>
                                    <hr />
                                    <DropdownMenuItem onClick={() => keycloak.logout()}>Đăng xuất</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div>
                                <button onClick={() => keycloak.login()} className="px-3">Log In</button>
                                <button className="bg-white rounded-md p-2">Sign Up</button>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;