const myBlogs = [
    { blogId: 1, blogTitle: 'UCL Şampiyonu Real Madrid' },
    { blogId: 2, blogTitle: 'Yaz Transfer Dönemi' },
    { blogId: 3, blogTitle: 'Fenerbahçede Jesus Dönemi' }
];

const listBlogs = () => {
    myBlogs.map(blog => {
        console.log(blog.blogTitle);
    });
}

//listBlogs();

// Callback
/*const addBlogWithCallback = (newBlog, callback) => {
    myBlogs.push(newBlog);
    callback();
}

addBlogWithCallback({ blogId: 4, blogTitle: 'Gs Seçim Dönemi' }, listBlogs) */

// Promise

/*
const addBlogWithPromise = (newBlog) => {
    const promise1 = new Promise((res, rej) => {
        myBlogs.push(newBlog)
        res(myBlogs)
        rej("Blog Eklenirken Bir Hata Oluştu")
    });
    return promise1;
}

addBlogWithPromise({ blogId: 5, blogTitle: 'Anadolu Efes Türkiye Şampiyonu' }).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})
*/
//async - await

function getBlogData(data) {
    console.log('Bloglar alınıyor..');
    return new Promise((res, rej) => {
        if (data) {
            res('Bloglar Alındı')
            console.log(' ---- Bloglarınız Şunlardır ----');
            listBlogs()
        } else {
            rej('Bloglar Alınmadı')
        }
    })
}

const blogEkle = (blog) => {
    myBlogs.push(blog)
}
blogEkle({ blogId: 10, blogTitle: 'Ztk Şampiyonu Sivasspor' })

function addBlog(receivedData) {
    console.log('Blog Ekleniyor...');
    return new Promise((res, rej) => {

        if (receivedData) {
            myBlogs.push(blogEkle())
            res('Blog Başarılı bir şekilde eklendi')

        } else {
            rej('Bloglar Eklenemedi')
        }


    })
}



async function processBlogData() {
    try {

        const getadd = await addBlog(true);
        console.log(getadd);
        const blogData = await getBlogData(true);
        console.log(blogData);
    } catch (error) {
        console.log(error);
    }
}

processBlogData();