import { useForm } from "react-hook-form";
import TextField from "../../components/form/TextField";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { Textarea } from "@headlessui/react";
import Editor from "../../components/form/Editor";
import { addPost } from "../../api/post/post";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import { getCategories } from "../../api/category/category";
import { getTagsByCategoryId } from "../../api/tag/tag";

const CreatePostPage = () => {
    // const [title, setTitle] = useState("");
    const [html, setHtml] = useState("<p>Nhập nội dung...</p>");

    // const save = async () => {
    //     const payload = { title, contentHtml: html };
    //     const url = postId ? `/api/posts/${postId}` : "/api/posts";
    //     const method = postId ? "PUT" : "POST";

    //     const res = await fetch(url, {
    //         method,
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(payload),
    //     });
    //     if (!res.ok) {
    //         alert("Lưu thất bại");
    //         return;
    //     }
    //     const data = await res.json();
    //     alert("Đã lưu!");
    //     // điều hướng nếu cần
    // };

    const { handleSubmit, reset, control, register } = useForm();

    const { keycloak } = useKeycloak();

    const onSubmit = async (data) => {
        data.Content = html;
        const result = await addPost(data);
        console.log(result);
        if (result.isSuccess) {
            toast("Add Post Successfully!");
        }
    }

    const [openSelectCategory, setOpenSelectCategory] = useState(false);
    const [dataCategories, setDataCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [dataTags, setDataTags] = useState([]);
    const [dataTagsSelected, setDataTagsSelected] = useState([]);

    const getDataCategories = async () => {
        const result = await getCategories();
        setDataCategories(result.items);
    }

    const changeSelectedCategory = async (category) => {
        setSelectedCategory(category);
        const result = await getTagsByCategoryId(category.categoryId);
        setDataTags(result.items);
    }

    useEffect(() => {
        getDataCategories();
    }, [])

    const handleSelectedTag = (tag) => {
        let selectedTags = [...dataTagsSelected, tag];
        setDataTagsSelected(selectedTags);

        let tags = dataTags.filter(t => t !== tag);
        setDataTags(tags);
    }

    const handleUnselectedTag = (tag) => {
        let updatedTags = dataTagsSelected.filter(t => t !== tag);
        setDataTagsSelected(updatedTags);

        let tags = [...dataTags, tag];
        setDataTags(tags);
    }

    return (
        <>
            <div className="container-app">
                <h1 className="font-bold text-2xl">Tạo bài viết mới</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" {...register('AuthorId')} value='a6b82feb-d839-40bc-af00-7b3e6ffd1002' />
                    <div>
                        <label className="font-medium text-gray-700">Chọn chủ đề </label>
                        <br />
                        {!openSelectCategory && <button
                            className="border-dashed border-[1px] border-gray-600 rounded-3xl py-2 px-3 mt-1 flex gap-1 justify-center items-center"
                            onClick={() => setOpenSelectCategory(true)}
                        >
                            <FaPlus /> Thêm chủ đề
                        </button>
                        }
                    </div>

                    {openSelectCategory && <div className="border-[1px] border-gray-300 rounded-md shadow-lg min-h-[250px] relative">
                        <div className="flex gap-2 mb-[60px] h-full">
                            <div className="w-[30%] bg-gray-50 h-full">
                                <h2 className="p-2">Danh sách chủ đề:</h2>
                                <div className="overflow-auto">
                                    {dataCategories.map((e) => {
                                        return <div
                                            key={e.categoryId}
                                            onClick={() => changeSelectedCategory(e)}
                                            className={`hover:bg-gray-100 py-1 px-4 ${selectedCategory?.categoryId == e?.categoryId ? 'bg-gray-300 hover:bg-gray-300' : ''}`}
                                        >
                                            {e.name}
                                        </div>
                                    })}
                                </div>
                            </div>
                            {/* <div className="w-[2px] h-auto bg-gray-400"></div> */}
                            <div className="w-[35%] p-2 bg-gray-50">
                                <h2>Danh sách tag:</h2>
                                <div>
                                    {dataTags.map((e) => {
                                        return <button
                                            key={e.tagId}
                                            className="w-fit border-[1px] border-gray-400 rounded-3xl py-1 px-2 mx-2 my-1"
                                            onClick={() => handleSelectedTag(e)}
                                        >
                                            + {e.name}
                                        </button>
                                    })}
                                </div>
                            </div>
                            {/* <div className="w-[2px] h-auto bg-gray-400"></div> */}
                            <div className="w-[35%] p-2 bg-gray-50">
                                <h2>Các tag đã chọn:</h2>
                                <div>
                                    {dataTagsSelected.map((e) => {
                                        return <button
                                            key={e.tagId}
                                            className="w-fit border-[1px] border-gray-400 rounded-3xl py-1 px-2 mx-2 my-1"
                                            onClick={() => handleUnselectedTag(e)}
                                        >
                                            ✔ {e.name}
                                        </button>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 w-full">
                            <div className="h-[2px] bg-gray-400 w-full"></div>
                            <div className="flex justify-end gap-4 p-2">
                                <button 
                                    className="border-[1px] rounded-md border-gray-300 py-2 px-4"
                                    onClick={() => setOpenSelectCategory(false)}
                                >
                                    Hủy
                                </button>
                                <button className="border-[1px] rounded-md border-gray-300 bg-blue-500 py-2 px-4 text-white">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                    }

                    {/* <input type="text" {...register('CategoryId')} value='08dd9edf-2032-4bfb-82fd-86be9e716664' /> */}
                    <TextField
                        name='Title'
                        label='Tiều đề'
                        control={control}
                    />

                    <Editor onChange={setHtml} className='h-full' />

                    <input type="submit" value="Add" />
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default CreatePostPage;