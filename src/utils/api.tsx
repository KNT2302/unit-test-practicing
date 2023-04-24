const wait = () => new Promise((resolve)=>
setTimeout(resolve,3000)
)

export const getSource = async () => {

  await wait()

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (res.ok) {
    const source = await res.json();
    return {
      success: true,
      data: source,
    };
  }
  return {
    success: false,
  };
};
