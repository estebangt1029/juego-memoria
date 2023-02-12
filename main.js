aceptar=document.getElementById('aceptar')
let tablero16=document.querySelector('.tablero16')
let tablero32=document.querySelector('.tablero32')

aceptar.addEventListener('click',()=>{
    var radio16=document.getElementById('radio16').checked
    var radio32=document.getElementById('radio32').checked

    if(radio16==true){
        tablero16.style.top=0
    }else if(radio32==true){
        tablero32.style.top=0
    }else{
        alert('Please select a tablero')
    }

})

    let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    numeros=numeros.sort(()=>Math.random()-0.5) /*DESORDERNAR NUMEROS*/
    
    let numerosgrandes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]
    numerosgrandes=numerosgrandes.sort(()=>Math.random()-0.5) /*DESORDERNAR NUMEROS*/ 
    
    let tarjetasDestapadas=0
    let tarjeta1=null
    let tarjeta2=null
    let resultado1=''   
    let resultado2=''
    let aciertos=0
    let mostrarAciertos= document.getElementById('aciertos')
    let mostrarMovimientos= document.getElementById('movimientos')
    let mostraTiempo=document.getElementById('tiempo')
    let movimientos=0
    let temporizador=false
    let tiempo=30
    let tiempo32=60
    
/////////////////////////////////////////////////////////////////////////////////

    function contarTiempo(){
        mitempo=setInterval(()=>{
            if (tiempo==0 || tiempo32==0){
                clearInterval(mitempo)
                voltearTodas()
            }
            
            else {
                if(radio16.checked==true){
                    tiempo--
                    mostraTiempo.innerHTML=`Tiempo ${tiempo} 😏`  
                }else if(radio32.checked==true){
                    tiempo32--
                    mostraTiempo.innerHTML=`Tiempo ${tiempo32} 😏`
                }
                
            }
            
        },1000 )
    }

/////////////////////////////////////////////////////////////////////////////////
    
    function voltearTodas(){
        mostraTiempo.innerHTML=`Time Over 😭`  
        if(radio16.checked==true){
            for (let i=0;i<=15;i++){
                document.getElementById(`${i}`).innerHTML=numeros[i]
                document.getElementById(`${i}`).disabled=true
            }
        }else if(radio32.checked==true){
            for (let i=16;i<=51;i++){
                document.getElementById(`${i}`).innerHTML=numerosgrandes[i-16]
                document.getElementById(`${i}`).disabled=true
            }
        }
        
    }
    
//////////////////////////////////////////////////////////////////////////////////

    function destapar(indice){
        tarjetasDestapadas++
        if(temporizador==false){
            temporizador=true 
            contarTiempo() 
        }
        if(tarjetasDestapadas==1){
            if(radio16.checked==true){
                tarjeta1=document.getElementById(indice)
                tarjeta1.innerHTML=numeros[indice]
                tarjeta1.disabled=true
                resultado1=numeros[indice]
            }else if(radio32.checked==true){
                tarjeta1=document.getElementById(indice)
                tarjeta1.innerHTML=numerosgrandes[indice-16]
                tarjeta1.disabled=true
                resultado1=numerosgrandes[indice-16]
            }
            
            
        } 
        else if (tarjetasDestapadas==2){
            if(radio16.checked==true){
                tarjeta2=document.getElementById(indice)
                tarjeta2.innerHTML=numeros[indice]
                tarjeta2.disabled=true
                resultado2=numeros[indice]
            }else if(radio32.checked==true){
                tarjeta2=document.getElementById(indice)
                tarjeta2.innerHTML=numerosgrandes[indice-16]
                tarjeta2.disabled=true
                resultado2=numerosgrandes[indice-16]
            }
           
            
            if(resultado1==resultado2){
                tarjetasDestapadas=0
                aciertos++
                movimientos++
                
            } else{
                movimientos++
               
                setTimeout(()=>{
                tarjetasDestapadas=0
                tarjeta1.disabled=false
                tarjeta2.disabled=false
                tarjeta1.innerHTML=''
                tarjeta2.innerHTML=''
                },500) //Se cambió el tiempo para que al equivocarse no se extienda
            }
            mostrarAciertos.innerHTML=`Aciertos: ${aciertos} 😃`
            mostrarMovimientos.innerHTML=`Movimientos: ${movimientos} 😛`
           
        }
        if(radio16.checked==true){
            if(aciertos==8){
                clearInterval(mitempo)
                mostraTiempo.innerHTML=`Tardaste ${30-tiempo} segundos 🎉` 
            }   
        }else if(radio32.checked==true){
            if(aciertos==18){
                clearInterval(mitempo)
                mostraTiempo.innerHTML=`Tardaste ${60-tiempo32} segundos 🎉` 
            }  
        }
        
        
    }
    
    
    
    function reiniciar(){
        location.reload()
    }



////////////////////////////////////////////////////



// else if(radio32==true){
//     let numeros36=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]
//     numeros36=numeros36.sort(()=>Math.random()-0.5) /*DESORDERNAR NUMEROS*/
    
    
//     let tarjetasDestapadas36=0
//     let tarjeta136=null
//     let tarjeta236=null
//     let resultado136=''   
//     let resultado236=''
//     let aciertos36=0
//     let mostrarAciertos36= document.getElementById('aciertos36')
//     let mostrarMovimientos36= document.getElementById('movimientos36')
//     let mostraTiempo36=document.getElementById('tiempo36')
//     let movimientos36=0
//     let temporizador36=false
//     let tiempo36=60
    
//     function contarTiempo(){
//         mitempo=setInterval(()=>{
//             if (tiempo==0){
//                 clearInterval36(mitempo)
//                 voltearTodas36()
//             }
//             // else if(aciertos==8){
//             //     clearInterval(mitempo)
//             //     mostraTiempo.innerHTML=`Tardaste ${30-tiempo} segundos 🎉`    
//             // } //Este código se implemento dentro de la función voltear
//             else {
//                 tiempo--
//                 mostraTiempo36.innerHTML=`Tiempo ${tiempo} segundos 😏`    
//             }
            
//         },1000 )
//     }
    
//     function voltearTodas36(){
//         mostraTiempo36.innerHTML=`Time Over 😭`  
//         for (let i=0;i<=35;i++){
//             document.getElementById(`${i}`).innerHTML=numeros36[i]
//             document.getElementById(`${i}`).disabled=true
//         }
//     }
    
//     function destapar32(indice){
//         tarjetasDestapadas36++
//         if(temporizador36==false){
//             temporizador36=true 
//             contarTiempo36() 
//         }
//         if(tarjetasDestapadas36==1){
//             tarjeta136=document.getElementById(indice)
//             tarjeta136.innerHTML=numeros36[indice]
//             tarjeta136.disabled=true
//             resultado1=numeros36[indice]
            
//         } 
//         else if (tarjetasDestapadas36==2){
//             tarjeta236=document.getElementById(indice)
//             tarjeta236.innerHTML=numeros36[indice]
//             tarjeta236.disabled=true
//             resultado236=numeros36[indice]
    
            
            
//             if(resultado136==resultado236){
//                 tarjetasDestapadas36=0
//                 aciertos36++
//                 movimientos36++
                
//             } else{
//                 movimientos36++
               
//                 setTimeout(()=>{
//                 tarjetasDestapadas36=0
//                 tarjeta136.disabled=false
//                 tarjeta236.disabled=false
//                 tarjeta136.innerHTML=''
//                 tarjeta236.innerHTML=''
//                 },500) //Se cambió el tiempo para que al equivocarse no se extienda
//             }
//             mostrarAciertos36.innerHTML=`Aciertos: ${aciertos36} 😃`
//             mostrarMovimientos36.innerHTML=`Movimientos: ${movimientos36} 😛`
           
//         }
//         if(aciertos36==8){
//             clearInterval(mitempo36)
//             mostraTiempo36.innerHTML=`Tardaste ${60-tiempo36} segundos 🎉`    
//         }
        
//     }
//     function reiniciar(){
//         location.reload()
//     }
// }
