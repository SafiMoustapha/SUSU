import lineBlog from "../../../assets/line-blog.png"

const TitleBlog = () => {
    return (
        <div className="flex items-center justify-center mt-44 gap-2">
            <h1 className="text-[#0D2063] text-center text-3xl">
                Blog
            </h1>
            <img src={lineBlog} alt="" />
        </div>
    );
};

export default TitleBlog;