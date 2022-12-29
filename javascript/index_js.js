i = 0;
j = 0;
function more()
{
    var im = ["istockphoto-1192094401-612x612-removebg-preview.png", "img caack.png" , "img coffy.png"];
    var x = document.getElementById("img");
    x.src = im[i];
    i++;
    if (i >= im.length) 
        i = 0;
      
            timer = setTimeout('start()', 3000);
        
    
    
    return stop;
}
const drink = document.getElementById("drink");
const drink_list = document.getElementById("drink-list");
drink.addEventListener('click', () => {
    if (drink_list.style.opacity == 0)
    {
        drink_list.style.opacity = 1;
        drink_list.style.top = "-19px";
    }
    else
    {
         drink_list.style.opacity = 0;
        }
})
const list11 = document.getElementById("list11");
const list22 = document.getElementById("list22");
const list33 = document.getElementById("list33");
const list44 = document.getElementById("list44");
const list55 = document.getElementById("list55");
const lista = document.getElementById("list-1");
const listb = document.getElementById("list-2");
const listc = document.getElementById("list-3");
const listd = document.getElementById("list-4");
const liste = document.getElementById("list-5");



for (i = 0; i <6; i++) {
    
    if (i == 0) {
        list11.addEventListener('click', () => {
      
            if(lista.style.display=="none")
                lista.style.display = " inline-block";
            listb.style.display = "none";
            listc.style.display = "none";
            listd.style.display = "none";
            liste.style.display = "none";
           
        

        })
    }
    else if (i == 1)
    {
        list55.addEventListener('click', () => {
      
          
               if(listb.style.display=="none")
                listb.style.display = " inline-block";
            lista.style.display = "none";
            listc.style.display = "none";
            listd.style.display = "none";
            liste.style.display = "none";
        
           
            
            
        
            

        })
    }
     else if (i == 2)
    {
        list33.addEventListener('click', () => {
      
          
               if(listd.style.display=="none")
                listd.style.display = " inline-block";
            lista.style.display = "none";
            listb.style.display = "none";
            listc.style.display = "none";
            liste.style.display = "none";
        
           
            
            
        
            

        })
    }
     else if (i == 3)
     {
         list44.addEventListener('click', () => {
      
          
                if(listc.style.display=="none")
                 listc.style.display = " inline-block";
             lista.style.display = "none";
             listb.style.display = "none";
             listd.style.display = "none";
             liste.style.display = "none";
        
           
            
            
        
            

         })
    }

     else if (i == 4)
     {
         list22.addEventListener('click', () => {
      
          
                if(liste.style.display=="none")
                 liste.style.display = " inline-block";
             lista.style.display = "none";
             listb.style.display = "none";
             listc.style.display = "none";
             listd.style.display = "none";
        
           
            
            
        
            

         })
    }
    
    
}
const moretext = document.getElementById("moretext");
const textparg = document.getElementById("textparg");
moretext.addEventListener('click', () => {
    var im = ["نقدم لكم وجبات متنوعة ومشروبات باردة وساخنة" , "بيتزا ", "شاي ", "قهوة ", "ساندويش" , ""];
   
    textparg.innerHTML = im[i];
    i++;
    if (i >= im.length) 
        i = 0;
      
            timer = setTimeout('start()', 3000);
        
    
    
    return stop;

})