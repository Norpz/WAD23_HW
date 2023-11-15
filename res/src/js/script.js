
/*
"id": 1,
      "title": "I like vegetables",
      "author": "Arian Veget",
      "create_time": "2023-11-01T12:00:00",
      "content": "I went to the cinema and ate very good corn!",
      "image_url": "LISADA PILDI URL, NT GITHUBIST VMS",
      "imageAuthor_url": "LISADA PILDI URL, NT GITHUBIST VMS"
*/

window.onload = function(){


    document.getElementById("dropdownImg").addEventListener('click', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block' || getComputedStyle(dropdownContent).display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

fetch('res/json/posts.json')
        .then((response) => response.json())
        .then(json => {


            const postContainer = document.createElement("div")
            postContainer.className="post-container"

            console.log(json)

            json.forEach(element => {

                const postDiv = document.createElement("div")
                postDiv.className = "post"

                const userProfileDiv = document.createElement("div")
                userProfileDiv.className = "user-profile" 

                const profileImg=document.createElement("img")
                profileImg.src=element.imageAuthor_url
                profileImg.alt="User Profile Picture"

                const nameDiv=document.createElement("div")
                nameDiv.innerHTML=element.author

                const postImageDiv=document.createElement("div")
                postImageDiv.className="post-image"

                const captionDiv=document.createElement("div")
                captionDiv.className="caption"
                captionDiv.innerHTML=element.content

                const likeImgDiv = document.createElement("div")
                likeImgDiv.className = "likeDiv"


                const likeImg = document.createElement("img")
                likeImg.src="res/images/like.png"
                likeImg.className = "like"
                

                likeImgDiv.appendChild(likeImg)
                


                const dateDiv=document.createElement("div")
                dateDiv.className="date"
                dateDiv.innerHTML=element.create_time

                
                userProfileDiv.appendChild(profileImg)
                userProfileDiv.appendChild(nameDiv)
                postDiv.appendChild(userProfileDiv)

                if(element.image_url!=""){
                    const postImg=document.createElement("img")
                    postImg.src=element.image_url
                    postImg.alt="Post Image"
                    postImageDiv.appendChild(postImg)
                    postDiv.appendChild(postImageDiv)
                }

                postDiv.appendChild(captionDiv)
                postDiv.appendChild(likeImgDiv)
                postDiv.appendChild(dateDiv)

                postContainer.appendChild(postDiv)

            });
            const footer = document.createElement("footer")
            footer.innerHTML = "RAM 2023"
            document.body.appendChild(postContainer)
            document.body.appendChild(footer)

        })
        .catch(error => console.error("Error fetching data:", error))

        
    }