do{
pais=Number(prompt("si usted proviene de Usa escriba el numero 1, por otro lado si usted es de Colombia escriba 2"))
}while(isNaN(pais)||pais<1||pais>2)
if(pais==1){ 
    do{
    alturaPies=Number(prompt("escriba su altura en pies"))
    }while(isNaN(alturaPies)||alturaPies<0)
    do{
        temperaturaF=Number(prompt("escriba su temperatura actual en grados f"))
    }while(isNaN(temperaturaF)||temperaturaF<0)
    do{
        acompañante1=Number(prompt(" Si viene con uno o mas acompañantes escriba 1, si no es asi escriba 2"))
    }while(isNaN(acompañante1)|| acompañante1<1|| acompañante1>2)
        
}else if(pais==2){
    do{
        alturaMetros=Number(prompt("Escriba su altura en metros"))
    }while(isNaN(alturaMetros)|| alturaMetros<0)
    
    do{
        temperaturaC=Number(prompt("ingrese su temperatura actual en grados C"))
    }while(isNaN(temperaturaC))
    do{
        acompañante2=Number(prompt(" Si viene con un acompañante escriba 1, si no es asi escriba 2"))
    }while(isNaN(acompañante2)|| acompañante2<1|| acompañante2>2)

}
if(pais==1){
    if((alturaPies<4.6 && acompañante1==2) || temperaturaF>104){
        alert("no puede ingresar")

    }else
    alert("puede ingresar")
}


if(pais==2){
    if((alturaMetros<1.4 && acompañante2==2)|| temperaturaC>38){
    alert("No puede ingresar")
    }else
    alert("puede ingresar")
}
        

    

    
    

    


