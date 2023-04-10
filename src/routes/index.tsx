import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>petya krutoy</Title>
      <h1>счётчик того, насколько петя крутой:</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://vk.com/debeloid" target="_blank">
        https://vk.com/debeloid
        </a>{" "}
        moy vkontakte.
      </p>
    </main>
  );
}
