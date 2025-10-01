import { useEffect, useState } from "react";
import { getPostsTrending } from "../../api/post/post";
import { CiBookmark } from "react-icons/ci";

const UserProfilePage = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const result = await getPostsTrending();
        setData(result.items);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="container-app flex">
                <div className="bg-gray-200 w-3/12 flex flex-col items-center">
                    <img src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvDH5qqP55rOehebEQChMCroH0U6PAvG55-o-eRHARHz1CifVLkoziLUDwE326CSAB4ch6sGHOu2W8BaiInFCfijcCTVCkt6M-LdQ0FnlOAU755T05ZqoIQLAkCPH2E8Glhg3Qnw?key=E_klvQY5pnbczCrBuwbNLg' alt='image' className='h-36 w-36 rounded-full' />
                    <div>Vương Toàn Tuấn</div>
                    <button className="bg-blue-200 px-5 py-2">Theo dõi</button>
                    <div className="flex gap-7">
                        <div>
                            100 <br /> followers
                        </div>
                        <div>
                            50 <br /> following
                        </div>
                        <div>
                            10 <br /> posts
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 w-9/12">
                    <div className='flex gap-x-5 mt-2 items-stretch'>
                        {data.map((p) => (
                            <div key={p.postId} className='flex flex-col gap-y-3 bg-gray-100'>
                                <img 
                                    src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvDH5qqP55rOehebEQChMCroH0U6PAvG55-o-eRHARHz1CifVLkoziLUDwE326CSAB4ch6sGHOu2W8BaiInFCfijcCTVCkt6M-LdQ0FnlOAU755T05ZqoIQLAkCPH2E8Glhg3Qnw?key=E_klvQY5pnbczCrBuwbNLg'
                                    alt='image'
                                    className='h-auto w-56 rounded-lg object-cover'
                                />
                                <div className='flex justify-between items-center'>
                                    <p className='text-gray-400'>{p.ReadingTime} phút đọc</p>
                                    <CiBookmark className='h-5 w-5 text-gray-400' />
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <p>{p.title}</p>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='text-gray-400'>17 Th6</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfilePage;