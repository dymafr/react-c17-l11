export async function getRecipes() {
  const response = await fetch('https://restapi.fr/api/recipes');
  if (response.ok) {
    return response.json();
    // throw new Error("Oops");
    // return new Promise((res) => {
    //   setTimeout(() => {
    //     res(body);
    //   }, 3000);
    // });
  } else {
    throw new Error('something went wrong');
  }
}
