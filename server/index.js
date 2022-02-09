
const page = (title, body) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    </head>
    <body>
      ${body}
    </body>
    </html>
    `;
  };

  const index = () => {
    const title = "Register";
    const body = `  <h3>Short Urls!</h3>
    <form method="post">
      <label for="long">Enter your url:</label>
      <input type="url" name="long" id="long"/>
      <input type="submit"/>
    </form>`;
  
    return page(title, body);
  };

  const confirm = (name, successfull) => {
    console.log(process.env);
    const title = "Confrimation";
    const body = successfull
      ? `  <h3>Here is your short url! 🎉</h3>
        <a href = "${process.env.URL}${name}">${process.env.URL}${name}</a>
    `
      : `
    <h3>Sorry! Something went wrong :(</h3>
    <h4>Please try again later!</h4>
    `;
    return page(title, body);
  };
  
  const message = (name, key) => {
    return `<h4>${name}</h4>
    <h4>Your new url:</h4>
    <pre><code>${key}</code></pre>`;
  };  

module.exports = { index, confirm };
