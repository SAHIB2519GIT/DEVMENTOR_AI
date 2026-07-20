import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

  destination(req,file,cb){

    cb(null,"uploads/");

  },

  filename(req,file,cb){

    const unique =
      Date.now() +
      "-" +
      Math.round(Math.random()*100000);

    cb(
      null,
      unique + path.extname(file.originalname)
    );

  }

});

const upload = multer({

  storage,

  limits:{
    fileSize:5*1024*1024
  },

  fileFilter(req,file,cb){

    if(file.mimetype==="application/pdf"){

      cb(null,true);

    }else{

      cb(new Error("Only PDF files are allowed"));

    }

  }

});

export default upload;