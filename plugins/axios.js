
export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (process.env.DEV == 'true') {
      console.log("Making request to " + config.url);
    }
  });

  $axios.onError(error => {
  });
}

