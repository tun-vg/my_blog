import { API } from "../axiosConfig";

export const getTags = () => {
    const url = '/api/tag?page=1&pageSize=20';
    return API.get(url);
    // const dataTag = {
    //     items: [
    //         {
    //             tagId: 1,
    //             tagName: "Quan điểm - Tranh luận",
    //             slug: "quan-diem-tranh-luan"
    //         },
    //         {
    //             tagId: 2,
    //             tagName: "Khoa học - Công nghệ",
    //             slug: "khoa-hoc-cong-nghe"
    //         },
    //         {
    //             tagId: 3,
    //             tagName: "Tài chính",
    //             slug: "tai-chinh"
    //         },
    //         {
    //             tagId: 4,
    //             tagName: "Chuyện thầm kín",
    //             slug: "chuyen-tham-kin"
    //         },
    //         {
    //             tagId: 5,
    //             tagName: "Tâm lý học",
    //             slug: "tam-ly-hoc"
    //         },
    //         {
    //             tagId: 6,
    //             tagName: "Thể thao",
    //             slug: "the-thao"
    //         },
    //         {
    //             tagId: 7,
    //             tagName: "Yêu",
    //             slug: "yeu"
    //         },
    //         {
    //             tagId: 8,
    //             tagName: "Phát triển bản thân",
    //             slug: "phat-trien-ban-than"
    //         },
    //         {
    //             tagId: 9,
    //             tagName: "Thời trang",
    //             slug: "thoi-trang"
    //         },
    //         {
    //             tagId: 10,
    //             tagName: "Sách",
    //             slug: "sach"
    //         },
    //         {
    //             tagId: 11,
    //             tagName: "Lịch sử",
    //             slug: "lich-su"
    //         },
    //         {
    //             tagId: 12,
    //             tagName: "Ẩm thực",
    //             slug: "Ẩm thực"
    //         },
    //         {
    //             tagId: 13,
    //             tagName: "Giáo dục",
    //             slug: "Giáo dục"
    //         },
    //     ]
    // }
    // return dataTag;
    
}

export const getTagBytagId = (tagtagId) => {
    const url = `/api/tag/${tagtagId}`;
    return API.get(url);
}

export const addTag = (tag) => {
    const url = `/api/tag`;
    return API.post(url, tag);
}

export const updateTag = (tag) => {
    const url = `/api/tag`;
    return API.put(url, tag);
}

export const deleteTag = (tagtagId) => {
    const url = `/api/tag/${tagtagId}`;
    return API.delete(url);
}

export const getTagsByCategoryId = (categoryId) => {
    const url = `/api/tag/get-tags-by-category/${categoryId}`;
    return API.get(url);
}