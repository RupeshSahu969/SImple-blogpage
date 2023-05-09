

let page=1

const getDatas=(page)=>{
    const url=`https://newm.onrender.com/blogs?_page=${page}&_limit=4`
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        getAllBlog(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
getDatas(page);



function getAllBlog(res){
    let container=document.getElementById("blog");
    container.innerHTML=""
    res?.map(function(el){

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src="https://avatars.githubusercontent.com/u/75201337?s=48&v=4"
        img.setAttribute("class","img1")

        let username=document.createElement("h4");
        username.textContent=el.username
        username.setAttribute("class","tata1")

        let title=document.createElement("h3");
        title.textContent=el.title
        title.setAttribute("class","tata1234")

        let content=document.createElement("p");
        content.textContent=el.content
        content.setAttribute("class","tata12345")

        let count=0
        let likes=document.createElement("p");
        likes.textContent=el.likes
        likes.style.cursor="pointer"
        
        likes.addEventListener("click",function(){
            countLikes(el.id)
        })

        let category=document.createElement("p");
        category.textContent=el.category
        category.setAttribute("class","tata12")

        let date=document.createElement("p");
        date.textContent=el.date
        date.setAttribute("class","tata123")
    
        let edit=document.createElement("button");
        edit.textContent="Edit";
        edit.style.cursor="pointer"
        edit.style.backgroundColor="#ff7d54"
        edit.style.color="while"
        edit.setAttribute("class","btn1")
        edit.addEventListener("click",function(){
            editbutton(el.id)
        })
        let blogbtn=document.createElement("button");
        blogbtn.textContent=" Create Blog";
        blogbtn.style.cursor="pointer"
        blogbtn.style.backgroundColor="black"
        blogbtn.style.color="while"
        blogbtn.setAttribute("class","btn4")
        blogbtn.addEventListener("click",function(){
            CreateBlog(el.id)
        })

        let del=document.createElement("button");
        del.textContent="Delete";
        del.style.cursor="pointer"
        del.style.backgroundColor="#d20f84"
        del.style.color="while"
        del.setAttribute("class","btn2")
        del.addEventListener("click",function(){
            deleteBookes(el.id)
        })
        let comentbtn=document.createElement("button");
        comentbtn.textContent="Add To Comment";
        comentbtn.style.cursor="pointer"
        comentbtn.style.backgroundColor="black"
        comentbtn.style.color="while"
        comentbtn.setAttribute("class","btn3")
        comentbtn.addEventListener("click",function(){
            CommitBtn(el.id)
        })

        div.append(img,username,title,category,date,content,likes,edit,del,comentbtn,blogbtn);
        container.append(div);


    })

}

function countLikes(likes){
    likes+1
    
}

function CreateBlog(){
    window.location.href="/AddBlog.html"
}

function handleSort()
{
    let newsort =document.querySelector("#date").value;
    console.log(newsort)

    fetch(`https://newm.onrender.com/blogs?_sort=date&_order=${newsort}`)
    .then((res)=>res.json())
    .then((data)=>getAllBlog(data));
    
}


function handleFilterData()
{
    let filter=document.getElementById("filter").value;

    console.log(filter);

    fetch(`https://newm.onrender.com/blogs?q=${filter}`)
    .then((res)=>res.json())
    .then((data)=>getAllBlog(data));
    

}


const dataPagesInc = (page) => {
    if (page < page.length) {
        page++;
    }
    getDatas(page);
}
const dataPagesDec = (page) => {
    if (page > 2) {
        page--;
    }
    getDatas(page);
}
const dataPages1 = () => {
    getDatas(1);
}
const dataPages2 = () => {
    getDatas(2);
}
const dataPages3 = () => {
    getDatas(3);
}

function deleteBookes(id) {
    fetch(`https://newm.onrender.com/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        getDatas()
        
        alert("deleted Data");
        window.location.reload();
      });
  }

  function  editbutton(id) {
   
    fetch(`https://newm.onrender.com/blogs/${id}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        res[0]
        setEdit(res.book_name,res.author,res.genre,res.edition,res.publisher,res.cost
        )
        
      });
  }
