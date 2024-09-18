import { callFromArray, create } from "./modules/array.js";
import search from "./modules/find.js";

export default async function main() {
  let array = create(15);

  console.log(
    "%c Calling search with arguments: (array, 'name', 'Henry')",
    "font-size: 20px",
  );
  await search(array, "name", "Henry")
    .then((res) => {
      console.log("%c People were found ", "background: #222; color: #bada55");
      console.log(res);

      callFromArray(res);
    })
    .catch((err) => console.error(err));

  console.log(
    "%c Calling search with arguments: (array, 'age', 25)",
    "font-size: 20px",
  );
  await search(array, "age", 25)
    .then((res) => {
      console.log("%c People were found ", "background: #222; color: #bada55");
      console.log(res);

      callFromArray(res);
    })
    .catch((err) => console.error(err));

  console.log(
    "%c Calling search with arguments: (array, 'weight', 70)",
    "font-size: 20px",
  );
  await search(array, "weight", 70)
    .then((res) => {
      console.log("%c People were found ", "background: #222; color: #bada55");
      console.log(res);

      callFromArray(res);
    })
    .catch((err) => console.error(err));
}
