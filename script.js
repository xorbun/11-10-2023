fetch(
    " https://striveschool-api.herokuapp.com/books"
)
.then((res)=>
{
    if(res.ok)
    {
        return res.json()
    }
    else
    {
        if(res.status===404)
        {
            throw new Error("404 - Not Found")
        }
        else if (res.status===500)
        {
            throw new Error("500 - Internal Server Error")
        }
        else
        {
            throw new Error("Errore Generico")
        }
    }
})
.then ((bookdata)=>
{
    console.log(bookdata)
    const row = document.getElementById("booksrow")
    row.classList.add("row","row-cols-1","row-cols-lg-4")
   console.log(bookdata.length)

    bookdata.forEach((book)=> 
    {
       
        const col=document.createElement("div")
        col.classList.add("col")
        const card= document.createElement("div")
        card.classList.add("card", "mb-3", "w-100")
        const newimg=document.createElement("img")
        newimg.setAttribute("src", book.img)
        newimg.classList.add("img-fluid","w-100")
        const newtitle=document.createElement("p")
        const newprice=document.createElement("p")
        newtitle.innerText=book.title
        newprice.innerText="prezzo: "+ book.price + "$"
        const discard=document.createElement("button")
        discard.innerText="cancella"
        discard.addEventListener("click", function()
        {
            
        })
        card.appendChild(newimg)
        card.appendChild(newtitle)
        card.appendChild(newprice)
        card.appendChild(discard)
        col.appendChild(card)
        row.appendChild(col)
        
        
    });
 
        

          
   
   
})
.catch((err)=>
{
    console.log(err)
})
