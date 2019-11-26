// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => res.json())
//       .then(users => setUsers(users));
//   }, [search]);

//   const filterUsers = users.filter(user => user.name.toLowerCase().includes(search));
//   const searchChange = event => setSearch(event.target.value);

//   return (
//     <div>
//       <input type="text" onChange={searchChange} />
//       {filterUsers.map(user => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`)
      .then(res => res.json())
      .then(users => setUsers(users));
  }, [search]);

  const searchChange = event => setSearch(event.target.value);

  return (
    <div>
      <input type="text" onChange={searchChange} />
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
