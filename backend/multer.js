const multer = require ("multer");

// const storage = multer.memoryStorage({
//     // destination: function(req, file, cb) {
//     //     cb(null,"./uploads")
//     // },
//     filename: function(req, file, cb) {
//         cb(null, Date.now() + "-" + file.originalname)
//     }
// })

const storage = multer.memoryStorage();

// file validation
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }
    else{
        // prevent the upload
        cb({message: "Unsupported file format"}, false)
    }
}



const upload = multer({
    storage: storage,
    limits:{fileSize: 1024*1024},
    fileFilter: fileFilter
});

module.exports = upload;
