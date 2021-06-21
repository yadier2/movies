import React, { useEffect, useState } from 'react'
import { fileUpload } from '../helpers/fileUpload'

const initialForm = {
    title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    video: true,
    url_video: '',
    id: null
}
const initialPreviewImg = {
    imgSrc: '',
}
const initialPreviewVideo = {
    videoSrc: ''
}
const initialUpdate = {
    image: false,
    video: false
}
let fileImage = null
let fileVideo = null
// APAGAR CADA VEZ QUE SELECCIONE OTRO PARA NO CAMBIAR LA IMAGEN initialUpdate
export const FormCrud = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initialForm)

    const [imgPreview, setImgPreview] = useState(initialPreviewImg)
    const [videoPreview, setVideoPreview] = useState(initialPreviewVideo)

    const [mediaUpdate, setMediaUpdate] = useState(initialUpdate)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    }, [dataToEdit])
    //agregar imagen
    const handlePictureClick = () => {
        document.querySelector('#fileSelector2').click();
    }
    const handleFileImage = (e) => {
        let backup = fileImage;
        fileImage = e.target.files[0]

        if (fileImage) {
            let src = fileImage.type;
            src = URL.createObjectURL(fileImage);

            setImgPreview({
                imgSrc: src
            })
            setMediaUpdate({
                ...mediaUpdate,
                image: true
            })
        }else{
            fileImage = backup;
        }
    }
    //agrear video
    const handleVideoClick = (e) => {
        document.querySelector('#fileSelector3').click();
    }
    const handleFileVideo = (e) => {
        let backup =fileVideo;
        fileVideo = e.target.files[0]
        if (fileVideo) {
            let src = fileVideo.type;
            src = URL.createObjectURL(fileVideo);

            setVideoPreview({
                videoSrc: src
            })

            setMediaUpdate({
                ...mediaUpdate,
                video: true
            })
        }else{
            fileVideo = backup
        }
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.title.trim()) {
            alert('Datos incompletos')
            return;
        }
       
     let { image, video } = mediaUpdate
      let{poster_path,url_video} = form
       //verificar si se ha modificado el video o la imagen
       let urlFoto =  image ?  await fileUpload(fileImage) : poster_path
       let urlVideo = video ? await fileUpload(fileVideo) : url_video 
       console.log("Completado...");
       console.log(urlFoto);
       console.log(urlVideo);
       console.log('-------------' )
  

        if (form.id === null) {
            createData({
                ...form,
                poster_path: urlFoto,
                url_video: urlVideo
            })
        } else {
            updateData(form.id,{
                ...form,
                poster_path: urlFoto,
                url_video: urlVideo
            })
        }
         handleReset()
    }
    const handleReset = (e) => {

        setForm(initialForm)
        setDataToEdit(null)

        setMediaUpdate(initialUpdate)
        setImgPreview(initialPreviewImg)
        setVideoPreview(initialPreviewVideo)
        fileImage = null
        fileVideo = null
    }

    return (
        <div>
            <h3>{ dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mt-2" name="title" id="" value={form.title}
                    onChange={handleChange} placeholder='Title' />
                <textarea type="text" className="form-control mt-2" name="overview" value={form.overview}
                    onChange={handleChange} placeholder='Overview' />
                <input type="date" className="form-control mt-2" name="release_date" value={form.release_date}
                    onChange={handleChange} placeholder='Overview' />
                <input
                    id="fileSelector2"
                    type="file"
                    name="fileImage"
                    style={{ display: 'none' }}
                    onChange={handleFileImage}

                />
                <div className='row mt-2'>
                    <div className="col-5">
                        <img src={dataToEdit? form.poster_path : imgPreview.imgSrc} alt="Image Preview" width='100%' />
                    </div>
                    <div className="col-7">
                        <button
                            className="btn btn-primary w-100  mt-2"
                            type="button"
                            onClick={handlePictureClick}>
                            Cargar imagen
                        </button>
                    </div>

                </div>

                <div className='row mt-2'>
                    <div className="col-5">
                        <video src={dataToEdit? form.url_video : videoPreview.videoSrc} autoPlay loop controls width='100%' />

                    </div>
                    <div className="col-7">
                        <input
                            id="fileSelector3"
                            type="file"
                            name="fileVideo"
                            style={{ display: 'none' }}
                            onChange={handleFileVideo}
                        />
                        <button
                            className="btn btn-primary w-100 "
                            type="button"
                            onClick={handleVideoClick}>
                            Cargar video
                        </button>


                    </div>
                </div>
                <div className="d-flex ">

                <input type="submit" name="" className="btn btn-primary form-control m-2" />
                <input type="reset" name="" className="btn btn-danger form-control m-2" onClick={handleReset} />
                </div>
    
            </form>

        </div>
    )
}
