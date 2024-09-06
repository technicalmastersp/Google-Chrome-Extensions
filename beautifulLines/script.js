fetch('https://hindi-quotes.vercel.app/random')
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const lineElement = document.getElementById('lineElement')
        lineElement.innerHTML = data.quote
      });