const trash = document.querySelectorAll(".fa-trash-can"),
    upvotes = document.querySelectorAll(".upvote"),
    downvotes = document.querySelectorAll(".downvote");


Array.from(upvotes).forEach(e => {
    e.addEventListener('click', upvote)
});

Array.from(downvotes).forEach(e => {
    e.addEventListener('click',downvote)
})

async function upvote() {
     const itemId = this.parentNode.childNodes[1].innerText;
     const itemVotes = this.parentNode.childNodes[5].innerText
      try {
          const response = await fetch('addOneUpvote', {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  info: itemId,
                  upvote: itemVotes
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


 async function downvote() {
     const itemId = this.parentNode.childNotes[1].innerText;
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