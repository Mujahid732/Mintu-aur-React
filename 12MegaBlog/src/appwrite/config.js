import conf from '../conf.js';

import {Client, ID, Database, Storage, Query, Account, Databases} from "appwrite"


//service for blog
export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwrtePojectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //create blog method

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
                
            )
        }catch(error){
            console.log("appwite service :: create post :: error",error);

        }
    }
    // get post

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug

            ) 
        }catch(error){
            console.log("appwrite services :: getPost :: error",error);
        }
    }
    // all post get
    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
            )

        }catch(error){
            console.log("appwrite service :: getPosts :: error",error);
        }
    }

    //delete blog method
    async deletePost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true

        }catch(error){
            console.log("appwrite service :: delete post:: error",error);
            return false
        }
    }

    //update blog method

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            console.log("appwrite service :: updatePost :: error",error);
        }
    }

    //upload file services
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )

        }catch(error){
            console.log("appwrite service :: uploadFile :: error",error);
            return false
        }
    }

    // delete file service
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )

        }catch(error){
            console.log("appwrite service :: deleteFile :: error ", error);
        }
    }

    // file preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}


const service  = new Service()