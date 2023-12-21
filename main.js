const initApp = () => {
  const jokeEl = document.getElementById('joke');
  const jokeBtn = document.getElementById('joke-btn');

  const URL = 'https://api.chucknorris.io/jokes/random';

  const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', URL);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const data = JSON.parse(this.responseText);

          jokeEl.textContent = data.value;
        } else {
          jokeEl.textContent = 'Something Went Wrong ☹️ (Not Funny)';
        }
      }
    };

    xhr.send();
  };

  generateJoke();

  jokeBtn.addEventListener('click', generateJoke);
};

document.addEventListener('DOMContentLoaded', initApp);
