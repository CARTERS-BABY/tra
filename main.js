var img = ''
var status = ''
var objects = []
var som  

function preload(){
img = loadImage('dog_cat.jpg')
som = loadSound('a.mp3')
}


function setup(){

    canvas = createCanvas (640, 420)
    canvas.center()
Objectdetector = ml5.objectDetector('cocossd' , modeload)
document.getElementById('status').innerHTML = 'status : detectando objetos'

}

function draw(){
image(img ,0 , 0 , 640 , 420 )
fill('red')

noFill()

stroke('red')
if(status != ''){
    for(var loop = 0 ; loop < objects.length ; loop++){
        rect(objects[loop].x , objects[loop].y , objects[loop].width , objects[loop].height) 
        document.getElementById('status').innerHTML = 'staus : atualizado '
        porcentagem = floor(objects [ loop ].confidence * 100 )
        text(objects[loop].label  + ' ' + porcentagem + '%' , objects[loop].x , objects[loop].y)
        if(objects [loop].label == 'person'){
            som.stop()
        }
        else{
            som.play()
        }
    }
    
  
    

}


}
function modeload(){
    console.log('modelocarregado')
    status = true 
    Objectdetector.detect(img , gotresults ) 
}
function gotresults(error,results){
    if(error){
        console.log(error) 
        
    }
    console.log(results)
    objects = results 
}