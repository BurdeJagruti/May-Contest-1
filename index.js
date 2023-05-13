const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
  } catch (error) {
    console.error(error);
  }
});

function PromiseAPI1() {

    let heading1=document.getElementById('heading1')
    let heading11=document.createElement('h2')
    heading11.innerText="Table-1 "
    heading1.appendChild(heading11)

  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const resultDiv = document.getElementById('container_1');
      
      console.log(data.posts);
 
      let tr = document.createElement('tr')
      let td = document.createElement('th');
      td.innerHTML =" ID"
      let td2 = document.createElement('th');
      td2.innerHTML = 'Title';
   
     let td3 = document.createElement('th');
      td3.innerHTML ='Body';

       let td4 = document.createElement('th');
      td4.innerHTML = 'UserID';
      resultDiv.append(tr,td,td2,td3,td4)

      data.posts.forEach(el => {
      
        
        let tr = document.createElement('tr')
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.title;
    
      let td3 = document.createElement('td');
       td3.innerHTML = el.body;

        let td4 = document.createElement('td');
       td4.innerHTML = el.userId;
       resultDiv.append(tr,td,td2,td3,td4)
      });
     
 
      resolve(true);
    }, 1000);
  });
}

function PromiseAPI2() {
    let heading1=document.getElementById('heading2')
    let heading11=document.createElement('h2')
    heading11.innerText="Table-2 "
    heading1.appendChild(heading11)

  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
   
    const resultDiv = document.getElementById('container_2');
   
   
    console.log(data.products)
    let tr = document.createElement('tr')
    let td = document.createElement('th');
    td.innerHTML =" ID"
    let td8 = document.createElement('th');
    td8.innerHTML =" Thumbnail"
    let td2 = document.createElement('th');
    td2.innerHTML = 'Title';
 
   let td3 = document.createElement('th');
    td3.innerHTML ='Description';

     let td4 = document.createElement('th');
    td4.innerHTML = 'Price';
    let td5 = document.createElement('th');
    td5.innerHTML = 'Rating';
    let td6 = document.createElement('th');
    td6.innerHTML = 'Brand';
    let td7 = document.createElement('th');
    td7.innerHTML = 'Images';
    resultDiv.append(tr,td,td8,td2,td3,td4,td5,td6,td7)
    data.products.forEach(el => {
       
        
        let tr = document.createElement('tr')
       
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       let Thumbnail= document.createElement('img');
       Thumbnail.src=el.thumbnail;
       Thumbnail.width = '30';
       Thumbnail.height = '30';
       td2.appendChild(Thumbnail)
       let td3 = document.createElement('td');
       td3.innerHTML = el.title;
    
      let td4 = document.createElement('td');
       td4.innerHTML = el.description;
       let td5 = document.createElement('td');
       td5.innerHTML = el.price;
       let td6 = document.createElement('td');
       td6.innerHTML = el.rating;
       let td7 = document.createElement('td');
       td7.innerHTML = el.brand;
       let td8 = document.createElement('td');
      let images= document.createElement('img');
      images.src=el.images[0];
      images.width = '30';
     images.height = '30';
      td8.appendChild(images)
       resultDiv.append(tr,td,td2,td3,td4,td5,td6,td7,td8)
      });
      resolve(true);
    
    }, 2000);
  });
}

function PromiseAPI3() {
    let heading1=document.getElementById('heading3')
    let heading11=document.createElement('h2')
    heading11.innerText="Table-3 "
    heading1.appendChild(heading11)
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
 
    console.log(data)
  
    const resultDiv = document.getElementById('container_3');
    let tr = document.createElement('tr')
    let td = document.createElement('th');
    td.innerHTML =" ID"
    let td2 = document.createElement('th');
    td2.innerHTML = 'ToDo';
 
   let td3 = document.createElement('th');
    td3.innerHTML ='Completed';

     let td4 = document.createElement('th');
    td4.innerHTML = 'User Id';
    resultDiv.append(tr,td,td2,td3,td4)
    data.todos.forEach(el => {
     
        
        let tr = document.createElement('tr')
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.todo;
    
      let td3 = document.createElement('td');
       td3.innerHTML = el.completed;
       let td4 = document.createElement('td');
       td4.innerHTML = el.userId;
       resultDiv.append(tr,td,td2,td3,td4)
      });
      resolve(true);
    }, 3000);
  });
}