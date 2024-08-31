import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    //getting  register, handleSubmit, watch, setValue, control, getValues from useForm
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        //setting the default values, whatever comes from appwrite
        defaultValues: {
            //if post is there, use the title. usle keep it empty
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    //getting userData
    const userData = useSelector((state) => state.auth.userData);


    //for the submit form
    //if the post value exists update it
    //else make new one
    const submit = async (data) => {
        //if posts exists 
        if (post) {
           // accessing the images with data
           //if image exists put it into filr
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            //if file exists delete the image
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }
          //updating the post using updatePost but we need the ids and stuff
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                //overriding featured image
                featuredImage: file ? file.$id : undefined,
            });
           //navigating the user
           //we will get id from db post
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } 
        //if post doesnt exist
        
        else {
            //user wants to create new form
            //getting the file for upload
            const file = await appwriteService.uploadFile(data.image[0]);
            
            //if file exists, which it always will
            if (file) {
                //getting the valued from database
                const fileId = file.$id;
                data.featuredImage = fileId;
                //getting id from userData from store
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                //navigating the user
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };
   //method slug transform
   //watch title and generate values in slug
    const slugTransform = useCallback((value) => {
        //if value existas and value is type string
        if (value && typeof value === "string")
            return value
        //trimming it , converting it to lowercase
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-") //excluding these everything will be converted to -
                .replace(/\s/g, "-");

        return "";
    }, []);



    //using the slugTransform here
    React.useEffect(() => {
        //watch method in subsciption 
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                //get value from slugTransform
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
        //dependency array has watch , s
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}