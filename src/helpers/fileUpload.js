//obtener url de imagen ->subir
import Swal from 'sweetalert2';
export const fileUpload = async(file) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Por favor espere...',
        showConfirmButton: false,
       /*  timer: 1500 */
      }) 
    const cluodUrl = 'https://api.cloudinary.com/v1_1/dyv10jgjo/auto/upload'
    const fromData = new FormData();
    fromData.append('upload_preset', 'notas-academia');
    fromData.append('file', file);

    try {
        const resp = await fetch(cluodUrl, {
            method:'POST',
            body: fromData
        });

        if(resp.ok){
              const cluodRes = await resp.json()
              console.log('data',cluodRes)
              //url de la imagen
              return cluodRes.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
       throw error;
    }
 
}