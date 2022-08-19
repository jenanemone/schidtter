const trash = document.querySelectorAll(".fa-trash-can"),
    upvotes = document.querySelectorAll(".upvote"),
    downvotes = document.querySelectorAll(".downvote");


Array.from(upvotes).forEach(e => {
    e.addEventListener('click', addUpvote)
});

Array.from(downvotes).forEach(e => {
    e.addEventListener('click',addDownvote)
})

async function addUpvote() {
     const itemId = this.parentNode.childNodes[1].innerText;
     console.log("about to try",itemId,itemVotes)
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
     const itemId = this.parentNode.childNodes[1].innerText;
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