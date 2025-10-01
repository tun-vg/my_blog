import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsById } from "../../api/post/post";
import { Tooltip as ReactTooltip } from "react-tooltip";

const PostDetailPage = () => {
    const { postId, slug } = useParams();

    const [dataPost, setDataPost] = useState(null);

    const getDataPost = async () => {
        const result = await getPostsById(postId);
        setDataPost(result.value);
    }

    useEffect(() => {
        if (postId) {
            getDataPost();
        }
    }, [postId]);

    return (
        <>
            <div className="container-app">
                <div className="text-gray-500">
                    {dataPost?.PostTags?.map(pt => {
                        return <div>
                            {pt.TagName}
                        </div>
                    })}
                </div>

                <div>{dataPost?.Title}</div>
                <div className='flex gap-x-2 items-center'>
                    <img src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvDH5qqP55rOehebEQChMCroH0U6PAvG55-o-eRHARHz1CifVLkoziLUDwE326CSAB4ch6sGHOu2W8BaiInFCfijcCTVCkt6M-LdQ0FnlOAU755T05ZqoIQLAkCPH2E8Glhg3Qnw?key=E_klvQY5pnbczCrBuwbNLg' alt='avatar' className='h-11 w-11 rounded-full' />
                    <div>
                        <h3 className='font-semibold'>
                            {dataPost?.AuthorId}
                        </h3>
                        <h3 data-tooltip-id='my-tooltip-date' className="text-gray-500 w-fit">{dataPost?.CreatedAt}</h3>
                        <ReactTooltip
                            id='my-tooltip-date'
                            place='bottom'
                            content='abc'
                        >

                        </ReactTooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetailPage;