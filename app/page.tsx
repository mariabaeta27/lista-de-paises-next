import { Card } from "@/components";

const Home = () => (
  <div className="grid grid-cols-5 gap-3 ml-48 mt-24 w-4/5">
    {[
      { name: "Teste", id: 1 },
      { name: "Teste", id: 2 },
      { name: "Teste", id: 3 },
      { name: "Teste", id: 4 },
      { name: "Teste", id: 5 },
      { name: "Teste", id: 1 },
      { name: "Teste", id: 2 },
      { name: "Teste", id: 3 },
      { name: "Teste", id: 4 },
      { name: "Teste", id: 5 },
    ]?.map((contrie: any) => (
      <Card contrie={contrie} key={contrie.id} />
    ))}
  </div>
);

export default Home;
