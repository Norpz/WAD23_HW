
/*
"id": 1,
      "title": "I like vegetables",
      "author": "Arian Veget",
      "create_time": "2023-11-01T12:00:00",
      "content": "I went to the cinema and ate very good corn!",
      "image_url": "LISADA PILDI URL, NT GITHUBIST VMS"
*/

window.onload = function(){



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
                profileImg.src=""
                profileImg.alt="User Profile Picture"

                const nameDiv=document.createElement("div")
                nameDiv.innerHTML=element.author

                const postImageDiv=document.createElement("div")
                postImageDiv.className="post-image"
                
                const postImg=document.createElement("img")
                postImg.src=""
                postImg.alt="Post Image"

                const captionDiv=document.createElement("div")
                captionDiv.className="caption"
                captionDiv.innerHTML=element.content
                console.log(element.content)

                const dateDiv=document.createElement("div")
                dateDiv.className="date"
                dateDiv.innerHTML=element.create_time

                
                userProfileDiv.appendChild(profileImg)
                userProfileDiv.appendChild(nameDiv)
                postDiv.appendChild(userProfileDiv)

                postImageDiv.appendChild(postImg)
                postDiv.appendChild(postImageDiv)

                postDiv.appendChild(captionDiv)
                postDiv.appendChild(dateDiv)

                postContainer.appendChild(postDiv)

            });

            document.body.appendChild(postContainer)

        })
    }