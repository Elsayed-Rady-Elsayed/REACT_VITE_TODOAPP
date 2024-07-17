// const [name, setname] = useState("");
// const [email, setEmail] = useState("");
// const saveDate = async () => {
//   const db = getDatabase(app);
//   const newdoc = push(ref(db, "todo/task"));
//   set(newdoc, {
//     name: name,
//     email: email,
//   })
//     .then(() => {
//       alert("data saved succefully");
//     })
//     .catch((e) => alert(e));
// };

// const [data, setData] = useState([]);
// async function getData() {
//   const db = getDatabase(app);
//   const newdoc = ref(db, "todo/task");
//   const snapShot = await get(newdoc);
//   console.log(snapShot);
//   if (snapShot.exists) {
//     const ddd = snapShot.val();
//     const mData = Object.keys(ddd).map((s) => {
//       return {
//         ...ddd[s],
//         uid: s,
//       };
//     });
//     // setData(Object.values(snapShot.val()));
//     setData(mData);
//   } else {
//     alert("errr");
//   }
// }
// useEffect(() => {
//   getData();
// }, []);
// console.log(data);
// // const [n, setn] = useState("");
// // const [e, sete] = useState("");

// const showData = data.map((el, idx) => {
//   let n = "";
//   let em = "";
//   return (
//     <div
//       key={idx}
//       style={{
//         display: "flex",
//         gap: "5px",
//       }}
//     >
//       <input
//         type="text"
//         onChange={(e) => {
//           n = e.target.value;
//         }}
//       />
//       <input
//         type="email"
//         onChange={(e) => {
//           em = e.target.value;
//         }}
//       />
//       {/* <input type="email" value={el.uid} /> */}
//       <button onClick={() => Update(el.uid, em, n)}>edit</button>
//       <button onClick={() => dalete(el.uid)}>remove</button>
//     </div>
//   );
// });
// const Update = async (id, e, n) => {
//   const db = getDatabase(app);
//   const newdoc = ref(db, "todo/task/" + id);
//   set(newdoc, {
//     name: n,
//     email: e,
//   })
//     .then(() => {
//       alert("data changed succefully");
//     })
//     .catch((e) => alert(e));
// };
// const dalete = async (id) => {
//   const db = getDatabase(app);
//   const newdoc = ref(db, "todo/task/" + id);
//   remove(newdoc)
//     .then(() => {
//       alert("data deleted succefully");
//     })
//     .catch((e) => alert(e));
// };
