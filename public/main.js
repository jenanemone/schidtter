const trash = document.querySelectorAll(".delete"),
    upvotes = document.querySelectorAll(".upvote"),
    downvotes = document.querySelectorAll(".downvote");


Array.from(upvotes).forEach(e => {
    e.addEventListener('click', addUpvote)
});

Array.from(downvotes).forEach(e => {
    e.addEventListener('click',addDownvote)
})

Array.from(trash).forEach(e => {
    e.addEventListener('click', deletePost)
})

async function addUpvote() {
    const itemId = this.parentNode.getAttribute('data-id');
    try {
          const response = await fetch('addOneUpvote', {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  info: itemId,
        
              })
          })
          const data = await response.json()
          console.log(data)
          location.reload()
      }
      catch (err) {
          console.log(err)
      }
}


 async function addDownvote() {
     const itemId = this.parentNode.getAttribute('data-id');
     try {
         const response = await fetch('addOneDownvote', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 info: itemId
             })
         })
         const data = await response.json()
         console.log(data)
         location.reload()
     }
     catch (err) {
         console.log(err)
     }
 }

 async function deletePost() {
    const itemId = this.parentNode.getAttribute('data-id');
    try {
         const response = await fetch('deleteOnePost', {
             method: 'delete',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 info: itemId
             })
         })
         const data = await response.json()
         console.log(data)
         location.reload()
     }
     catch (err) {
         console.log(err)
     }
 }