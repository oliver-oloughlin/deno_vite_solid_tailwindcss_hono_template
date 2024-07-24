import { Button } from "../components/Button.tsx"
import { api } from "../utils/api.ts";

function App() {
  const onClick = async () => {
    const res = await api.index.$get()
    const data = await res.text()
    alert(data)
  }

  return (
    <main class="grid gap-8 place-content-center py-32">
      <h1 class="text-cyan-200">Hello World!</h1>
      <Button onClick={onClick}>Click me!</Button>
    </main>
  );
}

export default App;
