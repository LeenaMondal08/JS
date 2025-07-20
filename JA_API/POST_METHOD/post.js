const form=document.getElementById('postForm');
form.addEventListener('submit', (e)=> {
      e.preventDefault(); // prevent form from refreshing

      const title = document.getElementById('title').value;
      const body = document.getElementById('body').value;

      let response=fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        })
      })
      let jsonf=response.then(res => res.json());
      let data=jsonf.then(data => {
        console.log('Server responded:', data);
        alert('Post sent successfully!\nCheck console for response.');
      });
      response.catch(err => {
        console.error('Error:', err);
        alert('Something went wrong!');
      });
    });
    







