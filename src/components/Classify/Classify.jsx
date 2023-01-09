import { useState,useRef, useEffect,useContext } from 'react';
import * as ml5 from 'ml5';
import { locateContext } from '../../context/locateContext';

function Classify(){
    const locate = useContext(locateContext);

  
 

    const [imageURL, setImageURL] = useState(null);
    const [identify, setIdentify] = useState(false);
    const [result, setResult] = useState([]);
    const [history, setHistory] = useState([]);
   
  
    const imgRef = useRef();
    const textInputRef = useRef();
    
    const uploadImage = (e) => {
      const { files } = e.target;
  
      if (files.length > 0) {
        const url = URL.createObjectURL(files[0]);
        setImageURL(url);
      } else {
        setImageURL(null);
      }
    };
   
     const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y8n73XnCI/model.json", modelReady);
        
     
    
    
   function modelReady(){
      console.log('modelo listo');
      if (identify !== false){
       classifier.predict(imgRef.current, getResults);
      }
    }
  
    function getResults(error, results){
      if(error){
        console.log(error);
      }else{
        
        console.log(results);
      }
    }
  
  
  
    const handleIdentify=()=>{
      textInputRef.current.value = '';
      setIdentify(true);
    }
   
  
   const handleHistory=()=>{
      setIdentify(false)
      if(imageURL){
        setHistory([imageURL,...history]);   
        setImageURL(null);
      }
    }
  
   const handleOfChange = (e)=>{
     setImageURL(e.target.value);
     
   } 
  
   const handleDelete = ()=>{
     setImageURL(null);
   }
  
   
  
  
   return (
      <div className="Classify">
       <h1>localizacion</h1>
       {locate.map((locations,index)=>{
        return(
          <div className='locations' key={`${locations}${index}`}>
            <p>{locations}</p>      
          </div>
        )
       })}

       <div>
      {/* Poner un icono dentro de un boton con ese texto, en cada boton, una camarita y una webcam */}
      <button>Subir una foto o tomar una captura</button>
      <button>Utilizar la webcam</button>
      </div>
           
       <div className='upload-image'>
        <h2>Detector de imagenes</h2>

        {/* No le des estilos a estos INPUT */}
        <input type="file" onChange={uploadImage} accept="image/*"/>
        <input type="text" placeholder='URL de la imagen' ref={textInputRef} onChange={handleOfChange} />

       </div>
       <div>
         {imageURL &&<img className='img-file' src={imageURL} alt='Upload Preview' crossOrigin='anonymous' ref={imgRef}/>}
       </div>
         {imageURL && <div>
          <button className='btn btn-warning' onClick={handleIdentify}>Clasificar</button>
          <button onClick={handleHistory}>Añadir a Seleccion</button>
          <button onClick={handleDelete}>Eliminar Imagen</button>
         </div>}
  
         {/* Resultados de clasificacion */}
         {result.length > 0 &&<div>
           {result.map((results, index)=>{
            return(
              <div className='result' key={results.label}>
                <span className='label'>{results.label}</span><br/>
                <span className='confidence'>confidence level: {(results.confidence * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Mayor probabilidad</span>}</span>
              </div>
            )
           }) 
            
           }
         </div>}
         {/* Fin resultados de clasificacion */}
        <div>
          
        </div>
        {/* Listado de imagenes seleccionadas, dale un estilos de mosaico de imagenes del mismo tamaño */}
        {history.length > 0 &&  <div clasName="img-load">
        {history.map((image, index)=>{return(<div className='img-container'>     
        <div className='prediction' key={`${image}${index}`}>  
        <img onClick={()=>{setImageURL(image);history.splice(index,1) }} className='img-file' src={image} alt="uploadPreview" crossOrigin='anonymous' ref={imgRef}/>
        
        </div>
        </div>
        )
        
        })
        
        }
        
      </div>}
        {/* Fin del listado de imagenes seleccionadas */}
      
      </div>
    );
}
export default Classify;