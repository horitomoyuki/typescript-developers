import axios from 'axios';

export {};

let url: string =  
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: any;
  data = response.data;
  console.log(response.data);
});

// TypeScript側から見て得体の知れないレスポンスデータの場合any型が用いられる