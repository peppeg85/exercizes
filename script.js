const BASE_PATH = 'https://api.publicapis.org';

const options = {
  method: 'GET',
  url: `${BASE_PATH}/categories`
};

axios(options)
  .then((response) => {
    console.log('data', response.data)
    const categories = [...response.data.categories]
    const maindiv = document.getElementById('main')
    categories.forEach(el => {
      let div = document.createElement('div')
      div.innerHTML = el
      maindiv.append(div);
    })


    /* categories.forEach(el => {
      let div = document.createElement('div')
      div.innerHTML = el
      maindiv.append(div);
    }); */
  });