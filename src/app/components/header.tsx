import MainNav from "./main_nav";

export default function Header() {
  const x = [
    {
      name: "x",
      salary: 300,
    },
    {
      name: "y",
      salary: 400,
    },
    {
      name: "Hamza",
      salary: 500,
    },
  ];

  x.map((item) => {
    console.log(item.name, " And salary BDT ", item.salary);
  });
  return (
    <>
      <MainNav />
    </>
  );
}
