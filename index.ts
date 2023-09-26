import { Client, fql, FaunaError, ClientConfiguration } from "fauna";

// configure your client
const client = new Client({
  secret: 'fnAEhSo8M5ACS_oTgwPArmnUGxL3gYFfZUMaH8je',
});

// try {
//   // // build queries using the `fql` function
//   // const collectionQuery = fql`Collection.create({ name: "Dogs" })`;
//   // // execute the query
//   // const collectionResponse = await client.query(collectionQuery);

//   // // define some data in your app
//   // const dog = { name: "Scout" };

//   // // query using your app's local variables
//   // const documentQuery = fql`
//   //   Dogs.create(${dog}) {
//   //     id,
//   //     ts,
//   //     name
//   //   }
//   // `;

//   const documentQuery = fql`Collection.byName("CoffeeBean")`


//   // execute the query
//   const response = await client.query(documentQuery);
//   return new Response(response);
// } catch (error) {
//   if (error instanceof FaunaError) {
//     // handle errors
//   }
// } finally {
//   // clean up any remaining resources
//   client.close();
// }

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    try {
      // const documentQuery = fql`Collection.byName("chameleon")`
      const documentQuery = fql`Collection.all()`
      const response = await client.query(documentQuery);
      // return new Response(response);
      // console.log(response)
      return new Response("Bun!");
    } catch (error) {
      if (error instanceof FaunaError) {
        // handle errors
      }
      console.log(error)
      return new Response(JSON.stringify(error));
    }
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
console.log(Bun.version)